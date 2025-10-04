FROM node:latest

LABEL maintainer="Alexander Y Lyapko z@sunsay.ru"

RUN mkdir -p /opt/telegrembo

COPY . /opt/telegrembo

WORKDIR /opt/telegrembo

RUN npm install

CMD [ "npm", "start" ]