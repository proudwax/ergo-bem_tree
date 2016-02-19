block('header').content()(function() {
	var data = this.data; 			// Пришла из data.json 

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
							block: 'cart-info',
							js: { /*total: data.total, count: data.count*/ }
						}
					]
		        }
    		]
    	}
    ];
});
