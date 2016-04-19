modules.define('goods-list', ['i-bem__dom', 'BEMHTML', 'BEMTREE', 'jquery', 'events__channels', 'functions__throttle'], function(provide, BEMDOM, BEMTREE, BEMHTML, $, channels, throttle) {

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
				
				channels('changeUrl').on('change', function(e, val) {
					console.log(val);
					
					$.ajax({
						/* url: 'http://ergobaby.yazvyazda.ru/catalog/?isNaked=1&nc_ctpl=2000&price=ASC', */
						url: '/page.json',
						dataType: 'json',
						type: 'GET'					
					}).done(function() {
						/* alert( "success" ); */
					})
					.fail(function() {
						/* alert( "error" ); */
					})
					.always(function(data) {
						console.log(BEMTREE.apply({ block: 'root', dataGoods: data, context: { block: 'goods-list' } }));
					});
					
				});
            }
        }
	},
	_redraw: function(){
		var width__action = this.findBlockInside('goods').elem('action')[0] ? this.findBlockInside('goods').elem('action')[0].offsetWidth : 0;

		this.setMod('show', width__action > 165 ? 'text' : 'icon');
	}
}));

});
