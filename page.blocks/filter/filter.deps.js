({
    mustDeps: { block: 'i-bem', elem: 'dom' },
    shouldDeps: [
		{ block: 'events', elems: ['channels'] },
		{ block: 'radio-group', mods: { theme : 'ergo', type : 'button' } },
		{ block: 'select', mods: { mode : 'radio', theme : 'ergo', 'small': true, 'tail': true } }
	]
})
