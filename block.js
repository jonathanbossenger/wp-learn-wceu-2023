(function( blocks, element, blockEditor ) {
	var createElement = element.createElement;
	var useBlockProps = blockEditor.useBlockProps;
	var RichText = blockEditor.RichText;

	blocks.registerBlockType( 'wp-learn-wceu/form-block', {
		edit: function( { attributes, setAttributes } ) {
			var blockProps = useBlockProps();

			function onChangeContent( newContent ) {
				setAttributes( { content: newContent } );
			}

			return createElement(
				'div',
				blockProps,
				createElement(
					RichText,
					{
						tagName: 'p',
						onChange: onChangeContent,
						value: attributes.content,
					},
				),
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
					),
				),
			);
		},
		save: function( props ) {
			var blockProps = useBlockProps.save();
			return createElement(
				'div',
				blockProps,
				createElement(
					RichText.Content,
					{
						tagName: 'p',
						value: props.attributes.content,
					},
				),
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
					),
				),
			);
		},
	} );
})( window.wp.blocks, window.wp.element, window.wp.blockEditor );