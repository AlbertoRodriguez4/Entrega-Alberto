FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g @nestjs/cli

CMD ["npm", "run", "start"]

EXPOSE 3000
