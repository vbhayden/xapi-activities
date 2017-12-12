FROM node:8@sha256:b6851a0a57e26559ce47c711c53485035c723f58171743cdccf829f455b69b13
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production
RUN npm prune
COPY dist dist

EXPOSE 80
CMD ["npm", "start"]
