({
    shouldDeps: [
		// Обязательные, что использует сам блок
		{ elems: 'button' },
        { block: 'aside'},
		
		// Дополнительные, что в контенте .bemtree
        { block: 'checkbox-group', mods: { theme: 'islands', size : 'l' } },
        { block: 'radio-group', mods: { theme: 'islands', size : 'l' } }
    ]
})