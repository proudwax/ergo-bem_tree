({
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps: [
		// Обязательные, что использует сам блок
		{ elems: ['button', 'aside'] },
		
		// Дополнительные, что в контенте .bemtree
        { block: 'checkbox-group', mods: { theme: 'islands', size : 'l' } },
        { block: 'radio-group', mods: { theme: 'islands', size : 'l' } },
        { block: 'form' }
    ]
})