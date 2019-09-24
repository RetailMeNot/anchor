FROM node:lts as builder

WORKDIR /usr/app

COPY . .
RUN npm i -g yarn
RUN yarn

WORKDIR /usr/app/docs

RUN yarn
RUN yarn build


FROM mesosphere/aws-cli
COPY --from=builder /usr/app/docs/public .

CMD ["s3", "sync", "./", "s3://anchor.retailmenot.design", "--acl", "public-read"]
