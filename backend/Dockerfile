FROM node:17-alpine
WORKDIR /app/server/
COPY package*.json /app/server/
RUN npm install -g nodemon
RUN npm install
COPY . /app/server/
EXPOSE 5000
CMD [ "npm" ,"run","dev"]