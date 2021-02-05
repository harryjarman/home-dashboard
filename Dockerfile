FROM node:alpine as buildstage
ENV NEXT_TELEMETRY_DISABLED=1
ADD . /app
WORKDIR /app
RUN yarn install && yarn build
CMD yarn start