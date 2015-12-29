/* global modules:false */

modules.define('slider', ['i-bem__dom', 'events__channels', 'plagin__swiper', 'page'], function(provide, BEMDOM, channels, Swiper, Page) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {				
				var slider = new Swiper(this.findBlockInside({block: 'plugin', elem: 'swiper'}).elem('swiper'), {
						nextButton: this.elem('button', 'next', true),
						prevButton: this.elem('button', 'prev', true),
						pagination: this.elem('pagination'),
						paginationClickable: true,
						spaceBetween: 0,
						loop: true
					}), 
					_this = this;
				
				/* console.log(); */
				
				channels('onGoodsCard').on('click', function(){
					slider.onResize();
				});
            }
        }
	}
}));

});


