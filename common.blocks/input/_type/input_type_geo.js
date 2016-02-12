modules.define('input', ['i-bem__dom', 'BEMHTML'], function(provide, BEMDOM, BEMHTML, Input) {

provide(Input.decl({ modName: 'type', modVal: 'geo' }, {
	onSetMod : {
		'js': function() {
            this.bindTo('geo', 'click', this._getGeo);
			
			/* ajax https://geocode-maps.yandex.ru/1.x/?geocode=30.471507400000004,59.9749045&kind=house */
		}
	},
	
	_getGeo: function(){
		
		var size = {'xs': 'xs', 's': 'xs', 'm': 'xs', 'l': 's', 'xl': 's'}; 
	
		var spin = [{
			block : 'spin',
			mods : { theme : 'ergo', size : size[this.getMod('size')] || 'xs', visible : true, geo: true }
		}]
	
		this
			.setMod(this.elem('geo'), 'spin', true)
			.elem('geo').html(BEMHTML.apply(spin));
	
		var options = {
			enableHighAccuracy: true, 
			maximumAge: 30000, 
			timeout: 27000
		};
	
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError, options);
		} else { 
			console.log("Geolocation is not supported by this browser.");
		}
		

		function showPosition(position) {
			console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);	
		}

		function showError(error) {
			switch(error.code) {
				case error.PERMISSION_DENIED:
					console.log("User denied the request for Geolocation.")
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
		}
	}
	
}));
});