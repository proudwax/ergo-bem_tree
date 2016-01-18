modules.define('lazy', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
            	this._offseTop = this.domElem[0].offsetTop;

            	this.bindToWin('scroll', function(e){
            		if(BEMDOM.win.scrollTop() >= this.params.offseTop){
            			console.log(BEMDOM.win.scrollTop());
            			console.log(this.params.offseTop);
            			// return this._onInit(e);
            		}
            	});
            }
        }
	},

	_onInit: function(e){
		// console.log(e);
	},

	getDefaultParams: function() {

	}
}
));

});
