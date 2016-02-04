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
								elem: 'amount',
								content: [
									{
										block: 'amount',
										// js: true,
										buttonMinusMods: { theme : 'ergo', size : 'm', 'minus': true },
										buttonPlusMods: { theme : 'ergo', size : 'm', 'plus': true },
										InputMods : { theme : 'ergo', size : 'm', 'count': true },
										InputMaxLength : 2,
										InputVal: 1,
										InputName: 'count'
										// content: item.count
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
							} 
						]
					},
					{
						elem: 'trash',
						url: '#' + item['goods-id']
					}
				]
			}
		});	
	}
	
    return [
    	{ 
    		elem: 'header',
    		content: 'Корзина'
    	},
    	{
    		elem: 'content',
    		content: elemListItem(cart.list)
    	},
    	{
    		elem: 'footer',
    		content: 'Итог'
    	}
    ];
});