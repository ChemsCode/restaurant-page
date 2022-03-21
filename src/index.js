import './style.css';
import { menuComp } from './menu';
import { homeComp } from './home';
import { contactComp } from './contact';

function component() {
    let selectedComp = homeComp();
    return selectedComp;
}
 
document.getElementById("content").appendChild(component());