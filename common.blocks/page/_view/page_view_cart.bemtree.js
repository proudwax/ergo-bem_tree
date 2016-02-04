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
				}
			]
		},
		{
            block: 'section',
			content: [
				{
                    block: 'cart'
                }			
			]
		},
        {
            block: 'footer'
        }
    ];
});
