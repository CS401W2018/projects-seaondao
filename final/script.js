const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");


card1.addEventListener('mouseover',function(){
    card1.addEventListener('click',function(){
        card1.classList.add("hide");
    })    
})
card1.addEventListener('mouseleave',function(){
    card1.classList.remove("hide");
})



card2.addEventListener('mouseover',function(){
    card2.addEventListener('click',function(){
        card2.classList.add("hide");
    })    
})
card2.addEventListener('mouseleave',function(){
    card2.classList.remove("hide");
})