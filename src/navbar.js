function navbarComp() {
    //Creating the navbar
    const navbar = document.createElement('div');
    navbar.classList.add("navbar");
    const list = document.createElement('ul');
    let data = ["Home", "Menu", "Contact"]


    data.forEach((item) => {
        // let restaurantTitle = document.createElement("h1");
        // restaurantTitle.setAttribute('id',`restaurant-name`);
        // restaurantTitle.innerHTML = "Wahab's Kebab";
        let liButton = document.createElement("button")
        liButton.setAttribute('id',`${item}`);
        liButton.innerHTML = item;
        let li = document.createElement("li");
        li.appendChild(liButton);
        list.appendChild(li);
    });
    navbar.appendChild(list); 

 
    return navbar;
}

export {navbarComp};