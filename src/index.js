import './style.css';
import { menuComp } from './menu';
import { homeComp } from './home';
import { contactComp } from './contact';
import { navbarComp } from './navbar';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id','container');
    element.appendChild(navbarComp());
    return element;
}
 
document.getElementById("content").appendChild(component());
