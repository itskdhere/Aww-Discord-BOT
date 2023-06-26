FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g pm2

EXPOSE 7860

CMD ["npm", "run", "prod"]