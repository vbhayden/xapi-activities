FROM node:8@sha256:25825d9cf262f4103ff5aaf02ec1a7eab00f1ef9e62e0556880df23ca5f77ed0
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production
RUN npm prune
COPY dist dist

EXPOSE 80
CMD ["npm", "start"]
