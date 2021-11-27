FROM node:16.6.1

# Will create directory /app
WORKDIR /app

COPY package*.json ./

COPY ./ ./

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]

