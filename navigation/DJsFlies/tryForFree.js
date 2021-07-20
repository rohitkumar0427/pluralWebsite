let r=true;
    
function changee(){
  
  console.log(r)
    let c=document.getElementById("ch1");
    let d=document.getElementById("ch2");
  
  if(r==true){
     
      r=false
     
      c.innerHTML=`then ₹ 682.10/month, billed annually (₹ 8185.48)`
            
      d.innerHTML=`then ₹ 1020.98/month, billed annually (₹ 12252.26)`

  }
  else{
 
     r=true
      c.innerHTML=`then ₹ 1,499.00/month, billed monthly`;
    d.innerHTML=`then ₹ 2,299.00/month, billed monthly`;
  

  }  
  

}
let on1=true
let on2=true
let on3=true
let on4=true
let on5=true
function addcon(){
let p=document.getElementById('addp')
 let p1=document.createElement('p')
 p1.setAttribute('id','closep1')
if(on1==true){
    on1=false


p1.innerHTML=`Yes, you can cancel your subscription at any time. Your subscription will auto-renew until you cancel, but why would you want to?`
p.append(p1)
}
else{
 let z=document.getElementById("closep1")
 on1=true;
 z.remove()
}
}
function addcon1(){
let p=document.getElementById('addp1')
 let p1=document.createElement('p')
 p1.setAttribute('id','closep2')
if(on2==true){
    on2=false


p1.innerHTML=`No, we won't charge you at this time. However, there is a $1 USD hold that is immediately released. You may see a charge of $1 on your account, but it will be reversed. After your trial ends, we'll use this information to create your account, so you can continue to build new skills with uninterrupted access to our platform.`
p.append(p1)
}
else{
 let z=document.getElementById("closep2")
 on2=true;
 z.remove()
}
}
function addcon2(){
let p=document.getElementById('addp2')
 let p1=document.createElement('p')
 p1.setAttribute('id','closep3')
if(on3==true){
    on3=false


p1.innerHTML=`Businesses of all sizes - from small shops to large enterprises - purchase these plans, with other tools to effectively grow and measure skills and track progress. In addition to all the features that come with personal plans, business plans include easy group management, in-depth reporting on usage and skills growth, SSO and more.`
p.append(p1)
}
else{
 let z=document.getElementById("closep3")
 on3=true;
 z.remove()
}
}
function addcon3(){
let p=document.getElementById('addp3')
 let p1=document.createElement('p')
 p1.setAttribute('id','closep4')
if(on4==true){
    on4=false


p1.innerHTML=`It's simple. When you sign up, you'll immediately have unlimited viewing of thousands of expert courses, paths to guide your learning, tools to measure your skills and hands-on resources like exercise files. There’s no limit on what you can learn and you can cancel at any time.`
p.append(p1)
}
else{
 let z=document.getElementById("closep4")
 on4=true;
 z.remove()
}
}
function addcon4(){
let p=document.getElementById('addp4')
 let p1=document.createElement('p')
 p1.setAttribute('id','closep5')
if(on5==true){
    on5=false


p1.innerHTML=`When you sign up for a trial, you will receive 10 days or 200 minutes of viewing -- whichever comes first. If you trial is not canceled within the 10 days, the trial will convert to a paid subscription that will auto-renew until the subscription is canceled.`
p.append(p1)
}
else{
 let z=document.getElementById("closep5")
 on5=true;
 z.remove()
}
}



var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
showSlides(slideIndex += n);
}


function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";

}
