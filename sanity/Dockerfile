FROM node:18-alpine


COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock

RUN cd /tmp && yarn install

RUN mkdir -p /sanity-app && cp -a /tmp/node_modules /sanity-app/

WORKDIR /sanity-app

EXPOSE 3333
CMD yarn dev