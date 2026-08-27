#!/usr/bin/env bash
set -euo pipefail

marker="/var/www/moodledata/.workshop-installed"
languagepack="/var/www/moodledata/lang/it"

if [[ ! -d "${languagepack}" ]]; then
    mkdir -p /var/www/moodledata/lang

    curl --fail --location --silent --show-error \
        "https://download.moodle.org/download.php/direct/langpack/5.2/it.zip" \
        --output /tmp/it.zip

    unzip -q /tmp/it.zip -d /var/www/moodledata/lang
    rm /tmp/it.zip
fi

if [[ ! -f "${marker}" ]]; then
    php /var/www/html/admin/cli/install_database.php \
        --agree-license \
        --adminuser=admin \
        --adminpass='MoodleMoot!2026' \
        --adminemail='admin@example.invalid' \
        --fullname='MoodleMoot Italia workshop' \
        --shortname='Workshop'
    touch "${marker}"
fi

php /var/www/html/admin/cli/upgrade.php --non-interactive
php /var/www/html/admin/cli/purge_caches.php
