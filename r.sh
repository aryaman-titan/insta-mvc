#!/bin/sh
composer dump-autoload
cd public
google-chrome http://localhost:8000
php -S localhost:8000
