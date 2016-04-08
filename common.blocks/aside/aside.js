modules.define('aside', ['i-bem__dom', 'jquery', 'functions__throttle'], function(provide, BEMDOM, $, throttle) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				this._isAttachedToScope = false;
			}
        },
		
		'display' : {
            true : function() {
				if(!this._isAttachedToScope) {
                    BEMDOM.scope.append(this.domElem);
                    this._isAttachedToScope = true;
                }
			
				this.domElem.css({
					'transform': 'translateX(' + (this._paddingContainer - this.domElem.width() - 16) + 'px)'	// 16px - отступ
				});
			}
        },
		
		'visible': {
			true: function(){
				if(!this._isAttachedToScope) {
                    BEMDOM.scope.append(this.domElem);
                    this._isAttachedToScope = true;
                }
				
				this.setMod('shadow');
			
				this.domElem.css({
					'transform': 'translateX(0px)'	// 16px - отступ
				});
			},
			
			'': function(){
				this.domElem.css({
					'transform': 'translateX(-' + (this.domElem.width() + 16) + 'px)'
				});
			}
		}
    }
}));

});
