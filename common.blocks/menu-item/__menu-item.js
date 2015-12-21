modules.define('menu-item', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {
	
provide(BEMDOM.decl(this.name, {
	onSetMod: {
		'js': {
            'inited': function() {
				console.log(this);
            }
        }
	}
}));

});