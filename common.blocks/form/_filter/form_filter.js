modules.define('form', ['i-bem__dom', 'jquery', 'uri'], function(provide, BEMDOM, $, Uri, Form) {

provide(Form.decl({ modName: 'filter', modVal: true }, {
    onSetMod : {
		'js' : {
            'inited' : function() {	
				var _this = this;
				
				this._button = this.findBlockInside({ block: 'button', modName: 'type', modVal: 'submit' });
				
				this._button.bindTo('click', function(e){
					e.preventDefault();
					
					console.log(e);
					
				});
				
			}
        }
    }
}));

});
