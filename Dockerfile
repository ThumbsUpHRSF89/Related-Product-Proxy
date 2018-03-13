FROM node:9.8.0-alpine

RUN mkdir -p /src/app1

WORKDIR /src/app1

COPY . /src/app1

RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]
