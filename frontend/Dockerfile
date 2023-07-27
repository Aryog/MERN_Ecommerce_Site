FROM node:17-alpine
WORKDIR /app/client/
COPY package*.json /app/client/
RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . /app/client/
EXPOSE 3000
CMD [ "npm","run","start" ]
