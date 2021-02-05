FROM node:alpine as buildstage
ADD . /app
WORKDIR /app
RUN yarn install && yarn build
CMD yarn start