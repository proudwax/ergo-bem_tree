modules.define('aside', ['i-bem__dom', 'jquery', 'functions__throttle'], function(provide, BEMDOM, $, throttle) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
		'hovered': {
            'true': function(){
                this.bindTo('pointerleave pointerup', this._onMouseLeave);
            },

            '': function(){
                this.unbindFrom('pointerleave pointerup', this._onMouseLeave);
            }
        },
		
		'js' : {
            'inited' : function() {
				this._isAttachedToScope = false;
				
				this.bindTo('pointerover pointerdown', this._onMouseOver);
			}
        },
		
		'display' : {
            true : function() {
				if(!this._isAttachedToScope) {
                    BEMDOM.scope.append(this.domElem);
                    this._isAttachedToScope = true;
                }
			
				// this.params._paddingContainer - смотри в блоке sidebar
				this.domElem.css({
					'transform': 'translateX(' + (this.params._paddingContainer - this.domElem.width() - 16) + 'px)'	// 16px - отступ
				});
			},

			'': function(){
				// this.params._visibled - смотри в блоке sidebar
				// true / false

				this.setMod('animation', this.params._visibled);
				this.setMod('visible', this.params._visibled);
			}
        },
		
		'visible': {
			true: function(){
				if(!this._isAttachedToScope) {
                    BEMDOM.scope.append(this.domElem);
                    this._isAttachedToScope = true;
                }

                this._visibled = true;
				
				this
					.setMod('shadow')
					.domElem.css({
					'transform': 'translateX(0px)'	// 16px - отступ
				});
			},
			
			'': function(){
				this
					.delMod('shadow')
					.domElem.css({
					'transform': 'translateX(-' + (this.domElem.width() + 16) + 'px)'
				});
			}
		}
    },

    _onMouseOver: function(){
        this.setMod('hovered');
		
    },

    _onMouseLeave: function(){
        this.delMod('hovered');
    },	
	
    getDefaultParams: function(){
    	return {
    		_visibled: false
    	}
    }
}));

});
