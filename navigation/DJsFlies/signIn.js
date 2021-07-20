

document.getElementById("forg").addEventListener("mouseover",function(){
    let x=document.getElementById("forg");
    x.style.textDecoration="underline";
    x.style.color="#005685"
})
document.getElementById("forg").addEventListener("mouseleave",function(){
    let x=document.getElementById("forg");
    x.style.textDecoration="none"
    x.style.color="#2ea0d6"
})

document.getElementById("signw").addEventListener("mouseover",function(){
    let x=document.getElementById("signw");
    x.style.textDecoration="underline";
    x.style.color="#005685"
})
document.getElementById("signw").addEventListener("mouseleave",function(){
    let x=document.getElementById("signw");
    x.style.textDecoration="none"
    x.style.color="#2ea0d6"
})



let userin=[
    {
        email:"suresh@gmail.com",
        password:"suresh123"
    },
    {
        email:"dhruva@gmail.com",
        password:"dhruva123"
    },
    {email:"rohit@gmail.com",
    password:"rohit123"
    }
]

localStorage.setItem('userinformation',JSON.stringify(userin))


function signin(){


let k=0;
let arr=JSON.parse(localStorage.getItem("userinformation"));
let em=document.getElementById("email").value
let pass=document.getElementById("password").value

for(let i=0;i<arr.length;i++){
   console.log(arr[i].email)
    if(arr[i].email==em && arr[i].password==pass){
     
        k++;
        
        break;
        
    }
}

if(k==0){
 let d
let a=document.getElementById("body");
let div=document.createElement('div');
div.setAttribute("id","inval")

div.innerHTML=`<div class="invaltext">Invalid username or password</div><div id="closee" class="clpa">&#x2715</div>`

a.append(div)
d=document.getElementById("closee")
d.addEventListener("click",close)
}
else{
    window.location.href="../../index.html"
}

}

function close(){
  
    let x=document.getElementById("inval");
    x.remove()
   
}
