modules.define('sort', ['i-bem__dom', 'events__channels', 'jquery', 'history', 'uri', 'select'], function(provide, BEMDOM, channels, $, History, Uri, Select) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this,
					u = Uri.parse(window.location.href),
					history = new History();
					
					this._select = this.findBlockInside('select');

				/* console.log(history); */
				
				if(u.queryParams.sort){
					this._select.setVal(u.queryParams.sort);
				}
				
				
                Select.on(this.domElem, 'change', function(e){
					if(u.queryParams.sort){
						if(e.target.getVal()){
							u.replaceParam('sort', e.target.getVal());
						}else{
							u.deleteParam('sort');
						}
					}else{
						u.addParam('sort', e.target.getVal());
					}
										
					/* console.log(u.toString()); */
					/* $.get(u.toString()); */
					
					 history.changeState('replace', { title: 'Title', url: u.toString() });
					
					/* console.log(_this._select.domElem); */
					
						/* _this.domElem.submit(); */
				
                    channels('changeUrl').emit('change', u.toString());
                });
            }
        }
	}
}
));

});
