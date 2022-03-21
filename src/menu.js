
function menuComp() {
        //Creating the Title, Description, Opening Hours
        const homeList = ["Pizza", "Spaghetti", "Cheese"]
        const main = document.createElement('div');
        main.classList.add("main");
        homeList.forEach((item) => {
            let li = document.createElement("div");
            li.innerText = item;
            // li.classList.add(`coms`);
            main.appendChild(li)
        });
    
        return main;
}
 
export {menuComp};