(function( blocks, element ) {

	var createElement = element.createElement;

	blocks.registerBlockType( 'wp-learn-wceu/form-block', {
		edit: function() {
			return createElement(
				'p',
				{},
				'Hello World, I am a block.'
			);
		},
		save: function() {
			return createElement(
				'p',
				{},
				'Hello World, I am a block.'
			);
		},
	} );
})( window.wp.blocks, window.wp.element );