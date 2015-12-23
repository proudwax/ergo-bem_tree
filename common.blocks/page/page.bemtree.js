block('page').content()(function() {
    return [
        {
            block: 'header'
        },
        {
            block: 'sticky',
            mods: { theme: 'ergo', navigation: true }
        },
        {
            block: 'swiper'
        },
        {
            block: 'content'
        },
        {
            block: 'footer'
        }
    ];
});
