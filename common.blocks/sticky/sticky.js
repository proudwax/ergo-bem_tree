modules.define('sticky', ['i-bem__dom', 'jquery', 'BEMHTML', 'functions__throttle', 'events__channels'],
function(provide, BEMDOM, $, BEMHTML, throttle, channels) {


provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this;
				
				this.elem('backing').css('height', this.domElem[0].offsetHeight); 	// высота backing элемента 
				sticky_top = this.domElem[0].offsetTop != 0 ? this.domElem[0].offsetTop : this.elem('backing').offset().top;
				
				this.setMod('fixed', BEMDOM.win.scrollTop() >= sticky_top);	
				this.setMod(this.elem('panel'), 'shadow', BEMDOM.win.scrollTop() >= sticky_top);
				
				this._scrollWin();
				throttle(this._resizeWin(), 300);
				
				channels('onGoodsCard').on('click', function(e){
					_this._resizeBlock();
				});
				
            }
        }
	},
	_scrollWin: function() {
		this.bindToWin('scroll', function(e) {
			this.setMod('fixed', BEMDOM.win.scrollTop() >= sticky_top);
			this.setMod(this.elem('panel'), 'shadow', BEMDOM.win.scrollTop() >= sticky_top);
		});
	},
	_resizeWin: function() {
		this.bindToWin('resize', function(e) {
			sticky_top = this.domElem[0].offsetTop != 0 ? this.domElem[0].offsetTop : this.elem('backing').domElem[0].offsetTop;
			
			this.setMod('fixed', BEMDOM.win.scrollTop() >= sticky_top);
			this.setMod(this.elem('panel'), 'shadow', BEMDOM.win.scrollTop() >= sticky_top);
		});
	},
	_resizeBlock: function(){
		sticky_top = this.domElem[0].offsetTop != 0 ? this.domElem[0].offsetTop : this.elem('backing').domElem[0].offsetTop;
			
		this.setMod('fixed', BEMDOM.win.scrollTop() >= sticky_top);
		this.setMod(this.elem('panel'), 'shadow', BEMDOM.win.scrollTop() >= sticky_top);		
	}
}));

});