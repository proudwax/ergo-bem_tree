modules.define('cart', ['i-bem__dom', 'BEMHTML', 'events__channels'], function(provide, BEMDOM, BEMHTML, channels) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this;
			
				this._items = this.findBlocksInside('cart-item');
				
                this.elem('total').html(this._getText());
				
				channels('amount').on('change', function(){
					/* console.log(_this); */
				});
            }
        }
    },
	
	_getTotal: function(){
		this._total = this._items.reduce(function(total, cur){
			total.count = total.count + cur.params.count;		
			total.sum = total.sum + cur.params.count * cur.params.price;

			return {'count': total.count, 'sum': total.sum}
		}, {'count': 0, 'sum': 0});
	},
	
	_getEnding: function(count){
		ending = ['ов', '', 'а', 'а', 'а', 'ов', 'ов', 'ов', 'ов', 'ов'];
		
		return ending[count % 10];
	},
	
	_getText: function(){
		this._getTotal();
	
		rub = [{
			block: 'rub',
			mods: { size: 'small' }
		}];
	
		return 'Итого: ' + this._total.count + ' товар' + this._getEnding(this._total.count) + ' на сумму <strong>' + this._total.sum + BEMHTML.apply(rub) + '</strong>';
	}
}));

});
