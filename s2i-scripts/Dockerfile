FROM registry.access.redhat.com/ubi8/ubi:8.10-901.1717584420

LABEL io.k8s.description="My custom Builder" \
 io.k8s.display-name="Nginx 1.6.3" \
 io.openshift.expose-services="8080:http" \
 io.openshift.tags="builder,webserver,html,nginx" \
 io.openshift.s2i.scripts-url="image:///usr/libexec/s2i" 

USER root

RUN yum install -y --nodocs nginx && \
 yum clean all
#RUN sed -i "s/Listen 80/Listen 8080/g" /etc/nginx/nginx.conf

RUN chgrp -R 0 /run /var/run && \
 chmod -R g=u /run /var/run

EXPOSE 8080

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./.s2i/bin/ /usr/libexec/s2i
