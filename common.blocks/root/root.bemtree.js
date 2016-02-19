block('root').replace()(function() {
	var ctx = this.ctx;
	
    console.log(ctx);

    var modName =  ctx.page.modName,
        modVal = ctx.page.modVal;

    var mods = [];

    mods['theme'] = 'ergo';
    mods[modName] = modVal;

    console.log(mods);

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
        mods: mods 
    });
});
