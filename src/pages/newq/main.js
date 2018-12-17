import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

function fib(n) {
    if(n<=2) return 1
    let a = 1;
    let b = 1;
    for(let i = 3;i<=n;i++) {
        if(i%2) {
            a +=b
        } else {
            b+=a
        }
    }
    return n%2 ? a : b
}

for(let i = 1;i<25;i++)
    console.log(fib(i))