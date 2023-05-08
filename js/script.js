var orderCustomItem = document.querySelectorAll(".order-custom-item");

orderCustomItem.forEach(item => {
    item.addEventListener('click', ()=>{
        if(item.querySelectorAll(".order-custom-list").style.marginTop == "0px"){
            item.querySelectorAll(".order-custom-list").style.marginTop = "-200%";
        }
        else if(item.querySelectorAll(".order-custom-list").style.marginTop == "-200%")
        {
            item.querySelectorAll(".order-custom-list").style.marginTop = "0px";
        }
    })
});