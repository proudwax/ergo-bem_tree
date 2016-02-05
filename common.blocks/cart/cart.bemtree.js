block('cart').content()(function() {

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

	function elemListItem(items){
		return items.map(function(item){
			return {
				elem: 'item',
				content: [
					{
						block: 'cart-item',
						mods: { view: 'cart' },
						js: { 'goods-id': item['goods-id'], 'name': item.name, 'price': item.price.current, 'count': item.count },
						content: [
							{
								elem: 'content',
								content: [
									{
										elem: 'image',
										alt: item.name,
										url: item.preview
									},
									{
										elem: 'name',
										content: [
											{
												block: 'link',
												mods : { theme : 'ergo' },
												url : item['goods-id'],
												content: item.name
											}
										]
									}
								]
							},
							{
								elem: 'amount',
								content: [
									{
										block: 'amount',
										content: item.count
									}
								]
							},
							{
								elem: 'price',
								content: [
									item.price.current,
									{
										block: 'rub',
										mods: { size: 'small' }
									}
								]
							},
							{
								elem: 'trash',
								url: '#' + item['goods-id']
							}
						]
					}
				]
			}
		});	
	}
	
    return [
    	{ 
    		elem: 'header',
    		content: [
				{
					elem: 'title',
					content: 'Корзина'
				},
				{
					elem: 'amount',
					content: 'Количество'				
				},
				{
					elem: 'price',
					content: 'Цена'
				}
			]
			
    	},
    	{
    		elem: 'container',
    		content: elemListItem(cart.list)
    	},
    	{
    		elem: 'footer',
    		content: [
				{
					elem: 'total',
					content: 'Итого:'
				},
				{
					elem: 'action',
					content: [
						{
							block : 'button',
							mods : { theme : 'ergo', size : 'xl', view : 'action' },
							text : 'Купить сейчас!'
						}
					]
				}
			]
			
    	}
    ];
});