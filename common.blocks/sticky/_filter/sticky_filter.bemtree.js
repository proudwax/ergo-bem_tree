 block('sticky').mod('filter', true).content()(function() {
    return [
		{
	        elem: 'col',
	        content: [
		        {
					block: 'sidebar',
					mods: { theme: 'ergo', size: 'm' },
					textButton: 'Фильтр'
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
