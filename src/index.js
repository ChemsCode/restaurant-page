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
document.getElementById("container").appendChild(homeComp());

document.getElementById("Home").addEventListener("click", () => {
    console.log("in home")
    document.getElementById("container").lastChild.remove();
    document.getElementById("container").appendChild(homeComp());
});

document.getElementById("Menu").addEventListener("click", () => {
    console.log("in menu")
    document.getElementById("container").lastChild.remove();
    document.getElementById("container").appendChild(menuComp());
});

document.getElementById("Contact").addEventListener("click", () => {
    console.log("in contact")
    document.getElementById("container").lastChild.remove();
    document.getElementById("container").appendChild(contactComp());
});