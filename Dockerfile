FROM node:22-bookworm AS node
FROM composer:2 AS composer
FROM moodlehq/moodle-php-apache:8.4

ARG MOODLE_REF=6216fe4ed19a5a3c88c0951d1647e9f2d626bcbb

USER root
COPY --from=node /usr/local/ /usr/local/
COPY --from=composer /usr/bin/composer /usr/local/bin/composer

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl git postgresql-client unzip\
    && rm -rf /var/lib/apt/lists/* \
    && git config --global --add safe.directory /var/www/html \
    && git init /var/www/html \
    && cd /var/www/html \
    && git remote add origin https://github.com/moodle/moodle.git \
    && git fetch --depth 1 origin "${MOODLE_REF}" \
    && git checkout --detach FETCH_HEAD \
    && git remote remove origin \
    && composer install --no-interaction --prefer-dist \
    && npm ci \
    && rm -rf /root/.cache /root/.composer/cache /root/.npm

COPY docker/config.php /var/www/html/config.php
COPY docker/workshop-install.sh /docker-entrypoint.d/40-workshop-install.sh

RUN chmod +x /docker-entrypoint.d/40-workshop-install.sh \
    && mkdir -p /var/www/moodledata \
    && chmod 0777 /var/www/moodledata
