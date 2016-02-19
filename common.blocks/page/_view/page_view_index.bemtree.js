block('page').mod('view', 'index').content()(function() {
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
				{
					block: 'slider'
				},
                {
                    block: 'content',
					mods: { view: 'main' }
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
