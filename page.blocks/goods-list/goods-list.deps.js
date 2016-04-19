([
	{
		mustDeps: { block: 'i-bem', elem: 'dom' },
		shouldDeps: [
			{ block: 'events', elems: ['channels'] },
			{ block: 'goods' },
			{ block: 'rub' },
			{ block: 'image' }
		]	
	},
    {
        tech: 'js',
        mustDeps: [
			{ block: 'goods', tech: 'bemhtml' },
			{ block: 'goods-list', tech: 'bemhtml' },
			{ block: 'goods-list', tech: 'bemtree' },
			{ block: 'root', tech: 'bemtree' }
        ]
    }
])