FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev libzip-dev libpng-dev libjpeg-dev \
    libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_pgsql pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . /var/www/html

WORKDIR /var/www/html

RUN composer install --no-dev --optimize-autoloader
RUN php artisan migrate --force && php artisan db:seed --force
RUN rm -rf public/storage && php artisan storage:link

RUN a2enmod rewrite

RUN mkdir -p /var/www/html/storage/framework/sessions \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf
