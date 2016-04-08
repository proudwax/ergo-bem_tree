modules.define('sidebar', ['i-bem__dom', 'jquery', 'functions__throttle'], function(provide, BEMDOM, $, throttle) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
				var _this = this;
				
				this._button = this.findBlockInside('button'),
				this._aside = this.findBlockInside('aside'),
				this._page = this.findBlockOutside('page'),
				this._pageContainer = this._page.elem('container');
				
                this._button.on('click', function() {
					_this._aside
						.setMod('animation')
						.toggleMod('visible');
						
					_this._aside.params._visibled = _this._aside.hasMod('visible') ? true : false;
                });
				
				this._updateVisible();

				// this._button.setMod('hidden', this._aside.hasMod('display'));
				
				this.bindToWin('resize', throttle(this._updateVisible, 300));
			}
        }
    },
	
	_updateVisible: function(){
		// paddingContainer - ширина отступа от края window до контента 
		// >= sidebar - показывать sidebar
		// < sidebar - открывать по модификатору show
		this._paddingContainer = (BEMDOM.win.width() - this._pageContainer.width()) / 2;
		this._aside.params._paddingContainer = this._paddingContainer;

		/* console.log(this._paddingContainer); */

		if(this._paddingContainer >= this._aside.domElem.width()){
			this._aside
				.delMod('animation')
				.delMod('visible')
				.setMod('display');

			this._button.setMod('hidden');
		}else{
			this._aside
				.delMod('display');

			this._button.delMod('hidden');
		}	
	}	
}));

});
