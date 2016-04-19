block('root').replace()(function() {
	var data = this.data = this.ctx.data,
		dataGoods = this.dataGoods = this.ctx.dataGoods;

		if(this.ctx.context)
			return dataGoods;
			
    console.log(this.ctx);
	
    // если задан context — требуется отрендерить не целую страницу, а лишь эту конкретную часть
    // if (ctx.context) return applyCtx(ctx.context);
	
    return applyCtx({
        block: 'page',
        title: 'TODO',
        favicon : '/assets/i/1577.jpg',
        head: [
            { elem : 'meta', attrs : { name : 'description', content : '' } },
            { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
            { elem: 'css', url: '../index.min.css' }
        ],
        scripts: [
            { elem: 'js', url: '../index.min.js' }
        ],
        mods: { theme: 'ergo', view: data.type }
    });
});
