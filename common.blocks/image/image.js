modules.define('image', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				this._offsetShow = this.domElem.offset().top - BEMDOM.win.height();
				
				this
					.setMod('lazy', 'follow')
					._onLoad();
            }
        },
		
		'lazy': {
			'follow': function(){
				this.bindToWin('scroll', function(e){
					this._onLoad();
				});
			},
			
		},
		
		'loaded': {
			true: function(){
				this._spin = BEMDOM.append(this.domElem.parent(), BEMHTML.apply(
					{
						block : 'spin',
						mods : { theme : 'ergo', size : 'xl', visible : true }
					}
				));
				
				this.domElem.attr('src', this.params.src);
				
				this
					.bindTo('load', function() { 
						this
							.delMod('loaded')						
							._spin.remove();
					})
					.unbindFromWin('scroll');
			}
		}
	},

	_onLoad: function(){
		if(BEMDOM.win.scrollTop() >= this._offsetShow){
			this
				.delMod('lazy')
				.setMod('loaded');
		}		
	},
	
	getDefaultParams: function() {

	}
}
));

});
