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
<<<<<<< HEAD
				}/*,
=======
				},
>>>>>>> 7456ef649ebbf0057855939bfbd6e0b99019dea7
				{	
					block: 'filter'
				}*/
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
