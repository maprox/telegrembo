FROM node:latest
MAINTAINER Alexander Y Lyapko sunsay@maprox.net
RUN mkdir -p /opt/telegrembo
COPY . /opt/telegrembo
WORKDIR /opt/telegrembo
RUN npm install
CMD [ "npm", "start" ]