([
	{
		mustDeps: { block: 'i-bem', elem: 'dom' },
		shouldDeps: [
			{ elems: ['container'] },
			{ block: 'spin', mods: { theme: 'ergo' } },
			{ block: 'events', elems: ['channels'] },
			{ block: 'goods' },
			{ block: 'rub' },
			{ block: 'image' }
		]	
	},
    {
        tech: 'js',
        mustDeps: [
			{ block: 'spin', tech: 'bemhtml' },
			{ block: 'goods', tech: 'bemhtml' },
			{ block: 'goods-list', tech: 'bemhtml' },
			{ block: 'goods-list', elems: ['container'], tech: 'bemtree' },
			{ block: 'root', tech: 'bemtree' }
        ]
    }
])