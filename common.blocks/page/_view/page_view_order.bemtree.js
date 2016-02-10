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
                {
                    block: 'content'
                }
			]
		},
        {
			block: 'section-row',
			content: [
				{
					block: 'section',
					mods: { col: 8 },
					content: [
						{
							block: 'order-contacts'
						}
					]
				},
				{
					block: 'section',
					mods: { col: 4 },
					content: [
						{
							block: 'order-cart'
						}
					]
				}	
			]
		},
        {
            block: 'footer'
        }
    ];
});
