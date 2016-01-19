modules.define('image', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				this._offsetShow = this.domElem.offset().top - BEMDOM.win.height();
				
				this.setMod('lazy', 'follow');
            }
        },
		
		'lazy': {
			'follow': function(){
				this.bindToWin('scroll', function(e){
					if(BEMDOM.win.scrollTop() >= this._offsetShow){
						this
							.delMod('lazy')
							.setMod('loaded');
					}
				});
			},
			
		},
		
		'loaded': {
			true: function(){
				/* this.findBlockOutside({block: 'goods', elem: 'image'}).domElem.append(this.domElem, BEMHTML.apply(
					{
						block : 'spin',
						mods : { theme : 'ergo', size : 'm', visible : true }
					}
				)); */
				
				/* BEMDOM.append(_this.elem('wrapper'), BEMHTML.apply({ block: 'spin', mods : { theme: 'ergo', size: 'xl', visible: true, center: true } */
				
				/* console.log(BEMHTML.apply({ block: 'spin', mods : { theme: 'ergo', size: 'xl', visible: true, center: true }})); */

				console.log(BEMHTML.apply({ block: 'content', content: 'dsfsdfds' }));
				
				/* this.domElem.attr('src', this.params.src); */
				
				this
					.bindTo('load', function() { 
						console.log('Image load');
						
					})
					.unbindFromWin('scroll');
			}
		}
	},

	_onInit: function(){
		
	},

	_onScroll: function(){
	
	},
	
	getDefaultParams: function() {

	}
}
));

});
