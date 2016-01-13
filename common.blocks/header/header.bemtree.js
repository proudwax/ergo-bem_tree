block('header').content()(function() {
    return [
    	{
    		elem: 'inner',
    		content: [
		        {
		            elem: 'col',
		            mix: { block: 'logo' }
		        },
		        {
		        	block: 'contact',
		        	mix: { block: 'header', elem: 'col' },
		        },
		        {
		        	elem: 'col',
		        	content: [
						{
							block: 'cart-info'
						}
					]
		        }
    		]
    	}
    ];
});
