block('sticky').mod('cart-preview', true).content()(function() {

	var cart = (
		{
			"count": 3,
			"total": 37500,
			"list": [
				{
					"goods-id": 1,
					"name": "Organic Navy",
					"category": 2,
					"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo1.jpg",
					"price":
						{
							"old": 10000,
							"current": 7500
						},
					"count": 1
				},
				{
					"goods-id": 2,
					"name": "Organic Bundle of Joy - Navy",
					"category": 2,
					"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo2.jpg",
					"price":
						{ "current": 10000 },
					"count": 1
				},
				{
					"goods-id": 9,
					"name": "Original Red",
					"category": 3,
					"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo9.jpg",
					"price":{ 
						"old": 20000,
						"current": 10000
					},
					"count": 2
				}
			]
		}
	);
	
	function blockCartPopup(data){
		if(data.list != 0){
			return {
				block: 'cart-popup',
				content: [
					{
						elem: 'header',
						content: [
							{
								block: 'link',
								mods: { theme : 'ergo', size : 'l', pseudo : true },
								content: 'В корзине ' + data.count + ' товара &mdash; ' + data.total + ' руб.'
							}
						]
					},
					{
						elem: 'list',
						content: [
							elemListItem(data.list)
						]
					},
					{
						elem: 'footer'
					}
				]
			}
		}else{
			return {
				block: 'cart-popup',
				content: 'Корзина пуска'
			}
		}
	}

	function elemListItem(items){
		return items.map(function(item){
			return {
				elem: 'item',
				content: [
					{
						block: 'cart-item',
						id: item['goods-id'],
						content: [
							{
								elem: 'image',
								url: item.preview
							},
							{
								elem: 'name',
								content: item.name
							},
							{
								elem: 'price',
								price_old: item.price.old,
								price_current: item.price.current
							}
						]
					}
				]
			}
		});	
	}

    return [
		applyNext(),
		{
			block: 'cart-preview',
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
					badge: cart.count
				},
				{
					block : 'popup',
					mods : { theme : 'ergo', target : 'anchor', autoclosable : true, 'cart': true, 'tail': true },
					mainOffset : 13,
					directions : ['bottom-right', 'top-right'],
					content: [
						{
							elem: 'container',
							content: [
								blockCartPopup(cart)
							]
						}
					]
				}
			]
		}
    ];
});



/* 
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
 */