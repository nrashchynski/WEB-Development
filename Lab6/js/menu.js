var MenuA = [
    {name:'Пункт 1', submenu: 
        [ 
            {name: 'Расписание', submenu: 
                [ 
                    {name:'День 1', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'},
                    {name:'День 2', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'} 
                ] 
            }, 
            {name:'Билеты', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'}, 
            {name:'Самолеты', submenu: 
                [ 
                    {name:'Самолет 1', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'},
                    {name:'Самолет 2', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'},
                    {name:'Самолет 3', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'},
                    {name:'Самолет 4', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'} 
                ] 
            } 
        ] 
    }, 
    {name: 'Пункт 2', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'}, 
    {name:'Пункт 3', submenu: 
        [ 
            {name:'Меню в самолете', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'}, 
            {name:'Выбор класса', url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F'} 
        ] 
    } 
];

function ShowMenu(MenuItemsA, ParentElem, level = 0) {
    let menu = document.createElement('ul');
    
    if (level === 0) {
        menu.className = 'main-menu';
    } else {
        menu.className = 'submenu';
    }
    
    MenuItemsA.forEach(function(item) {
        let li = document.createElement('li');

        if (item.submenu) {
            let span = document.createElement('span');
            span.textContent = item.name;
            li.appendChild(span);
            
            li.classList.add('has-submenu');
            li.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('active');
            });
            
            ShowMenu(item.submenu, li, level + 1);
        } else {
            let a = document.createElement('a');
            a.textContent = item.name;
            a.href = item.url || '#';
            li.appendChild(a);
        }
        
        menu.appendChild(li);
    });
    
    ParentElem.appendChild(menu);
}

document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('menu-container');
    ShowMenu(MenuA, container);
});