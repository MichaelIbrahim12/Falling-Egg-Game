
let egg=document.querySelector(".egg1");
let fallenegg=document.querySelector(".egg2")
let basket=document.querySelector(".basket")
let container=document.querySelector(".container")
let counter=document.querySelector("h2")


let leftt=0;
addEventListener("keydown",function(event){ 
    if(event.keyCode==37){ 
        leftt+=20;
        if(basket.offsetLeft<10){
            leftt-=20;
        }
        basket.style.right=leftt+"px"
    
    }else if(event.keyCode==39){
        leftt-=20;
        if(basket.offsetLeft> 710){
            leftt+=20;
        }
        basket.style.right=leftt+"px"
    }
})

let count=0;
let movedown=function(){
    let down=0;
    let leftt=Math.floor(Math.random()*(container.clientWidth-egg.clientWidth));
    
    let id=setInterval(function(){
            fallenegg.classList.add("invisible");
            down+=10;
          
            
        if(down<(container.offsetHeight-170)){  
            egg.style.top=down+"px";
            egg.style.left=leftt+"px";
            fallenegg.style.left=leftt+"px";
            
        }else{
            
            egg.classList.add("invisible");
            clearInterval(id);
            egg.classList.add("visible"); 
            
            if(basket.offsetLeft<(egg.offsetLeft-32)){
                fallenegg.classList.remove("invisible");  
                count--;  
            }else if(egg.offsetLeft<basket.offsetLeft+8){
                fallenegg.classList.remove("invisible");
                count--;
            }
            count++;
            counter.innerHTML=`score:${count}`;
            movedown();
        }    
    },50) 

}

movedown();
