modules.define('sort', ['i-bem__dom', 'events__channels', 'jquery', 'uri', 'select'], function(provide, BEMDOM, channels, $, Uri, Select) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this,
					u = Uri.parse(window.location.href);
					
					this._select = this.findBlockInside('select');

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

                    channels('changeUrl').emit('change', u);
                });
            }
        }
	}
}
));

});
