FROM registry.access.redhat.com/ubi8/ubi:latest

#WORKDIR /opt/app-root/

RUN dnf -y update && \
    dnf -y install httpd && \
    dnf clean all && \
    sed -i 's/Listen 80/Listen 8080/' /etc/httpd/conf/httpd.conf && \
    echo "ServerName localhost" >> /etc/httpd/conf/httpd.conf && \
    chgrp -R 0 /run /etc/httpd/logs && \
    chmod -R g=u /run /etc/httpd/logs
    
COPY index.html /var/www/html/

EXPOSE 8080

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
