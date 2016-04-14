({
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps: [
		// Обязательные, что использует сам блок
		{ elems: ['button', 'aside'] },
		
		// Дополнительные, что в контенте .bemtree
        { block: 'form' },
        { block: 'checkbox', mods: { theme: 'ergo' } }
    ]
})