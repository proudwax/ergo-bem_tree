block('sticky').mod('cart-button', true).content()(function() {

	items = ([
		{
			"goods-id": 1,
			"title": "Ergobaby — Organic Navy",
			"name": "Organic Navy",
			"category": 2,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo1.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo1-1.jpg"
			],
			"price":
				{
					"old": 10000,
					"current": 7500
				},
			"desc": "Назначение — городской"
		},
		{
			"goods-id": 2,
			"title": "Ergobaby — Organic Bundle of Joy - Navy",
			"name": "Organic Bundle of Joy - Navy",
			"category": 2,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo2.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo2.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo2-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo2-2.jpg"
			],
			"price":
				{ "current": 10000 },
			"desc": "Назначение — городской"
		}
	]);

    return [
		applyNext(),
		{
			block: 'cart-button',
			js: true,
			content: [
				{
					block : 'button',
					mods : { theme : 'ergo', size : 'm' },
					text : 'Корзина',
					icon: {
						block: 'icon',
						cls: 'fa fa-shopping-cart'
					},
					badge: 2
				},
				{
					block : 'popup',
					mods : { theme : 'ergo', target : 'anchor', autoclosable : true, 'cart': true, 'tail': true },
					mainOffset : 13,
					directions : ['bottom-right', 'top-right'],
					content: [
						{
							elem: 'container',
							// content: 'Корзина пуска'
							content: [
								{
									elem: 'header',
									content: [
										{
											block: 'link',
											mods: { theme : 'ergo', size : 'l', pseudo : true },
											content: 'В корзине 2 товара &mdash; 20 000 руб.'
										}
									]
								},
								{
									elem: 'list',
									content: [
										{
											block: 'goods',
											js: { 'goods-id': 1, title: 'Ergobaby — Organic Navy', source: '/assets/json/1.json' , cost: 10000, name: 'Organic Navy'},
											mods: { 'in-mimi-cart': true },
											content: [
												{
													elem: 'container',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: '/assets/i/promo1.jpg',
																	alt: ''												
																}
															]
														},
														{
															elem: 'content',
															content: [
																{
																	elem: 'name',
																	content: 'Organic Navy'
																},
																{
																	elem: 'price',
																	content: 10000
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'goods',
											js: { 'goods-id': 2, title: 'Ergobaby — Organic Bundle of Joy - Navy', source: '/assets/json/2.json', cost: 10000, name: 'Organic Bundle of Joy - Navy' },
											mods: { 'in-mimi-cart': true },
											content: [
												{
													elem: 'container',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: '/assets/i/promo2.jpg',
																	alt: ''												
																}
															]
														},
														{
															elem: 'content',
															content: [
																{
																	elem: 'name',
																	content: 'Organic Bundle of Joy - Navy'
																},
																{
																	elem: 'price',
																	content: 10000
																}
															]
														}
													]
												}
											]
										}									
									]
								},
								{
									elem: 'footer',
									content: [
										{
											block : 'button',
											mods : { theme : 'ergo', size : 'm', type : 'link'  },
											url : '#',
											text : 'Перейти в корзину'
										},
										{
											block : 'button',
											mods : { theme : 'ergo', size : 'm', type : 'link', view : 'action' },
											url : '#',
											text : 'Оформить заказ'
										}
									]
								}
							]
						}
					]
				}
			]
		}
    ];
});