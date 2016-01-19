block('page').content()(function() {
    return [
		{
            block: 'section',
            content: [
				{
					block: 'header'
				},
				{
					block: 'sticky',
					mods: { theme: 'ergo', navigation: true }
				},
				/* {
					block: 'slider'
				}, */
                {
                    block: 'content'
                }
			]
		},
        {
            block: 'section',
            content: [
        		{
                    block: 'sticky',
                    mods: { theme: 'ergo', filter: true, 'cart-preview': true }
                }, 
        		{
                    block: 'goods-list'
                }
            ]
        },
        {
            block: 'footer'
        }
    ];
});
