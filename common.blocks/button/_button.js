modules.define('button', ['i-bem__dom', 'jquery', 'events__channels'], function(provide, BEMDOM, $, channels) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
			'inited': function(){
				var _this = this;
				
				channels('goods-more').on('click', function(e, val) {
					console.log(e);
					console.log(val);
					/* _this._moreGoods('/1.json'); */
				});		
			}
		},	
		'more': {
			'true': function() {
				/* var _this = this;
				
				channels('goods-more').on('click', function(e, data) {
					console.log(e);
				}); */
			},
			'': function() {
				alert('df');
			}
        }
	},
	_moreGoods: function(url){
		load = $.ajax({
			url: url,
		})
		.done(function(msg) {
			console.log(msg);
		});
	}
}));

});
