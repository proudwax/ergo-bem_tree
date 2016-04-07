modules.define('aside', ['i-bem__dom', 'jquery', 'functions__throttle'], function(provide, BEMDOM, $, throttle) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				this._isAttachedToScope = false,
				this._flagPadding = false;
				
				this._updateVisible();
				
				this.bindToWin('resize', throttle(this._updateVisible, 300));
			}
        },
		
		'visible': {
			true: function(){
				if(!this._isAttachedToScope) {
                    BEMDOM.scope.append(this.domElem);
                    this._isAttachedToScope = true;
                }
			
				if(!this._flagPadding){
					this.domElem.css({
						'transform': 'translateX(0px)'	// 16px - отступ
					});
				}else{
					this.domElem.css({
						'transform': 'translateX(' + (this._paddingContainer - this.domElem.width() - 16) + 'px)'	// 16px - отступ
					});
				}
			},
			
			'': function(){
				this.domElem.css({
					'transform': 'translateX(-' + (this.domElem.width() + 16) + 'px)'
				});
			}
		}
    },

	_updateVisible: function(){
		this._pageContainer = this.findBlockOutside('page').elem('container');
		
		// paddingContainer - ширина отступа от края window до контента 
		// >= sidebar - показывать sidebar
		// < sidebar - открывать по модификатору show
		this._paddingContainer = (BEMDOM.win.width() - this._pageContainer.width()) / 2;

		/* console.log(showFlag); */

		if(this._paddingContainer >= this.domElem.width()){
			this._flagPadding = true;
			
			this
				.delMod('animation')
				.setMod('visible');
		}else{
			this._flagPadding = false;
			
			this
				.setMod('animation')
				.delMod('visible');
		}	
	}
}));

});
