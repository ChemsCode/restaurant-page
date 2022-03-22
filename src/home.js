function homeComp() {
        //Creating the Title, Description, Opening Hours
        const homeList = ["Title", "Description", "Opening Hours"]
        const data2 = ["Wahab's Kebab", '', "Welcome to Wahab's Kebab, the only kebab you'll ever need for the rest of your life!"]
        const main = document.createElement('div');
        let counter = 0;
        main.classList.add("main");
        homeList.forEach((item) => {
            let li = document.createElement("div");
            li.innerText = data2[counter];
            li.setAttribute('id',`${item}`);
            main.appendChild(li)
            counter++;
        });
    
        return main;
}
 
export {homeComp};