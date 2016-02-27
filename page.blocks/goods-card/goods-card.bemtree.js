block('goods-card').content()(function() {
	
	var goods = ({
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
		});
	
	function buildElemLable(price_current, price_old){
		if(price_old != undefined){
			var percent = Math.ceil(100 - ((price_current / price_old) * 100));
			return {
				elem: 'lable',
				content: 'до -' + percent + ' %'
			};
		}
	}

	var images = goods.image.map(function(image){
		return {
			elem: 'image',
			content: image
		}
	});
	
	console.log(goods);

	return [
		{
			elem: 'content',
			content: [
				{
					elem: 'header',
					content: goods.title
				},
				buildElemLable(goods.price.current, goods.price.old),
				{
					elem: 'price',
					content: goods.price.current
				},
				{
					elem: 'description',
					content: goods.desc
				}
			]
		},
		{
			elem: 'slider',
			content: [
				{
					block: 'slider-with-thumbs',
					mods: { type: 'vertical' }
				}
			]
		}
	];
	
});
