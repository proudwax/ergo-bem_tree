block('root').replace()(function() {
	var ctx = this.ctx;

        
	
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
        mods: { theme: 'ergo', ctx[0]: ctx[1] }
    });
});
