modules.define('cart-item', ['i-bem__dom', 'jquery', 'amount'], function(provide, BEMDOM, $, Amount) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this;
				
				this._trash = this.findBlockInside('button-trash');
				this._trash.bindTo('click', _this._goTrash);
				
				
				this.params.count = Number(this.findBlockInside('amount').getVal());
				
				Amount.on(this.domElem, 'change', function(e){
					_this.params.count = Number(this.getVal());
					
					_this.emit('change');
				});

            }
        }
    },
	
	_goTrash: function(){
		this.domElem.prevObject.context.remove();
	}
}));

});
