block('sidebar').content()(function() {
    return [
    	{
			elem: 'button'
		},
		{
			elem: 'aside',
			content: [
				{
					block: 'form',
					mods: { theme: 'ergo' },
					action: '#',
					method: 'get',
<<<<<<< HEAD
					elemButtomMods: { fixed: 'bottom' },
					buttonName: 'submit',
					buttonText: 'Применить',
					buttonMods: { size: 'l', view: 'action' },
					buttonIcon: {
						block: 'icon',
						cls: 'material-icons',
						content: '&#xE164;'
=======
					buttonName: 'submit',
					buttonText: 'Применить',
					buttonMods: { size: 'm', view: 'action' },
					buttonIcon: {
						block: 'icon',
						cls: 'material-icons',
						content: '&#xE8FF;'
>>>>>>> 7456ef649ebbf0057855939bfbd6e0b99019dea7
					},
					content: [
			        	{
						    block: 'checkbox',
						    mods: { theme : 'ergo', size : 'l' },
						    name: 'sale',
						    val: 'true',
						    text : 'со скидкой'
						}
					]
				}
			]
		},
		
    ];
});
