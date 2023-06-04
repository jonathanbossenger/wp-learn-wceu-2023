<?php
/**
 * Plugin activation/deactivation hooks and associated functionality
 */

/**
 * Set up the required form submissions table on plugin activation
 */
register_activation_hook( $plugin_file, 'wp_learn_wceu_setup_table' );
function wp_learn_wceu_setup_table() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'form_submissions';

	$sql = "CREATE TABLE $table_name (
	  id mediumint(9) NOT NULL AUTO_INCREMENT,
	  name varchar (100) NOT NULL,
	  email varchar (100) NOT NULL,
	  PRIMARY KEY  (id)
	)";

	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );

	$sample_data = array(
		array(
			'name'  => 'Ben',
			'email' => 'ben@gmail.com',
		),
		array(
			'name'  => 'Sarah',
			'email' => 'sarah@gmail.com',
		),
	);

	foreach ($sample_data as $sample_record){
		$wpdb->insert(
			$table_name,
			$sample_record
		);
	}
}

/**
 * Remove the form submissions table on plugin deactivation
 */
register_deactivation_hook( $plugin_file, 'wp_learn_wceu_remove_table' );
function wp_learn_wceu_remove_table() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'form_submissions';

	$wpdb->query( "DROP TABLE IF EXISTS $table_name" );
}
