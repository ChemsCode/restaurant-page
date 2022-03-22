import beefShaw from './beef-shawarma.jpg';
import chickenShaw from './beef-shawarma.jpg';
import shishKebab from './shish_kebab.jpg';


function menuComp() {
        //Creating the Title, Description, Opening Hours
        const homeList = ["shishKebab", "chickenShaw", "beefShaw"]
        const main = document.createElement('div');
        main.classList.add("main");
        homeList.forEach((item) => {
            let li = document.createElement("div");
            li.innerText = '';
            li.setAttribute('id',`${item}`);
            main.appendChild(li)
        });
    
        return main;
}
 
export {menuComp};