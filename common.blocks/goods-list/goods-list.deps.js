([
	{
		mustDeps: { block: 'i-bem', elem: 'dom' },
		shouldDeps: [
			{ block: 'events', elems: ['channels'] },
			{ block: 'goods' },
			{ block: 'image' }
		]	
	},
    {
        tech: 'js',
        mustDeps: [
			{ block: 'goods-list', tech: 'bemtree' }
        ]
    }
])