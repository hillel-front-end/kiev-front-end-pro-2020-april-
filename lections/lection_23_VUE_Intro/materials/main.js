console.log('Lection 23 __ VUE INTRO __');

/*
1. Instance
2. {{}} Interpolations (https://ru.vuejs.org/v2/guide/syntax.html)
3. Expression in nterpolations({{?:}})
3. directives: 
    * v-html="'String with html value'"
    * v-bind:disabled="boolean"
    * v-bind:href="url"
    * v-model
    * v-if="boolean" - v-else-if="boolean" - v-else
    * v-show="boolean"
    * v-for - loop (Work like  for-in), (value, name, index)

4. styles directives: ( HW )
   * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
   * v-bind:class="['activeClass', errorClassAsVar]"
   * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"
5. v-on:click,mousenove .. (@click)

6. $set(vm.items, indexOfItem, newValue) // next lesson
*/
// console.log(Vue, 'vue');


console.log(Vue, 'Vue');

const data = {
    a: 1,
    b: 2,
    sum() {
        return this.a + this.b + ' HEllo world';
    },
    isMarried: true,
    href: 'google.com',
    foo: '',
    menu: [
        'Main',
        'Gallery',
        'Contacts',
        'Contacts'
    ],
    menuSecond: [
        {
            text:'gallery',
            value: 'ggggg'
        },
        {
            text:'Contacts',
            value: 'ccccc'

        }
    ],
    addMenuItem() {
        this.menuSecond.push({
            text: this.data.text,
            value: this.data.value
        });
    },
    onClick(value) {
        console.log(this.menuSecond, 'menuSecond');
    },
    data: {
        text: '',
        value: ''
    }
};

const config = {
    el: '#app',
    data: data
};

const vue = new Vue(config);