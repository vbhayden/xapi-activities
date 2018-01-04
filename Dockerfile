FROM node:8@sha256:19cc0100af8c67406f70cb1c27700e9c958d3d0ee2982e2ca0563d7bb8abf319
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production
RUN npm prune
COPY dist dist

EXPOSE 80
CMD ["npm", "start"]
