

function addvt(){


    let y=document.getElementById('addon');
        y.innerHTML=` <div class="info">
                  <div class="cccol">VAT ID (optional)</div>
                  <input type="text" id="va"/>
              </div>`
            
        }
let arr=JSON.parse(localStorage.getItem('userinformation'))
function enter(){
    let clear=0;
    let fname=document.getElementById('firstname').value;
    let lname=document.getElementById('lastname').value;
    let email=document.getElementById('email').value;
    let cemail=document.getElementById('cemail').value;
    let con=document.getElementById('country').value;
 
    if(fname==""){
        let x=document.getElementById('firstname');
        x.style.border="1px solid red"
        clear++;
    }else{
        let x=document.getElementById('firstname');
        x.style.border="none"
  
    }

    if(lname==""){
        let x=document.getElementById('lastname');
        x.style.border="1px solid red"
        clear++;
    }else{
        let x=document.getElementById('lastname');
        x.style.border="none"
       

    }

    if(email==""){
        let x=document.getElementById('email');
        x.style.border="1px solid red"
        clear++;
    }else{
        let x=document.getElementById('email');
        x.style.border="none"

    }

    if(cemail==""){
        let x=document.getElementById('cemail');
        x.style.border="1px solid red"
        clear++;
    }else{
          
        let x=document.getElementById('cemail');
        x.style.border="none"
       
        
    }
    if(con=="s"){
        let x=document.getElementById('country');
        x.style.border="1px solid red"
        clear++;
    }
    else{
        let x=document.getElementById('country');
        x.style.border="none";
    

    }

    if(email!="" && email!=cemail){
           let z=document.getElementById('emaddon');
            z.innerHTML='Email does not match'
            clear++;
        }
        else{
            let z=document.getElementById('emaddon');
            z.innerHTML=null

        }
     if(clear==0){
     window.location.href="../../index.html"

     }


    }