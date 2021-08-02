FROM node:lts-alpine as dev

RUN npm install -g http-server

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "npm", "serve" ]

FROM nginx:latest as prod
COPY --from=dev /app/dist/ /usr/share/nginx/html/