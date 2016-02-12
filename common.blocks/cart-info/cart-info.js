modules.define('cart-info', ['i-bem__dom', 'BEMHTML', 'get-ending'], function(provide, BEMDOM, BEMHTML, getEnding) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				this.elem('count').html(this._getCount());
				this.elem('total').html(this._getTotal());
            }
        }
    },
	
	_getCount: function(){
		rub = [{
			block: 'rub',
			mods: { size: 'small' }
		}];
	
		return this.params.count + ' товар' + getEnding.ending(this.params.count);
	},
	
	_getTotal: function(){		
		return '<strong>' + this.params.total + BEMHTML.apply(rub) + '</strong>';
	}
}));

});
