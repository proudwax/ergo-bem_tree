block('order-contacts').content()(function() {

	var order = (
		[
			{
				"block": "input",
				"options": {
					"type": "text",
					"name": "name", 
					"placeholder": "Имя" 
				}
			},
			{
				"block": "input",
				"options": {
					"type": "tel",
					"name": "tel", 
					"placeholder": "Телефон" 
				}
			},
			{
				"block": "input",
				"options": {
					"type": "email", 
					"name": "mail",
					"placeholder": "Email" 
				}
			},
			{
				"block": "input",
				"options": {
					"type": "text", 
					"name": "address",
					"placeholder": "Адрес" 
				}
			}
		]
	);
	
	function getInput(items){
		return items.map(function(item){
			return {
				elem: 'input',
				content: [
					{
						block: item.block,
						mods: { theme: 'ergo', size: 'l', 'has-clear' : true, width : 'available', type: item.options.type },		
						placeholder: item.options.placeholder,
						name: item.options.name
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
					content: 'Контактные данные'
				}
			]
    	},
		{
			elem: 'content',
			content: getInput(order)
		}
    ];
});