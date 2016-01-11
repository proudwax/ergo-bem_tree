block('sticky').mod('navigation', true).content()(function() {
    return [
        {
        	block: 'menu',
        	mix: { block: 'header', elem: 'navigation' },
        	mods : { theme : 'ergo', 'top': true, type: 'horizontal', size: 'm' },
        	content: [
        		{
        			block: 'menu-item',
        			mods : { type : 'link' },
					content : {
						block : 'link',
						url : '#1',
						content : 'Котнакты'
					}
        		},
        		{
        			block: 'menu-item',
        			mods : { type : 'link' },
					content : {
						block : 'link',
						url : '#2',
						content : 'Полезное'
					}
        		}
        	]
        }
    ];
});
