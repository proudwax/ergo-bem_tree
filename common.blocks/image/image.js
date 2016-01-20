modules.define('image', ['i-bem__dom', 'jquery', 'BEMHTML', 'functions__throttle'], function(provide, BEMDOM, $, BEMHTML, throttle) {

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
				throttle(this.bindToWin('scroll', function(e){
					this._onLoad();
				}), 300);
			}
		},
		
		'loading': {
			true: function(){
				this._spin = BEMDOM.append(this.domElem.parent(), BEMHTML.apply(
					{
						block : 'spin',
						mods : { theme : 'ergo', size : 'xl', visible : true }
					}
				));
			
				this
					.setMod('loaded')
					.domElem.attr('src', this.params.src);
			}
		},
		
		'loaded': {
			true: function(){
				this
					.bindTo('load', function() { 
						this
							.delMod('loading')
							.delMod('loaded')						
							._spin.remove();
					})
					
			}
		}
	},

	_onLoad: function(){
		if(BEMDOM.win.scrollTop() >= this._offsetShow){
			this
				.unbindFromWin('scroll')
				.delMod('lazy')
				.setMod('loading');
		}		
	},
	
	getDefaultParams: function() {

	}
}
));

});
