let sideBar=document.getElementsByClassName("sidebar");
async function getMenu(){
    await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
    .then(response=>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(data=>{
        console.log(data);
        displayMenu(data);
    })
    .catch(error=>console.log(error))
}
function displayMenu(menuItems){
    let menuGrid=document.getElementById("menu-grid");
    menuGrid.innerHTML="";
    menuItems.forEach(item=>{
        let menuItemDiv=document.createElement("div");
        menuItemDiv.classList.add("menu-item");
        menuItemDiv.innerHTML=`
            <img src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="${item.name}">
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <button class="add-to-cart-btn" data-item="${item.name}">+</button>
        `
        menuGrid.append(menuItemDiv)
        // 
    })
}


window.onload=function(){
    getMenu();
}