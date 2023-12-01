FROM node:20-slim AS build

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN apk update && apk add vim certbot 

RUN rm /etc/nginx/conf.d/*

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /frontend/dist .

COPY --from=build /frontend/nginx/mern.conf /etc/nginx/conf.d/

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
