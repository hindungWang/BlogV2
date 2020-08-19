FROM python:3.6 as python3.6-oracleclient

RUN sed -i 's http://.*.debian.org http://mirrors.aliyun.com g' /etc/apt/sources.list &&\
    apt-get update &&\
    apt-get install rpm wget -y&&\
    mkdir -p  /usr/local/share/applications &&\
    wget -O /usr/local/share/applications/oracle-instantclient.rpm  https://download.oracle.com/otn_software/linux/instantclient/19800/oracle-instantclient19.8-basic-19.8.0.0.0-1.x86_64.rpm?xd_co_f=2f9c6660130c9f2b5501597631919585 &&\
    rpm -ivh /usr/local/share/applications/oracle-instantclient.rpm &&\
    rm /usr/local/share/applications/oracle-instantclient.rpm