import './styles/style.scss';
import obs from './assets/img/obs.webp';
import font from './assets/fonts/Whisper-Regular.ttf';
import './index.ts';

class Person {
    constructor(PerName) {
        this.PerName = PerName
    }
}

let images = document.querySelectorAll('img')

document.body.append(`<img src=${obs}/>`)
