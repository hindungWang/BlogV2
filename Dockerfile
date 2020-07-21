FROM node:alpine as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install && npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
