function navbarComp() {
    //Creating the navbar
    const navbar = document.createElement('div');
    navbar.classList.add("navbar");
    const list = document.createElement('ul');
    let data = ["Home", "Menu", "Contact"]


    data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
    navbar.appendChild(list); 

 
    return navbar;
}

export {navbarComp};