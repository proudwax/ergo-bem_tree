modules.define('sidebar', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this,
					showFlag = 0;

				this._pageContainer = this.findBlockOutside('page').elem('container');
				
				// Ширина окна - (ширина контента + (ширина sidebar + отступ) * 2) 
				// >= 0 - показывать sidebar
				// < 0 - открывать по модификатору show
				showFlag = (BEMDOM.win.width() - this._pageContainer.width()) / 2;

				console.log(showFlag);
				
					// this.domElem.css({'transform': 'translateX(-200)'});

				if(showFlag >= this.domElem.width()){
					this.domElem.css({
						'transform': 'translateX(-' + (this.domElem.width() + 16) + 'px)'
					});
				}else{
					this.domElem.css({
						'transform': 'translateX(-' + (this.domElem.width() + 16 + Math.abs(showFlag) ) + 'px)'
					});
				}
			}
        }
    },

    _resize: function(){

    }	

}));

});
