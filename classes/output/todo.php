<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Full trade renderable.
 *
 * @package    block_workshoptodo
 * @copyright  2016 Frédéric Massart - FMCorz.net
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace block_workshoptodo\output;
defined('MOODLE_INTERNAL') || die();

use renderable;
use renderer_base;
use templatable;
use html_writer;

use block_workshoptodo\trade;

/**
 * Full trade renderable class.
 *
 * This can be used to render a full trade for such things as the trade form
 *
 * @package    block_workshoptodo
 * @copyright  2016 Frédéric Massart - FMCorz.net
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class todo implements renderable, templatable {


    private function todo_data() {
        return [
            (object) ['id' => 1, 'text' => 'Read the workshop introduction', 'completed' => false],
            (object) ['id' => 2, 'text' => 'Try the AMD todo block', 'completed' => false],
            (object) ['id' => 3, 'text' => 'Discuss the next frontend migration', 'completed' => false],
        ];
    }

    /**
     * Export for template.
     *
     * @param renderer_base $output Renderer.
     * @return stdClass
     */
    public function export_for_template(renderer_base $output) {

        return (object) [
            'rootid' => html_writer::random_id('workshoptodo-'),
            'todos' => $this->todo_data()
        ];
    }

}
