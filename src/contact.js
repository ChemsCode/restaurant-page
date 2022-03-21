
function contactComp() {
    const element = document.createElement('div');
    element.setAttribute('id','container');
    let HtmlChildArr = [];

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
    HtmlChildArr.push(navbar);

    //Creating the Title, Description, Opening Hours
    const homeList = ["Title", "Description", "Opening Hours"]
    const main = document.createElement('div');
    main.classList.add("main");
    homeList.forEach((item) => {
        let li = document.createElement("div");
        li.innerText = item;
        // li.classList.add(`coms`);
        main.appendChild(li)
    });
    HtmlChildArr.push(main);

    for(var i = 0; i < HtmlChildArr.length; i++){
        element.appendChild(HtmlChildArr[i]);
    }
 
    return element;
}
 
export {contactComp};