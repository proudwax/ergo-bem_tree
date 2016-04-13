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
					action: '#',
					method: 'get',
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
				},
				{
					block : 'radio-group',
					mods : { theme : 'islands', size : 'l' },
					name : 'radio-line',
					val : 2,
					options : [
						{ val : 1, text : 'Футбол', disabled : true },
						{ val : 2, text : 'Баскетбол' },
						{ val : 3, text : 'Гандбол' }
					]
				},
				{
					block : 'radio-group',
					mods : { theme : 'islands', size : 'l' },
					name : 'radio-line',
					val : 2,
					options : [
						{ val : 1, text : 'Футбол', disabled : true },
						{ val : 2, text : 'Баскетбол' },
						{ val : 3, text : 'Гандбол' }
					]
				},
				{
					block : 'radio-group',
					mods : { theme : 'islands', size : 'l' },
					name : 'radio-line',
					val : 2,
					options : [
						{ val : 1, text : 'Футбол', disabled : true },
						{ val : 2, text : 'Баскетбол' },
						{ val : 3, text : 'Гандбол' }
					]
				},
				{
					block : 'radio-group',
					mods : { theme : 'islands', size : 'l' },
					name : 'radio-line',
					val : 2,
					options : [
						{ val : 1, text : 'Футбол', disabled : true },
						{ val : 2, text : 'Баскетбол' },
						{ val : 3, text : 'Гандбол' }
					]
				}
			]
		},
		
    ];
});
