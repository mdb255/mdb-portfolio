FROM kyma/docker-nginx

RUN apt-get update
RUN apt-get install -y npm

COPY package.json /var/www/
RUN cd /var/www && npm install

COPY public/ /var/www
CMD 'nginx'