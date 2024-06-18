FROM registry.redhat.io/rhel8/nodejs-20:1-46.1717586532

WORKDIR /opt/app-root/application

COPY . /opt/app-root/application/

USER root

RUN chown -R 1001:1001 /opt/app-root/application/

RUN npm install 

EXPOSE 8080

USER  1001

CMD npm run start
