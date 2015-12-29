block('slider').content()(function() {
	
	var slides = ([
		{
			"image": "http://lorempixel.com/1250/400/?",
			"container": {
				"mods": { "content-position": "right", "title-shadow": "true", "content-background": true },
				"title": "slide 1",
				"text": "Text text text"
			}
		},
		{
			"image": "http://lorempixel.com/1250/400/?",
			"container": {
				"mods": { "content-position": "right", "content-background": true },
				"title": "Много необычных, красивых и при этом удивительно полезных штук"
			}
		},
		{
			"image": "http://lorempixel.com/1250/400/?",
			"container": {
				"mods": { "theme": "white", "content-position": "right", "content-background": true },
				"title": "Прятки  — новая коллекция",
				"text": "Короткая история о том, как спрятался тот, кто обычно находит."
			}
		}
	]);

	var bemjson_slides = slides.map(function(slide){
		return {
			elem: 'slide',
			bg: slide.image + Math.random(),
			mods: slide.mods,
			title: slide.container.title,
			text: slide.container.text
		}
	});

	/* return {
		block: 'plugin',
		elem: 'swiper',
		content: [
			bemjson_slides
		]
	} */
	
	return {
		block: 'plugin',
		content: [
			{
				elem: 'swiper',
				content: [
					{
						elem: 'slide',
						mods: { 'content-position': 'right', 'title-shadow': true, 'content-background': true },
						bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
						title: 'slide 1',
						text: 'Text text text'
					},
					{
						elem: 'slide',
						mods: { 'content-position': 'right', 'content-background': true },
						bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
						title: 'Много необычных, красивых и при этом удивительно полезных штук'
					},
					{
						elem: 'slide',
						mods: { theme: 'white', 'content-position': 'right', 'content-background': true },
						bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
						title: [
							{
								block: 'character',
								mods: { 'aquo': true },
								content: 'Прятки'
							},
							' — новая коллекция',
						],
						
						text: 'Короткая история о том, как спрятался тот, кто обычно находит.'
					},	
					{
						elem: 'button',
						elemMods: { 'prev': true }
					},	
					{
						elem: 'button',
						elemMods: { 'next': true }
					},	
					{
						elem: 'pagination'
					}
				]
			}
		]	
	}
	
})




/* 
    	block: 'plugin',
		content: [
			{
				elem: 'swiper',
				content: [
					{
						elem: 'slide',
						mods: { 'content-position': 'right', 'title-shadow': true, 'content-background': true },
						bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
						title: 'slide 1',
						text: 'Text text text'
					},
					{
						elem: 'slide',
						mods: { 'content-position': 'right', 'content-background': true },
						bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
						title: 'Много необычных, красивых и при этом удивительно полезных штук'
					},
					{
						elem: 'slide',
						mods: { theme: 'white', 'content-position': 'right', 'content-background': true },
						bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
						title: [
							{
								block: 'character',
								mods: { 'aquo': true },
								content: 'Прятки'
							},
							' — новая коллекция',
						],
						
						text: 'Короткая история о том, как спрятался тот, кто обычно находит.'
					},	
					{
						elem: 'button',
						elemMods: { 'prev': true }
					},	
					{
						elem: 'button',
						elemMods: { 'next': true }
					},	
					{
						elem: 'pagination'
					}
				]
			}
		]
 */