FROM nginx:alpine

COPY portfolio/ /usr/share/nginx/html/

COPY app1/ /usr/share/nginx/html/app1/

# COPY app2/ /usr/share/nginx/html/app2/

EXPOSE 80