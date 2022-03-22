import './style.css';
import { menuComp } from './menu';
import { homeComp } from './home';
import { contactComp } from './contact';
import { navbarComp } from './navbar';
import rat from './ratatouille.jpeg';
import beefShaw from './beef-shawarma.jpg';
import chickenShaw from './shawarma.jpg';
import shishKebab from './shish_kebab.jpg';

const myImage = new Image();
myImage.src = rat;
const shishKebabImg = new Image();
shishKebabImg.src = shishKebab;
const beefShawImg = new Image();
beefShawImg.src = beefShaw;
const chickenShawImg = new Image();
chickenShawImg.src = chickenShaw;

function component() {
    const element = document.createElement('div');
    element.setAttribute('id','container');
    element.appendChild(navbarComp());
    return element;
}
 
document.getElementById("content").appendChild(component());
document.getElementById("container").appendChild(homeComp());
document.getElementById("Description").appendChild(myImage);

document.getElementById("Home").addEventListener("click", () => {
    console.log("in home")
    document.getElementById("container").lastChild.remove();
    document.getElementById("container").appendChild(homeComp());
    document.getElementById("Description").appendChild(myImage);
});

document.getElementById("Menu").addEventListener("click", () => {
    console.log("in menu")
    document.getElementById("container").lastChild.remove();
    document.getElementById("container").appendChild(menuComp());
    document.getElementById("chickenShaw").appendChild(chickenShawImg);
    document.getElementById("beefShaw").appendChild(beefShawImg);
    document.getElementById("shishKebab").appendChild(shishKebabImg);
});

document.getElementById("Contact").addEventListener("click", () => {
    console.log("in contact")
    document.getElementById("container").lastChild.remove();
    document.getElementById("container").appendChild(contactComp());
});