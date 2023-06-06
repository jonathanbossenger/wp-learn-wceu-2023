(function( blocks, element, blockEditor, components ) {
	var createElement = element.createElement;
	var useBlockProps = blockEditor.useBlockProps;
	var RichText = blockEditor.RichText;

	var BlockControls = blockEditor.BlockControls;
	var AlignmentControl = blockEditor.AlignmentControl;

	var InspectorControls = blockEditor.InspectorControls;

	var RangeControl = components.RangeControl;

	blocks.registerBlockType( 'wp-learn-wceu/form-block', {
		edit: function( { attributes, setAttributes } ) {
			var blockProps = useBlockProps();

			function onChangeContent( newContent ) {
				setAttributes( { content: newContent } );
			}

			function onChangeAlignment( newAlignment ) {
				setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
			}

			return createElement(
				'div',
				blockProps,
				createElement( BlockControls,
					{
						key: 'controls'
					},
					createElement( AlignmentControl,
						{
							value: attributes.alignment,
							onChange: onChangeAlignment,
						}
					)
				),
				createElement(
					RichText,
					{
						tagName: 'p',
						style: {
							textAlign: attributes.alignment
						},
						onChange: onChangeContent,
						value: attributes.content,
					},
				),
				createElement(
					'form',
					{
						style: {
							textAlign: attributes.alignment
						}
					},
					createElement( BlockControls,
						{
							key: 'controls'
						},
						createElement( RangeControl,
							{
								label: 'Padding',
							}
						)
					),
					createElement(
						'div',
						{
							className: 'form-group',
							style: { padding: '10px' }
						},
						createElement(
							'label',
							{
								for: 'name',
								style: { display: 'inline-block', width: '75px' }
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
							style: { padding: '10px' }
						},
						createElement(
							'label',
							{
								for: 'email',
								style: { display: 'inline-block', width: '75px' }
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
						{
							style: { padding: '10px' }
						},
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
						style: { textAlign: props.attributes.alignment },
						value: props.attributes.content,
					},
				),
				createElement(
					'form',
					{
						style: { textAlign: props.attributes.alignment }
					},
					createElement(
						'div',
						{
							className: 'form-group',
							style: { padding: '10px' }
						},
						createElement(
							'label',
							{
								for: 'name',
								style: { display: 'inline-block', width: '75px' }
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
							style: { padding: '10px' }
						},
						createElement(
							'label',
							{
								for: 'email',
								style: { display: 'inline-block', width: '75px' }
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
						{
							style: { padding: '10px' }
						},
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
})( window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components );