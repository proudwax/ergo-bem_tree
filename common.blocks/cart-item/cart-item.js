modules.define('cart-item', ['i-bem__dom', 'jquery', 'BEMHTML', 'events', 'events__channels', 'amount'], function(provide, BEMDOM, $, BEMHTML, events, channels, Amount) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this;
							
				/*this.findBlockInside('amount')._input.bindTo('change', function(){
					console.log(this);
				});*/

				/*this.findBlockInside('amount')._input.domElem.on('change', function(){
					console.log(this);
				});*/

				/*this.findBlockInside('amount').on('input', 'change', function(){
					console.log(this);
				});*/

				Amount.on(this.domElem, 'change click keypress', function(){ console.log(this); }, this);

				// console.log(this.findBlockInside('amount'));

				/*this.on(this.findBlockInside('amount').domElem, 'change', function(){
					console.log(this);
				});*/
				
				/* console.log(this.findBlockInside('amount')); */
			
				/* this.findBlockInside('amount').bindTo('change', function(){
					console.log(this);
				}); */
				
				/* amount.on('changeCount', function(){
					console.log(this);
				}); */
				
				/* console.log(); */
				
				/* changeCount.emit('changeCount', function(){
					console.log(this);
				}); */
				
				/* channels('amount').on('change', function(){
					console.log(_this);
				}); */
            }
        }
    }
}));

});
