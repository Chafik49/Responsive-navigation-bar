let menuBtn = document.getElementById("menuicon"),
    closeBtn = document.getElementById("closeicon"),
    icons = document.getElementById("icons"),
    navLinks = document.getElementById("navlinks"),
    product = document.getElementById("firstlink"),
    company = document.getElementById("secondlink"),
    connect = document.getElementById("thirdlink"),
    productSub = document.getElementById("productsub"),
    companySub = document.getElementById("companysub"),
    connectSub = document.getElementById("connectsub"),
    firstArrow = document.getElementById("firstarrow"),
    secondArrow = document.getElementById("secondarrow"),
    thirdArrow = document.getElementById("thirdarrow"),
    title = document.getElementById("title");


icons.onclick = function(){
    navLinks.classList.toggle("active");
    closeBtn.classList.toggle("yes");
    menuBtn.classList.toggle("no");
    title.classList.toggle("blur");
    
}

product.onclick = function(){

    productSub.classList.toggle("up");
    companySub.classList.remove("up");
    connectSub.classList.remove("up");
    firstArrow.classList.toggle("rotate");
    secondArrow.classList.remove("rotate");
    thirdArrow.classList.remove("rotate");
    

}
company.onclick = function(){
    
    companySub.classList.toggle("up");
    connectSub.classList.remove("up");
    productSub.classList.remove("up");
    secondArrow.classList.toggle("rotate");
    firstArrow.classList.remove("rotate");
    thirdArrow.classList.remove("rotate");
}
connect.onclick = function(){
    
    connectSub.classList.toggle("up");
    productSub.classList.remove("up");
    companySub.classList.remove("up");
    firstArrow.classList.remove("rotate");
    secondArrow.classList.remove("rotate");
    thirdArrow.classList.toggle("rotate");
    
}