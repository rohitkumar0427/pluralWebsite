let r=true;
    
function changee(){
  
  console.log(r)
    let c=document.getElementById("pafirstline");
    let d=document.getElementById("pasecondline");
    let e=document.getElementById("ch");
    let f=document.getElementById("pafirstline1");
    let g=document.getElementById("pasecondline1");
    let h=document.getElementById("ch1")
  if(r==true){
     
      r=false
     
      c.innerHTML=`   <div id="changepa">
                 <h2>Standard</h2>
             </div>
             <div  class="save">
                SAVE33%
             </div>`;
      d.innerHTML=` <div>
                  <p class="crr">&#8377</p>
              </div>
              <div>
                  <p id="paprice">8184</p>
              </div>
              <div class="vis">
                <p class="disprice">&#8377 12,999</p>
            </div>`
    e.innerHTML=`per year`

    f.innerHTML=`   <div id="changepa">
                 <h2>Premium</h2>
             </div>
             <div  class="save">
                SAVE33%
             </div>`;
      g.innerHTML=` <div>
                  <p class="crr">&#8377</p>
              </div>
              <div>
                  <p id="paprice1">12252</p>
              </div>
              <div class="vis">
                <p class="disprice1">&#8377 18,399</p>
            </div>`
    h.innerHTML=`per year`
  }
  else{
 
     r=true
      c.innerHTML=` <div id="changepa">
                 <h2>Standard</h2>
             </div>`;
    d.innerHTML=`   <div>
                  <p class="crr">&#8377</p>
              </div>
              <div>
                  <p id="paprice">1,499</p>
              </div>`;
              e.innerHTML=`per month`


   f.innerHTML=` <div id="changepa">
               <h2>Premium</h2>
           </div>`;
  g.innerHTML=`<div>
                <p class="crr">&#8377</p>
            </div>
            <div>
                <p id="paprice1">2,299</p>
            </div>`;
 h.innerHTML=`per month`


  }  
  

}