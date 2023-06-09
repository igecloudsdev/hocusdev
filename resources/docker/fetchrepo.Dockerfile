FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    curl \
    dialog \
    init \
    iputils-ping \
    net-tools \
    openssh-server \
    sudo \
    util-linux \
    git \
    git-lfs \
    vim
RUN systemctl enable ssh
COPY ./docker/dnssetup /etc/init.d/dnssetup
RUN chmod 755 /etc/init.d/dnssetup && \
    chown root:root /etc/init.d/dnssetup && \
    update-rc.d dnssetup defaults
RUN useradd hocus -m -s /bin/bash && \
    usermod -aG sudo hocus && \
    echo "hocus ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers && \
    chown -R hocus:hocus /home/hocus && \
    echo 'hocus:hocus' | chpasswd
RUN sed -i 's/#PermitUserEnvironment no/PermitUserEnvironment yes/g' /etc/ssh/sshd_config
RUN sed -i 's/AcceptEnv .*/AcceptEnv */g' /etc/ssh/sshd_config
RUN git lfs install
