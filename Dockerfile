FROM node:16 AS builder

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install --production

COPY . /app/

RUN npm run build

EXPOSE 80
CMD ["npm", "run", "start",  "--", "-p", "80"]
