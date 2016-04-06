modules.define('sidebar', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this;
					/* screenWidth = win.; */
				
				console.log(win);
				
				/* this.domElem.css() */
			}
        }
    }	

}));

});
