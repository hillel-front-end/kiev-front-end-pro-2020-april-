
function menuModule() {
    var data = { 
        name: 'menu', 
        type: 'row', // row|column
        items: [
            {
                title: 'Add',
                handler: 'ActionAdd'
            },
            {
                title: 'Save',
                handler: 'ActionSaveAs'
            },
            {
                title: 'Exit',
                handler: 'ActionExit'
            },
            {
                title: 'Edit',
                handler: 'ActionEdit'
            }
        ]
    }
    
    var actions = {
        ActionAdd: function() {
            console.log('add');
        },
        ActionSaveAs: function() {
            console.log('save')
        },
        ActionExit: function() {
             console.log('exit');
        },
        ActionEdit: function() {
            console.log('Edit');
        }
    };


    function MenuComponent(data, actions) {
        this.data = data;
        this.actions = actions;
        this.ul = null;
    }

    MenuComponent.prototype.makeMenuItems = function() {
        var fragment = document.createDocumentFragment();
        var items = this.data.items;

        for(var i = 0; i < items.length; i++) {
            var li = document.createElement('li');
            var item = items[i];
            li.classList.add('menu-item');
            li.innerText = item.title;
            li.addEventListener('click', actions[item.handler]);
            fragment.append(li);
        }

        return fragment;
    }

    MenuComponent.prototype.makeMenuContainer = function() {
        var ul = document.createElement('ul');
            ul.classList.add(data.type);

        return ul;
    }

    MenuComponent.prototype.makeMenu = function() {
        var ul = this.makeMenuContainer();
        var fragment = this.makeMenuItems();
        ul.append(fragment);
        this.ul = ul;

        return this;
    }

    MenuComponent.prototype.render = function(selector) {
        var parent = document.querySelector(selector);

        if (this.ul && parent) {
            document.querySelector(selector).append(this.ul);
        }

        return this;
    }

    var menu = new MenuComponent(data, actions);

    menu
    .makeMenu()
    .render('.container');

    
}


window.onload = menuModule;