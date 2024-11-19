const Gparent=document.getElementById("grand")
Gparent.addEventListener("click",()=>{
    setTimeout(()=>{
    console.log("bubble grand parent clicked");
    Gparent.style.backgroundColor="red"
    Gparent.style.borderRadius="20%"
},2000)
})

const parent=document.getElementById("parent")
parent.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("bubble parent clicked");
        parent.style.backgroundColor="blue"
        parent.style.borderRadius="20%"
    },3000)    
    })

const child=document.getElementById("child")
child.addEventListener("click",()=>{
    setTimeout(()=>{
         console.log("bubble child clicked");
         child.style.backgroundColor="orange"
         child.style.borderRadius="20%"
    },4000)
   
})

const trickleG=document.getElementById("trickleG")
trickleG.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("Trickle Grand Parent clicked");
        trickleG.style.backgroundColor="pink"
        trickleG.style.borderRadius="20%"
   },1000)
},true)

const trickleP=document.getElementById("trickleP")
trickleP.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("Trickle parent clicked");
        trickleP.style.backgroundColor="green"
        trickleP.style.borderRadius="20%"
   },2000)
},true)

const trickleC=document.getElementById("trickleC")
trickleC.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("Trickle child clicked");
        trickleC.style.backgroundColor="yellow"
        trickleC.style.borderRadius="20%"
   },3000)
},true)

const trickleGpropagation=document.getElementById("trickleGpropagation")
trickleGpropagation.addEventListener("click",()=>{
        console.log("Trickle Grand Parent clicked");
        trickleGpropagation.style.backgroundColor="orange"
        trickleGpropagation.style.borderRadius="20%"

},true)

const tricklePpropagation=document.getElementById("tricklePpropagation")
tricklePpropagation.addEventListener("click",(e)=>{
        e.stopPropagation()
        console.log("Trickle parent clicked");
        tricklePpropagation.style.backgroundColor="purple"
        tricklePpropagation.style.borderRadius="20%"
},false)

const trickleCpropagation=document.getElementById("trickleCpropagation")
trickleCpropagation.addEventListener("click",()=>{
        console.log("Trickle child clicked");
        trickleCpropagation.style.backgroundColor="lavender"
        trickleCpropagation.style.borderRadius="20%"
   
},false)