<?php

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype = 'pgsql';
$CFG->dblibrary = 'native';
$CFG->dbhost = getenv('MOODLE_DB_HOST') ?: 'database';
$CFG->dbname = getenv('MOODLE_DB_NAME') ?: 'moodle';
$CFG->dbuser = getenv('MOODLE_DB_USER') ?: 'moodle';
$CFG->dbpass = getenv('MOODLE_DB_PASSWORD') ?: 'moodle';
$CFG->prefix = 'mdl_';
$CFG->dboptions = [
    'dbpersist' => false,
    'dbport' => '',
    'dbsocket' => '',
];

$CFG->wwwroot = getenv('MOODLE_WWWROOT') ?: 'http://localhost:8080';
$CFG->dataroot = '/var/www/moodledata';
$CFG->admin = 'admin';
$CFG->directorypermissions = 02777;
$CFG->debug = E_ALL;
$CFG->debugdisplay = 1;
$CFG->cachejs = false;
$CFG->themedesignermode = false;

require_once(__DIR__ . '/lib/setup.php');
