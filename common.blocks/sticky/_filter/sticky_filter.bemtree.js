 block('sticky').mod('filter', true).content()(function() {
    return [
	    {
	        elem: 'col',
	        content: [
		        {	
					block: 'filter'
				}
	        ]
	    },
	    {
	    	elem: 'col',
	        content: [
	        	{
				    block: 'checkbox',
				    mods: { theme : 'ergo', size : 'm' },
				    name: 'sale',
				    val: 'true',
				    text : 'со скидкой'
				}
	        ]
	    },
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
