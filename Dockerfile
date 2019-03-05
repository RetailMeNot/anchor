FROM node:dubnium as builder

WORKDIR /usr/app

COPY . .
RUN npm ci
RUN npm test
RUN npm run lint

WORKDIR /usr/app/docs

RUN npm ci
RUN npm run build


FROM mesosphere/aws-cli
COPY --from=builder /usr/app/docs/public .

CMD ["s3", "sync", "./", "s3://anchor.retailmenot.design", "--acl", "public-read"]
