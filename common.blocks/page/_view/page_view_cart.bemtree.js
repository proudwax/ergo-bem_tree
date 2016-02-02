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
                    block: 'cart'
                }
			]
		},
        {
            block: 'footer'
        }
    ];
});
