FROM registry.access.redhat.com/ubi8/ubi:latest

#WORKDIR /opt/app-root/

RUN dnf -y update && \
    dnf -y install httpd && \
    dnf clean all && \
    chown -R 1001:0 /run
    
COPY index.html /var/www/html/

EXPOSE 80

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
