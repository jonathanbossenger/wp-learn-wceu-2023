<?php
/**
 * Plugin Name: WP Learn WCEU 2023
 * Plugin Description: A plugin to learn how to develop blocks using vanilla JavaScript.
 * Plugin URI: https://learn.wordpress.org
 * Version: 1.0.0
 * Author: Jonathan Bossenger
 * Author URI: https://jonathanbossenger.com
 */

/**
 * If WordPress is not loaded, exit early
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$plugin_file = __FILE__;
$plugin_dir = __DIR__;

/**
 * Load the plugin activation/deactivation file
 */
if ( file_exists( $plugin_dir . '/wp-learn-wceu-2023-migration.php' ) ) {
	require_once( $plugin_dir . '/wp-learn-wceu-2023-migration.php' );
} else {
	error_log( 'The WP Learn WCEU 2023 migration file does not exist: ' . $plugin_dir . '/wp-learn-wceu-2023-rest-api.php' );
}

/**
 * Load the REST API routes file
 */
if ( file_exists( $plugin_dir . '/wp-learn-wceu-2023-rest-api.php' ) ) {
	require_once( $plugin_dir . '/wp-learn-wceu-2023-rest-api.php' );
} else {
	error_log( 'The WP Learn WCEU 2023 REST API file does not exist: ' . $plugin_dir . '/wp-learn-wceu-2023-rest-api.php' );
}

