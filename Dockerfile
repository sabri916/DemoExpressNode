# specify the node base image with your desired version node:<version>
FROM node:12.18.0-alpine3.9
COPY . .
RUN npm install
CMD npm start
# replace this with your application's default port
EXPOSE 3000
