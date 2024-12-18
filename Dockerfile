FROM node:20-alpine

RUN adduser --disabled-password --gecos "" aww

USER aww

WORKDIR /app

COPY --chown=aww:aww package*.json ./

RUN npm ci --only=production

COPY --chown=aww:aww . .

EXPOSE ${PORT}

CMD ["npm", "run", "start"]