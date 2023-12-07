import './styles/style.scss';
import obs from './assets/img/obs.webp';
import obs2 from './assets/img/Observer.jpg';

class Person {
    constructor(PerName) {
        this.PerName = PerName
    }
}

let images = document.querySelectorAll('img')

images[0].src = obs
images[1].src = obs2