FROM node:16.6.1

# Will create directory /app
WORKDIR /app

COPY package*.json ./

COPY ./ ./

RUN npm install --silent

RUN npm run build

RUN npm i -g serve

EXPOSE 3000

CMD ["serve", "build" ,"-s"]