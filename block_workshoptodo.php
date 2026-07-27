<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

defined('MOODLE_INTERNAL') || die();

/**
 * A small todo block used in a frontend-development workshop.
 *
 * @package    block_workshoptodo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class block_workshoptodo extends block_base {
    /**
     * Set the block title.
     *
     * @return void
     */
    public function init(): void {
        $this->title = get_string('pluginname', 'block_workshoptodo');
    }

    /**
     * Provide a container for the JavaScript application.
     *
     * @return stdClass
     */
    public function get_content(): stdClass {
        if ($this->content !== null) {
            return $this->content;
        }

        $renderer = $this->page->get_renderer('block_workshoptodo');
        $page = new \block_workshoptodo\output\todo();
        $this->content = new stdClass();
        $this->content->text = $renderer->render($page);
        $this->content->footer = '';

        return $this->content;
    }
}
