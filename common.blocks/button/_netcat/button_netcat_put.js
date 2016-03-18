// modules.define('button', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, Button, BEMDOM, $, BEMHTML) {
modules.define('button', ['jquery'], function(provide, $, Button) {

provide(Button.decl({ modName: 'netcat', modVal: 'put' }, {
	onSetMod : {
		'js': {
			'inited' : function() {
				var _this = this;

	            this.bindTo('click', function(e){
	                e.preventDefault();
	                
	                //_this._send();

	                $.ajax({
	                    url: this._url,
	                    success: function(response){
	                        if(response.status == 'ok'){
	                            // _this._sendOk();
	                        	console.log(response);
	                        }else{
	                            // _this._sendNot();
	                        	console.log(response);
	                        }
	                    },
	                    error: function(response){
	                        // _this._sendNot();
	                        console.log(response);
	                    },
	                    type: 'GET',
	                    dataType: 'json'
	                });
	            });
			}
		},

		'send': {

		}
	},
	
	/*_send: function(button){
        button.delMod('type')
            .delMod('view')
            .setMod('disabled', true);
        button.domElem.attr({
                'disabled': 'disabled',
                'type': 'button',
                'role': 'button'
            });
        button.domElem.removeAttr('href');

        button.elem('text').text('Обработка');
        BEMDOM.replace(button.findBlockInside('icon').domElem, BEMHTML.apply(
                {
                    block: 'button',
                    elem: 'spin',
                    content: [
                        {
                            block : 'spin',
                            mods : { theme : 'ergo', size : 'xs', visible : true }
                        }
                    ]
                }
            ));         
    },
    
    _sendOk: function(button){
        button.elem('text').text('В корзине');
        BEMDOM.replace(button.elem('spin'), BEMHTML.apply(
                {
                    block: 'icon',
                    cls: 'material-icons',
                    content: '&#xE876;'
                }
            ));
    },
    
    _sendNot: function(button){
        button.elem('text').text('Ошибка');
        BEMDOM.replace(button.elem('spin'), BEMHTML.apply(
                {
                    block: 'icon',
                    cls: 'material-icons',
                    content: '&#xE001;'
                }
            ));
    },*/
	
	getDefaultParams : function(){
        return {
            lifeTime : 15000
        };
    }
	
}));
});