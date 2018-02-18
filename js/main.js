(function() {

    Vue.component('card', {
        template: `
            <div class="card">
                <span class="image" :style="{ backgroundImage: 'url(/img/' + data.image + '.jpg)' }" />
                <span class="name">{{ data.name }}</span>            
            </div>
        `,
        props: ['data'],
    });

    Vue.component('card-list', {
        template: `
            <div class="card-list">
                <div class="cards">
                    <transition-group :name=" position === 'right' ? 'list-right' : 'list-left' " tag="p">
                        <card v-for="(item, index) in data" :key="index" :data="item" />                        
                    </transition-group>
                </div>
                <div class="controls">
                    <button @click="">Rewind</button>                    
                    <button @click="moveLeft">Left</button>                    
                    <button @click="">Super</button>                    
                    <button @click="moveRight">Right</button>
                    <button @click="">Boost</button>                    
                </div>
            </div>
        `,
        props: ['data'],
        data() {
            return { position: '' }
        },
        methods: {
            moveRight() {
                this.position = 'right';
                this.remove();
            },
            moveLeft() {
                this.position = 'left';
                this.remove();                
            },
            remove() {
                this.data.pop();
            },
            leave() {
                console.log('Hello');
                
            }
        }
    });

    const app = new Vue({
        el: '#app',
        data: {
            names: [
                {name: 'Ankur', image: '1'}, 
                {name: 'Mukul', image: '2'}, 
                {name: 'Abhishek', image: '3'},
                {name: 'Naman', image: '2'},
                {name: 'Deepak', image: '1'},
            ]
        }
    })

}());