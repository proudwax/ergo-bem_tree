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
		        	block: 'cart-info',
		        	mix: { block: 'header', elem: 'col', mods: { 'text': 'right' } },
		        	count: 2,
		        	sum: 20000
		        }
    		]
    	}
    ];
});
