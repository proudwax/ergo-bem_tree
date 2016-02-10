modules.define('order-cart', ['i-bem__dom', 'BEMHTML'], function(provide, BEMDOM, BEMHTML) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.elem('total').html(this._getText());
            }
        }
    },
	
	_getEnding: function(count){
		ending = ['ов', '', 'а', 'а', 'а', 'ов', 'ов', 'ов', 'ов', 'ов'];
		
		if(count >= 11 && count <= 14){
			return 'ов';
		}else{
			return ending[count % 10];
		}
	},
	
	_getText: function(){
		rub = [{
			block: 'rub',
			mods: { size: 'small' }
		}];
	
		return 'Итого: ' + this.params.count + ' товар' + this._getEnding(this.params.count) + ' на сумму <strong>' + this.params.total + BEMHTML.apply(rub) + '</strong>';
	}
}));

});
