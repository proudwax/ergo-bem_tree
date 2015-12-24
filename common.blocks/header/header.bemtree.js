block('header').content()(function() {
    return [
    	{
    		elem: 'row',
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
		        	elem: 'col', mods: { 'text': 'right' },
		        	content: [
						{
							block: 'cart-info',
							count: 2,
							sum: 20000
						}
					]
		        }
    		]
    	}
    ];
});
