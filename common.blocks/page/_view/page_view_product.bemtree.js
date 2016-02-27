block('page').mod('view', 'product').content()(function() {
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
			block : 'row',
			content : [
				{
					elem : 'col',
					cls: 'row__col_12 row__col_last_portrait',
					mods : { 12: true },
					content: [
						{
							block: 'section',
							content: [
								{
									block: 'goods-card'
								}
							]
						}
					]
				},
				{
					elem: 'col',
					cls: 'row__col_12',
					mods: { 12: true },
					content: [
						{
							block: 'section',
							content: [
								{
									block: 'goods-list'
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
