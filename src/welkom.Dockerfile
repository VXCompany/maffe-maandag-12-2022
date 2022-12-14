FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm i nx -g
RUN npm i

RUN nx build welkom

FROM nginx:alpine
COPY --from=builder /app/dist/apps/welkom /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;'"]
