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
					buttonName: 'submit',
					buttonText: 'Применить',
					buttonMods: { size: 'm', view: 'action' },
					buttonIcon: {
						block: 'icon',
						cls: 'material-icons',
						content: '&#xE8FF;'
					},
					content: [
						{
							block : 'checkbox-group',
							mods : { theme : 'islands', size : 'l' },
							name : 'checkbox-line',
							options : [
								{ val : 1, text : 'Блок', disabled : true },
								{ val : 2, text : 'Элемент' },
								{ val : 3, text : 'Модификатор' }
							]
						}
					]
				}
			]
		},
		
    ];
});
