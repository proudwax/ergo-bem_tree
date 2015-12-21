block('header').content()(function() {
    return [
    	{
    		elem: 'row',
    		content: [
		        {
		            elem: 'logo',
		            mix: { block: 'logo' }
		        },
		        {
		        	block: 'contact',
		        	mix: { block: 'header', elem: 'contact' },
		        	content: [
						{
							elem: 'phone',
							mix: { block: 'character', mods: { 'plus': true } },
							content: '7(000)000-00-00'
						},
						{
							elem: 'email',
							content: 'info@info.com'
						}
		            ]
		        },
		        {
		        	block: 'cart-info',
		        	mix: { block: 'header', elem: 'cart' },
		        	count: 2,
		        	sum: 20000
		        }
    		]
    	},
    	{
    		elem: 'row',
    		content: [
		        {
		        	block: 'menu',
		        	mix: { block: 'header', elem: 'navigation' },
		        	mods : { theme : 'ergo', 'top': true, type: 'horizontal' },
		        	content: [
		        		{
		        			block: 'menu-item',
		        			mods : { type : 'link' },
							content : {
								block : 'link',
								url : '#1',
								content : 'Котнакты'
							}
		        		},
		        		{
		        			block: 'menu-item',
		        			mods : { type : 'link' },
							content : {
								block : 'link',
								url : '#2',
								content : 'Полезное'
							}
		        		}
		        	]
		        }
    		]
    	}
    ];
});
