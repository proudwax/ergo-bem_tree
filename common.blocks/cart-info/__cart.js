modules.define('cart', ['i-bem__dom', 'jquery', 'amount', 'events__channels'], function(provide, BEMDOM, $, Amount, channels) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var items = this.elem('item'),
					_this = this;
				
				this._total = this.elem('total');
	
				channels('amount').on('change', function(){
					_this._count = 0;
					_this._totalCost = 0;
					
					_this.elem('item').each(function(){
						var item = $(this);
						
						count = Number(_this.findBlockInside(item,'amount').getVal());
						console.log(_this.elem('item'));

						_this._count += count;
						/* _this._totalCost = count * _this.elem(item).params.price; */
					});
					console.log(_this._count);
					console.log(_this._totalCost);
				});
				
            }
        }
    },
	
	_getTotal: function(item){
		/* this._count = $(item).bem('cart').findBlockInside('amount').getVal(); */
		this._count = $(item);
		
		/* console.log(item); */
		console.log(this._count);
		/* console.log($(item).bem('cart').findBlockInside()); */
	}
}));

});