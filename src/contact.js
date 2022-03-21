
function contactComp() {

    //Creating the Title, Description, Opening Hours
    const homeList = ["Location", "Email", "Phone Numer"]
    const main = document.createElement('div');
    main.classList.add("main");
    homeList.forEach((item) => {
        let li = document.createElement("div");
        li.innerText = item;
        li.setAttribute('id',`${item}`);
        main.appendChild(li)
    });

    return main;
}
 
export {contactComp};