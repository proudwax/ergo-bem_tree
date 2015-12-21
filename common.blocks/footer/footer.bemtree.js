block('footer').content()(function() {
    return [
    	{
            block: 'contact',
            content: [
				{
					elem: 'phone',
					mix: { block: 'character', mods: { 'plus': true } },
					content: '7(000)000-00-00'
				},
				{
					elem: 'email',
					content: 'info@info.com'
				}
            ]
        },
        {
            block: 'copyright',
            mods: { 'right': true },
			content: '© 2011-2015 yazvyazda.ru'
        }
    ];
});
