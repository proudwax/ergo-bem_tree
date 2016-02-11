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
			block : 'row',
			content : [
				{
					elem : 'col',
					cls: 'row__col_6',
					mods : { m: 6 },
					content: [
						{
							block: 'section',
							content: [
								{
									block: 'order-contacts'
								}
							]
						}
					]
				},
				{
					elem: 'col',
					cls: 'row__col_6',
					mods: { m: 6 },
					content: [
						{
							block: 'section',
							content: [
								{
									block: 'order-cart'
								}
							]
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
