modules.define('cart', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.on(this.findBlockInside('amount').domElem, 'change', function(){
                	console.log(this);
                });
            }
        }
    }
}));

});
