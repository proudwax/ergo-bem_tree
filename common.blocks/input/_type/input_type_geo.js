modules.define('input', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $, Input) {

provide(Input.decl({ modName: 'type', modVal: 'geo' }, {
	onSetMod : {
		'js': function() {

			this._placeholder = this.elem('control').attr('placeholder');

            this.bindTo('geo', 'click', function(){
            	this.setMod('disabled', true)
            		._getGeo();

            });
			
			/* ajax https://geocode-maps.yandex.ru/1.x/?geocode=30.471507400000004,59.9749045&kind=house */
		},

		'spin': {
			'true': function(){
            	this.elem('control').attr('placeholder', 'Обработка...');
			},

			'': function(){
            	this.elem('control').attr('placeholder', this._placeholder);
			}
		}
	},
	
	_getGeo: function(){
		
		var _this = this,
			size = {'xs': 'xs', 's': 'xs', 'm': 'xs', 'l': 's', 'xl': 's'},
			options = {
				enableHighAccuracy: true, 
				maximumAge: 30000, 
				timeout: 27000
			}; 
	
		var spin = [{
			block : 'spin',
			mods : { theme : 'ergo', size : size[this.getMod('size')] || 'xs', visible : true, geo: true }
		}];
	
		this
			.setMod('spin', true)
			.setMod(this.elem('geo'), 'spin', true)
			.elem('geo').html(BEMHTML.apply(spin));
	
	
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError, options);
		} else { 
			console.log("Geolocation is not supported by this browser.");
		}

		function showPosition(position) {
			// console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
			_this._getAdress({ latitude: position.coords.latitude, longitude: position.coords.longitude });
		}

		function showError(error) {
			switch(error.code) {
				case error.PERMISSION_DENIED:
					console.log("User denied the request for Geolocation.");
					break;
				case error.POSITION_UNAVAILABLE:
					console.log("Location information is unavailable.")
					break;
				case error.TIMEOUT:
					console.log("The request to get user location timed out.")
					break;
				case error.UNKNOWN_ERROR:
					console.log("An unknown error occurred.")
					break;
			}
			return { error: error };
		}
	},

	_getAdress: function(position){
		var _this = this;

		$.get( "https://geocode-maps.yandex.ru/1.x/", { geocode: position.longitude + ',' + position.latitude, kind: 'house', format: 'json', 'results': 1 })
		.done(function(data){
			_this
		  		.setVal(data.response.GeoObjectCollection.featureMember[0].GeoObject.name + ', '+ data.response.GeoObjectCollection.featureMember[0].GeoObject.description);
		  	
		  	BEMDOM.destruct(_this.elem('geo'));

		   	// console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject);
		})
		.fail(function() {
		    console.log("error");
		})
		.always(function() {
			_this
				.delMod('type')
				.delMod('spin')
				.delMod('disabled');
				
		    console.log("finished");
		});
 
	}
	
}));
});