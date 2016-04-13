 block('sticky').mod('filter', true).content()(function() {
    return [
		{
	        elem: 'col',
	        content: [
		        {
					block: 'sidebar',
					mods: { theme: 'ergo', size: 'm' },
					buttonText: 'Фильтр',
					buttonIcon: {
						block: 'icon',
						cls: 'material-icons',
						content: '&#xE896;'
					}
				},
				{	
					block: 'filter'
				},
	        	{
				    block: 'checkbox',
				    mods: { theme : 'ergo', size : 'm' },
				    name: 'sale',
				    val: 'true',
				    text : 'со скидкой'
				}
	        ]
	    },
	    /*{
	    	elem: 'col',
	        content: [
	        ]
	    },*/
	    {
	    	elem: 'col',
	        content: [
	        	{
	        		block: 'sort'
	        	}
	        ]
	    }
    ];
});
