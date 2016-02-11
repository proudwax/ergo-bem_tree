block('root').replace()(function() {
	this.data = this.ctx.data;
	
	var ctx = this.ctx;
    // пробрасываем data вглубь по дереву
    this.data = ctx.data;
	
    // если задан context — требуется отрендерить не целую страницу, а лишь эту конкретную часть
    if (ctx.context) return applyCtx(ctx.context);
	
    return applyCtx({
        block: 'page',
        title: 'TODO',
        favicon : '/assets/i/1577.jpg',
        head: [
            { elem : 'meta', attrs : { name : 'description', content : '' } },
            { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
            { elem: 'css', url: 'index.min.css' }
        ],
        scripts: [
            { elem: 'js', url: 'index.min.js' }
        ],
        mods: { theme: 'ergo', view: /* 'index' */ 'order' /* 'cart' */ }
    });
});
