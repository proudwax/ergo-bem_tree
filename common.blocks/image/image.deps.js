([
    {
        mustDeps: [
			{ block: 'i-bem', elem: 'dom' }
		],
		shouldDeps: [
			{ block: 'spin', mods : {theme : 'ergo' } }
		]
    },
    {
        tech: 'js',
        mustDeps: [
			{ block: 'spin', tech: 'bemhtml' }
        ]
    }
])