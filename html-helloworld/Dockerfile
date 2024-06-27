FROM registry.access.redhat.com/ubi8/ubi:8

#WORKDIR /opt/app-root/

RUN dnf -y update && \
    dnf -y install httpd && \
    dnf clean all
    
COPY index.html /var/www/html/

EXPOSE 80

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
