modules.define('goods-list', ['i-bem__dom', 'jquery', 'events__channels', 'functions__throttle'], function(provide, BEMDOM, $, channels, throttle) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
            	var _this = this;

				this._redraw();

				// следует использовать https://ru.bem.info/libs/bem-core/v2.8.0/desktop/functions/#elems-throttle чтобы не дергать коллбек слишком часто
				this.bindToWin('resize', throttle(this._redraw, 300));

				// подробнее про channels см. https://ru.bem.info/libs/bem-core/v2.8.0/desktop/events/#Элемент-channels-блока-events-1
				channels('filter').on('change', function(e, val) {
					_this.elem('item').each(function() {
						var item = $(this);
						_this.setMod(item, 'hidden', val === '' ? false : _this.elemParams(item).filter != val);
					});
				});
            }
        }
	},
	_redraw: function(){
		var width__action = this.findBlockInside('goods').elem('action')[0] ? this.findBlockInside('goods').elem('action')[0].offsetWidth : 0;

		console.log(width__action);

		this.setMod('show', width__action > 165 ? 'text' : 'icon');
	}
}));

});
