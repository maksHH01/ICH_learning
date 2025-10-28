FROM node:22-alpine
WORKDIR /app
COPY package*.json /
RUN npm i --omit=dev
COPY . .
EXPOSE 3000
CMD ["npm", "start"]