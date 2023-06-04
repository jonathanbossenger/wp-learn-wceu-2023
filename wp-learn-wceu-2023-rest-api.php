<?php
/**
 * REST API routes for the Form Submissions API
 */

/**
 * Register the REST API wp-learn-form-submissions-api/v1/form-submission routes
 */
add_action( 'rest_api_init', 'wp_learn_wceu_register_routes' );
function wp_learn_wceu_register_routes() {
	/**
	 * GET form-submissions
	 */
	register_rest_route(
		'wp-learn-wceu/v1',
		'/form-submissions/',
		array(
			'methods'  => 'GET',
			'callback' => 'wp_learn_wceu_get_form_submissions',
			'permission_callback' => '__return_true'
		)
	);

	/**
	 * POST a new form-submission
	 * This route is currently public
	 */
	register_rest_route(
		'wp-learn-wceu/v1',
		'/form-submission/',
		array(
			'methods'  => 'POST',
			'callback' => 'wp_learn_wceu_create_form_submission',
			'permission_callback' => '__return_true'
		)
	);
}

/**
 * GET callback for the wp-learn-wceu/v1/form-submissions route
 *
 * @return array|object|stdClass[]|null
 */
function wp_learn_wceu_get_form_submissions() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'form_submissions';

	$results = $wpdb->get_results( "SELECT * FROM $table_name" );

	return $results;
}

/**
 * POST callback for the wp-learn-wceu/v1/form-submission route
 *
 * @param $request
 *
 * @return void
 */
function wp_learn_wceu_create_form_submission( $request ){
	/**
	 * @todo add nonce field check
	 */

	global $wpdb;
	$table_name = $wpdb->prefix . 'form_submissions';

	$name = sanitize_text_field( $request['name'] );
	$email = sanitize_email( $request['email'] );

	$rows = $wpdb->insert(
		$table_name,
		array(
			'name'  => $name,
			'email' => $email,
		)
	);

	return $rows;
}