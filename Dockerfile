FROM node:18-alpine3.16

WORKDIR /usr/app

COPY ./SampleWebApp_2 /usr/app

RUN npm install

CMD ["npm","start"]