(function( blocks, element ) {

	var createElement = element.createElement;

	blocks.registerBlockType( 'wp-learn-wceu/form-block', {
		edit: function() {
			return createElement(
				'div',
				{},
				createElement(
					'form',
					{},
					createElement(
						'div',
						{
							className: 'form-group',
						},
						createElement(
							'label',
							{
								for: 'name',
							},
							'Name',
						),
						createElement(
							'input',
							{
								label: 'Name',
								type: 'text',
								placeholder: 'Enter your name',
							},
						),
					),
					createElement(
						'div',
						{
							className: 'form-group',
						},
						createElement(
							'label',
							{
								for: 'email',
							},
							'Email',
						),
						createElement(
							'input',
							{
								label: 'Email',
								type: 'text',
								placeholder: 'Enter your email',
							},
						),
					),
					createElement(
						'div',
						{},
						createElement(
							'input',
							{
								type: 'button',
								value: 'Submit',
							},
						),
					)
				),
			);
		},
		save: function() {
			return createElement(
				'div',
				{},
				createElement(
					'form',
					{},
					createElement(
						'div',
						{
							className: 'form-group',
						},
						createElement(
							'label',
							{
								for: 'name',
							},
							'Name',
						),
						createElement(
							'input',
							{
								label: 'Name',
								type: 'text',
								placeholder: 'Enter your name',
							},
						),
					),
					createElement(
						'div',
						{
							className: 'form-group',
						},
						createElement(
							'label',
							{
								for: 'email',
							},
							'Email',
						),
						createElement(
							'input',
							{
								label: 'Email',
								type: 'text',
								placeholder: 'Enter your email',
							},
						),
					),
					createElement(
						'div',
						{},
						createElement(
							'input',
							{
								type: 'button',
								value: 'Submit',
							},
						),
					)
				),
			);
		},
	} );
})( window.wp.blocks, window.wp.element );