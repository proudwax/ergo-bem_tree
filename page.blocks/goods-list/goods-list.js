modules.define('goods-list', ['i-bem__dom', 'BEMTREE', 'BEMHTML', 'jquery', 'history', 'uri', 'events__channels', 'functions__throttle'], function(provide, BEMDOM, BEMTREE, BEMHTML, $, History, Uri, channels, throttle) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
            	var _this = this,
					history = new History();
				
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
				
				// В канал передаётся объект Uri
				channels('changeUrl').on('change', function(e, url) {
				
					history.changeState('replace', { title: 'Title', url: url });
					_this.setMod(_this.elem('spin'), 'visible', true);

					// Тех. url для добавления path и params из блока 'goods-list' и отправки ajax
					tehUrl = Uri.parse(url.toString());
					
					tehUrl.setPath(_this.params.source);
					
					for(var key in _this.params.params){
						tehUrl.addParam(key, _this.params.params[key]);
					}

					$.ajax({
						url: tehUrl.toString(), 
						/* url: '/page.json', */
						dataType: 'json',
						type: 'GET'					
					})
					.done(function(data){
						/* alert( "success" ); */
						BEMDOM.update(_this.domElem, _this._generateHtml(data));
						
						_this.delMod(_this.elem('spin'), 'visible');
					})
					.fail(function(){
						alert('error');
					})
					.always(function(data){	
						delete tehUrl;
					});
					
				});
            }
        }
	},
	
	_generateHtml: function(json){
		return BEMHTML.apply(BEMTREE.apply({ block: 'root', dataGoods: json, context: { block: 'goods-list', elem: 'container' } }));
	},

	_redraw: function(){
		var width__action = this.findBlockInside('goods').elem('action')[0] ? this.findBlockInside('goods').elem('action')[0].offsetWidth : 0;

		this.setMod('show', width__action > 165 ? 'text' : 'icon');
	}
}));

});
