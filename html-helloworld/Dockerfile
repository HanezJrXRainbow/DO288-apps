FROM registry.access.redhat.com/ubi8/ubi:latest

#WORKDIR /opt/app-root/

RUN dnf -y update && \
    dnf -y install httpd && \
    dnf clean all && \
    sed -i's/Listen 80/Listen 8080/' /etc/httpd/conf/httpd.conf
    chown -R 1001:0 /run
    
COPY index.html /var/www/html/

EXPOSE 8080

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
