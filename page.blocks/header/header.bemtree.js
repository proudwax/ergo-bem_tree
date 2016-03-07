block('header').content()(function() {
	var data = this.data; 			// Пришла из data.json 

    return [
    	{
    		elem: 'logo',
    		content: [
                {
                    elem: 'wrapped',
                    content: [
            			{
            				block: 'logo',
                            href: '/'
            			}
                    ]
                }
    		]
    	},
    	{
    		elem: 'contact',
    		content: [
                {
                    elem: 'wrapped',
                    content: [
            			{
            				block: 'contact',
            			}
                    ]
                }
    		]
    	},
    	{
    		elem: 'cart-info',
    		content: [
                {
                    elem: 'wrapped',
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
