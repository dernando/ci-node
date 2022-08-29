FROM node:16

WORKDIR /usr/src

COPY . .

CMD ["node", "index.js"]

