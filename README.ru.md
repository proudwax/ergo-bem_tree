# Трехзвенная архитектура в БЭМ

У нас есть документация про технологии БЭМ платформы (BEMJSON, BEMTREE, BEMHTML, DEPS), но практически нет туториалов по использованию их всех вместе. Есть [несколько исключений](https://ru.bem.info/articles/bem-full-stack-site/), но они достаточно объемные и сложноваты для восприятия.

Я написал простой пример, рассчитанный на тех, кто уже немного освоился в версткой на основе [project-stub](https://ru.bem.info/tutorials/project-stub/) и хочет продолжить свое знакомство с платформой.

Пусть у нас есть следующий файл с данными **data.json**:
```json
{
    "user": "mathetes",
    "company": "WebExcel",
    "city": "Novosibirsk"
};
```
Как вариант, данные могут приходить из БД или через HTTP API — источник не играет роли.

Наша задача сгенерировать на основе этих данных HTML, который будет представлять собой страницу с логотипом в шапке, карточкой пользователя в основной части и копирайтом в подвале.

Первым шагом необходимо из исходных сырых данных получить [BEMJSON](https://ru.bem.info/technology/bemjson), описывающий страницу. Для этого будем использовать технологию [BEMTREE](https://ru.bem.info/technology/bemtree). При этом договоримся, что в качестве корневого блока, на основе которого будет строиться дерево, возьмем блок `page`.

В результате должен получиться следующий BEMJSON:
```js
{
    block: 'page',
    content: [
        {
            block: 'header',
            content: {
                block: 'logo'
            }
        },
        {
            block: 'main',
            content: {
                block: 'user',
                content: 'тут-содержимое-карточки-пользователя'
            }
        },
        {
            block: 'footer',
            content: '© 2015 SuperPuper'
        }
    ]
}
```

BEMTREE-шаблон для блока `page` должен построить шапку, основную часть и подвал:
```js
block('page').content()(function() {
    return [
        { block: 'header' },
        { block: 'main' },
        { block: 'footer' }
    ];
]);
```

По техзаданию в шапке должен быть логотип. Тогда шаблон шапки может выглядеть так:
```js
block('header').content()(function(){
    return { block: 'logo' };
});
```

В основной части нужна карточка пользователя. Так что нам потребуется доступ к данным из файла **data.json**. Но пока отложим этот момент и захардкодим какие-то тестовые данные:

```js
block('main').content()(function() {
    return {
        block: 'user',
        content: [
            {
                elem: 'name',
                content: 'test name'
            },
            {
                elem: 'company',
                content: 'test company'
            },
            {
                elem: 'city',
                content: 'test city'
            }
        ]
    };
});
```

В подвале нужен копирайт:
```js
block('footer').content()('© 2015 SuperPuper');
```

Теперь, когда мы знаем, какие потребуются шаблоны, нужно скомпилировать BEMTREE-[бандл](https://ru.bem.info/method/build/#Результаты-сборки), который будет включать ядро самого шаблонизатора и код шаблонов.

В самом простом случае мы можем сохранить все шаблоны в один файл, установить пакет [bem-xjst](https://ru.bem.info/tools/templating-engines/bemxjst/) и с его помощью скомпилировать бандл:
```
bem-xjst -i path/to/templates.js -o bundle.bemtree.js
```

Но раз мы хотим следовать [рекомендации БЭМ методологии](https://ru.bem.info/method/filesystem/) и раскладывать каждый шаблон в папку соответствующего блока, то нам потребуется какой-то способ потом эти шаблоны собрать вместе. Для этого подойдет сборщик [ENB](https://ru.bem.info/tools/bem/enb-bem/).

Схема работы `ENB` подробно описана в [этом документе](https://ru.bem.info/tools/bem/enb-bem-techs/build-bundle/). Главное, что нас сейчас интересует — это то, что `ENB` собирает файлы только тех сущностей, которые явно [задекларированы](https://ru.bem.info/method/declarations/).

Получить декларацию с перечислением всех нужных блоков можно двумя способами: в `*.bemdecl.js` перечислить все нужные блоки (и не забывать добавлять и удалять их по мере разработки и рефакторинга), либо указать только корневой блок (в нашем случае `page`), а блоки, которые нужны корневому и всем последующим, указывать в их собственных списках зависимостей — [deps.js](https://ru.bem.info/technology/deps/). Второй путь гораздо гибче: сохраняется прицип БЭМ-методологии о том, что блок сам знает о себе всё, при удалении блока автоматически будут удалены и его зависимости, а при добавлении они автоматически включатся в сборку.

Так как шаблон блока `page` создает блоки `header`, `main` и `footer`, мы явно укажем это в списке зависимостей в файле `page.deps.js`:
```js
({
    shouldDeps: ['header', 'main', 'footer']
})
```

> Если вы имели опыт работы с `project-stub`, где нужные файлы попадали в сборку автоматически, то необходимость указывать зависимости вручную может показаться странной. Дело в том, что там у нас на руках заранее был готовый BEMJSON-файл, по которому можно было получить список всех необходимых сущностей. А в данном случае мы планируем генерировать BEMJSON в процессе сборки на основе шаблонов. При этом шаблоны необходимо собрать заранее, а значит декларацию нужных блоков потребуется описать самостоятельно.

Отлично, теперь мы знаем как собрать шаблоны. Следующим шагом необходимо получить с их помощью BEMJSON на основе данных, а затем из BEMJSON сгенерировать HTML с помощью BEMHTML. В общем виде это выглядит так:
```js
var data = require('path/to/data.json'),
    BEMTREE = require('path/to/bundle.bemtree.js').BEMTREE,
    BEMHTML = require('path/to/bundle.bemhtml.js').BEMHTML,
    bemjson = BEMTREE.apply(data),
    html = BEMHTML.apply(bemjson);

require('fs').writeFileSync('index.html', html);
```

Эти преобразования будут работать и в браузере, если подключить `bundle.bemtree.js` и `bundle.bemhtml.js` на страницу. Останется только вставить полученную HTML-строку в DOM.

Осталось разобраться, как все-таки сгенерировать карточку пользователя на основе данных из `data.json`, вместо использования хардкода.

Как видно в примере кода выше, данные мы передаем в вызов `BEMTREE.apply(data)`. При этом мы помним, что корневым блоком должен оказаться блок `page`. Достичь этого можно следующим образом:

```js
var data = require('path/to/data.json');
BEMTREE.apply({
    block: 'page',
    data: data // теперь данные попадут в контекст шаблона блока page
});
```

Модифицируем код шаблона так, чтобы пробросить данные для вложенных в `page` блоков:

```js
block('page').content()(function() {
    this.data = this.ctx.data; // this будет общим для всех потомков page,
                               // так что они смогут использовать поле data

    return [
        { block: 'header' },
        { block: 'main' },
        { block: 'footer' }
    ];
]);
```

Тогда финальный вид BEMTREE-шаблона блока `main` окажется таким:
```js
block('main').content()(function() {
    var data = this.data;

    return {
        block: 'user',
        content: [
            {
                elem: 'name',
                content: data.user
            },
            {
                elem: 'company',
                content: data.company
            },
            {
                elem: 'city',
                content: data.city
            }
        ]
    };
});
```

Из соображений унификации в качестве корневого блока удобно использовать блок `root`, который будет отвечать за пробрасывание данных вглубь дерева и создавать `page`:
```js
block('root').replace()(function() {
    return {
        block: 'page',
        title: 'TODO',
        head: [
            { elem: 'css', url: 'index.min.css' }
        ],
        scripts: [
            { elem: 'js', url: 'index.min.js' }
        ],
        mods: { theme: 'islands' }
    };
});
```
