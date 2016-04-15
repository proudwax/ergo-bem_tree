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
					elemButtomMods: { fixed: 'bottom', shadow: true },
					buttonName: 'submit',
					buttonText: 'Применить',
					buttonMods: { size: 'l', view: 'action' },
					buttonIcon: {
						block: 'icon',
						cls: 'material-icons',
						content: '&#xE164;'
					},
					content: [
			        	{
						    block: 'checkbox',
						    mods: { theme : 'ergo', size : 'm' },
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
