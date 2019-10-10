FROM php:7-fpm

# RUN apt-get update
# RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update && apt-get install sqlite3 libsqlite3-dev -y

RUN mkdir -p /etc/php/
RUN mkdir -p /var/www/html/
RUN mkdir -p /var/www/application
RUN mkdir -p /var/www/system
