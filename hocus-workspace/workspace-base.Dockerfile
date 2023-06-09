FROM gcc:12.2.0 as dtach-builder

RUN git clone https://github.com/hocus-dev/dtach \
     && cd dtach \
     && git checkout 9691ed5322c8e599cce6a3fbcae04ac483fa727f
WORKDIR /dtach
RUN ./configure LDFLAGS="-static -s" CFLAGS="-O3" && make

FROM ubuntu:22.04 as hocus-workspace
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    curl \
    dialog \
    init \
    openssh-server \
    sudo \
    util-linux \
    vim \
    git \
    tmux && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
COPY --from=dtach-builder /dtach/dtach /usr/bin/
COPY ./docker/dnssetup /etc/init.d/dnssetup
RUN chmod 755 /etc/init.d/dnssetup && \
    chown root:root /etc/init.d/dnssetup && \
    update-rc.d dnssetup defaults
RUN useradd hocus -m -s /bin/bash && \
    usermod -aG sudo hocus && \
    passwd -d hocus && \
    echo "hocus ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers && \
    chown -R hocus:hocus /home/hocus
COPY ./docker/ssh/sshd_config /etc/ssh/sshd_config
RUN mkdir -p /home/hocus/.ssh && touch /home/hocus/.ssh/known_hosts && \
    # this public key is automatically removed when a workspace starts
    echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKk+DZs+E2GlmqUNqTCU9/R0kT/zzBjwBqbPaBtGv3MA hocus@prebuild" >> /home/hocus/.ssh/authorized_keys && \
    chown -R hocus:hocus /home/hocus/.ssh && \
    chmod 700 /home/hocus/.ssh && \
    chmod 600 /home/hocus/.ssh/authorized_keys && \
    chmod 600 /home/hocus/.ssh/known_hosts
RUN echo 'set -g default-terminal "tmux-256color"' >> /home/hocus/.tmux.conf

# Ensure ~/.ssh/ssh_auth_sock ALWAYS points to a valid symlink :)
# Motivation: https://gist.github.com/martijnvermaat/8070533 && https://werat.dev/blog/happy-ssh-agent-forwarding/
COPY ./docker/ssh/rc /home/hocus/.ssh/rc
RUN chmod 700 /home/hocus/.ssh/rc && chown hocus:hocus /home/hocus/.ssh/rc
COPY ./docker/ssh/on_ssh_disconnect.sh /etc/on_ssh_disconnect.sh
RUN echo 'session optional pam_exec.so log=/var/log/on_ssh_disconnect.log /etc/on_ssh_disconnect.sh' >> /etc/pam.d/sshd

# Ensure shells use ~/.ssh/ssh_auth_sock when used over ssh
# Generally if there is an ssh session then one of SSH_CONNECTION, SSH_CLIENT, SSH_TTY will be set
USER hocus
# Bash
RUN echo '\nif [ -v SSH_CONNECTION ] || [ -v SSH_CLIENT ] || [ -v SSH_TTY ]; then\n  export SSH_AUTH_SOCK=~/.ssh/ssh_auth_sock;\nfi\n' >> ~/.bashrc
