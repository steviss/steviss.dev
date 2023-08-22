FROM node:18-alpine

RUN apk add --no-cache git
RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev

COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn install
RUN mkdir -p /sanity-app && cp -a /tmp/node_modules /sanity-app/

WORKDIR /sanity-app
COPY . /sanity-app

EXPOSE 3333
CMD yarn dev