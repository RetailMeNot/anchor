FROM node:dubnium as builder

WORKDIR /usr/app

COPY . .
RUN npm i
RUN npm test
RUN npm run lint

WORKDIR /usr/app/docs

RUN npm i
CMD ["npm", "run", "build"]
