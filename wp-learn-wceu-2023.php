<?php
/**
 * Plugin Name: WP Learn WCEU 2023
 * Plugin Description: A plugin to learn how to develop blocks using vanilla JavaScript.
 * Plugin URI: https://learn.wordpress.org
 * Version: 1.0.1
 * Author: Jonathan Bossenger
 * Author URI: https://jonathanbossenger.com
 */

/**
 * If WordPress is not loaded, exit early
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'wp_learn_wceu_register_block' );
function wp_learn_wceu_register_block() {
	register_block_type( __DIR__ );
}


