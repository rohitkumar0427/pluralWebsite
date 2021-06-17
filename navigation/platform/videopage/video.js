


let mosv=document.getElementById("mov")
mosv.addEventListener('mouseover',function(){
   
    mosv.style.backgroundColor="rgb(59, 59, 59)"
})
mosv.addEventListener('mouseleave',function(){
   
    mosv.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
let mosv1=document.getElementById("mov1")
mosv1.addEventListener('mouseover',function(){
   
    mosv1.style.backgroundColor="rgb(59, 59, 59)"
})
mosv1.addEventListener('mouseleave',function(){
   
    mosv1.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
let mosv2=document.getElementById("mov3")
mosv2.addEventListener('mouseover',function(){
   
    mosv2.style.backgroundColor="rgb(59, 59, 59)"
})
mosv2.addEventListener('mouseleave',function(){
   
    mosv2.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
let mosv3=document.getElementById("mov4")
mosv3.addEventListener('mouseover',function(){
   
    mosv3.style.backgroundColor="rgb(59, 59, 59)"
})
mosv3.addEventListener('mouseleave',function(){
   
    mosv3.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
let mosv4=document.getElementById("mov5")
mosv4.addEventListener('mouseover',function(){
   
    mosv4.style.backgroundColor="rgb(59, 59, 59)"
})
mosv4.addEventListener('mouseleave',function(){
   
    mosv4.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
let mosv5=document.getElementById("mov6")
mosv5.addEventListener('mouseover',function(){
   
    mosv5.style.backgroundColor="rgb(59, 59, 59)"
})
mosv5.addEventListener('mouseleave',function(){
   
    mosv5.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
let mosv6=document.getElementById("mov7")
mosv6.addEventListener('mouseover',function(){
   
    mosv6.style.backgroundColor="rgb(59, 59, 59)"
})
mosv6.addEventListener('mouseleave',function(){
   
    mosv6.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})

let a1=true;
let a2=true;
let a3=true;
let a4=true;
let a5=true;
let a6=true;
let a7=true;
function ad1(){


  if(a1==true){
      a1=false
  let x=document.getElementById("addinfo1");
  x.innerHTML=`   <div id="in1" class="csss">
  <div class="pl">&#9654</div>
  <div class="i" onclick="first()">Introduction</div>
  <div>1m 15s</div>
</div>
<div id="in12" class="csss" >
<div class="pl">&#9654</div>
<div class="i">creating Your App with intellij</div>
<div>6m 15s</div>
</div>
<div id="in13" class="csss">
<div class="pl">&#9654</div>
<div class="i">Running from the command li..</div>
<div>3m 45s</div>
</div> 
<div id="in14" class="csss">
<div class="pl">&#9654</div>
<div class="i">Comments</div>
<div>2m 34s</div>
</div>`
let sv=document.getElementById("in1")
sv.addEventListener('mouseover',function(){
   
    sv.style.backgroundColor="#000"
})
sv.addEventListener('mouseleave',function(){
   
   sv.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})

let sv1=document.getElementById("in12")
sv1.addEventListener('mouseover',function(){
   
    sv1.style.backgroundColor="#000"
})
sv1.addEventListener('mouseleave',function(){
   
   sv1.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})

let sv2=document.getElementById("in13")
sv2.addEventListener('mouseover',function(){
   
    sv2.style.backgroundColor="#000"
})
sv2.addEventListener('mouseleave',function(){
   
   sv2.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
let sv3=document.getElementById("in13")
sv3.addEventListener('mouseover',function(){
   
    sv3.style.backgroundColor="#000"
})
sv3.addEventListener('mouseleave',function(){
   
   sv3.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
let sv4=document.getElementById("in14")
sv4.addEventListener('mouseover',function(){
   
    sv4.style.backgroundColor="#000"
})
sv4.addEventListener('mouseleave',function(){
   
   sv4.style.backgroundColor="rgba(30, 36, 41, 0.9)"
})
  }
  else{
      a1=true
    let x=document.getElementById("addinfo1"); 
    x.innerHTML=null
  }


}

function ad2(){

    if(a2==true){
        a2=false
    let x1=document.getElementById("addinfo2");
    x1.innerHTML=`   <div id="in2" class="csss">
    <div class="pl">&#9654</div>
    <div class="i">Intruduction</div>
    <div>1m 22s</div>
  </div>
  <div id="in22" class="csss">
  <div class="pl">&#9654</div>
  <div class="i" onclick="othervideo1()">Variables</div>
  <div>3m 56s</div>
  </div>
  <div id="in23" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Primitive Types Are Stored by..</div>
  <div>1m 44s</div>
  </div> 
  <div id="in24" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Arithmetic Operators</div>
  <div>3m 25s</div>
  </div>`
  let sv11=document.getElementById("in2")
  sv11.addEventListener('mouseover',function(){
     
      sv11.style.backgroundColor="#000"
  })
  sv11.addEventListener('mouseleave',function(){
     
     sv11.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let sv12=document.getElementById("in22")
  sv12.addEventListener('mouseover',function(){
     
      sv12.style.backgroundColor="#000"
  })
  sv12.addEventListener('mouseleave',function(){
     
     sv12.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let sv22=document.getElementById("in23")
  sv22.addEventListener('mouseover',function(){
     
      sv22.style.backgroundColor="#000"
  })
  sv22.addEventListener('mouseleave',function(){
     
     sv22.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  let sv33=document.getElementById("in23")
  sv33.addEventListener('mouseover',function(){
     
      sv33.style.backgroundColor="#000"
  })
  sv33.addEventListener('mouseleave',function(){
     
     sv33.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  let sv34=document.getElementById("in24")
  sv34.addEventListener('mouseover',function(){
     
      sv34.style.backgroundColor="#000"
  })
  sv34.addEventListener('mouseleave',function(){
     
     sv34.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
    }
    else{
        a2=true
      let x1=document.getElementById("addinfo2"); 
      x1.innerHTML=null
    }
}


function ad3(){

    if(a3==true){
        a3=false
    let x3=document.getElementById("addinfo3");
    x3.innerHTML=`   <div id="in31" class="csss">
    <div class="pl">&#9654</div>
    <div class="i">Intruduction</div>
    <div>1m 22s</div>
  </div>
  <div id="in32" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">If-else statement</div>
  <div>3m 56s</div>
  </div>
  <div id="in33" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">logical operator</div>
  <div>1m 44s</div>
  </div> 
  <div id="in34" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Block statements</div>
  <div>3m 25s</div>
  </div>`
  let v1=document.getElementById("in31")
  v1.addEventListener('mouseover',function(){
     
      v1.style.backgroundColor="#000"
  })
  v1.addEventListener('mouseleave',function(){
     
     v1.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v2=document.getElementById("in32")
  v2.addEventListener('mouseover',function(){
     
      v2.style.backgroundColor="#000"
  })
  v2.addEventListener('mouseleave',function(){
     
     v2.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v3=document.getElementById("in33")
  v3.addEventListener('mouseover',function(){
     
      v3.style.backgroundColor="#000"
  })
  v3.addEventListener('mouseleave',function(){
     
     v3.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  let v4=document.getElementById("in34")
  v4.addEventListener('mouseover',function(){
     
      v4.style.backgroundColor="#000"
  })
  v4.addEventListener('mouseleave',function(){
     
     v4.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
    }
    else{
        a3=true
      let x3=document.getElementById("addinfo3"); 
      x3.innerHTML=null
    }
}

function ad4(){

    if(a4==true){
        a4=false
    let x4=document.getElementById("addinfo4");
    x4.innerHTML=`   <div id="in41" class="csss">
    <div class="pl">&#9654</div>
    <div class="i">Intruduction</div>
    <div>1m 22s</div>
  </div>
  <div id="in42" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">While loops</div>
  <div>3m 56s</div>
  </div>
  <div id="in43" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Do-WHile Loop</div>
  <div>1m 44s</div>
  </div> 
  <div id="in44" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">For loops</div>
  <div>3m 25s</div>
  </div>`
  let v2=document.getElementById("in41")
  v2.addEventListener('mouseover',function(){
     
      v2.style.backgroundColor="#000"
  })
  v2.addEventListener('mouseleave',function(){
     
     v2.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v21=document.getElementById("in42")
  v21.addEventListener('mouseover',function(){
     
      v21.style.backgroundColor="#000"
  })
  v21.addEventListener('mouseleave',function(){
     
     v21.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v23=document.getElementById("in43")
  v23.addEventListener('mouseover',function(){
     
      v23.style.backgroundColor="#000"
  })
  v23.addEventListener('mouseleave',function(){
     
     v23.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  let v24=document.getElementById("in44")
  v24.addEventListener('mouseover',function(){
     
      v24.style.backgroundColor="#000"
  })
  v24.addEventListener('mouseleave',function(){
     
     v24.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
    }
    else{
        a4=true
      let x4=document.getElementById("addinfo4"); 
      x4.innerHTML=null
    }
}


function ad5(){

    if(a5==true){
        a5=false
    let x5=document.getElementById("addinfo5");
    x5.innerHTML=`   <div id="in51" class="csss">
    <div class="pl">&#9654</div>
    <div class="i">Intruduction</div>
    <div>1m 22s</div>
  </div>
  <div id="in52" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Parameters</div>
  <div>3m 56s</div>
  </div>
  <div id="in53" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Exciting Method</div>
  <div>1m 44s</div>
  </div> 
  <div id="in54" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Summanry</div>
  <div>3m 25s</div>
  </div>`
  let v3=document.getElementById("in51")
  v3.addEventListener('mouseover',function(){
     
      v3.style.backgroundColor="#000"
  })
  v3.addEventListener('mouseleave',function(){
     
     v3.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v31=document.getElementById("in52")
  v31.addEventListener('mouseover',function(){
     
      v31.style.backgroundColor="#000"
  })
  v31.addEventListener('mouseleave',function(){
     
     v31.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v33=document.getElementById("in53")
  v33.addEventListener('mouseover',function(){
     
      v33.style.backgroundColor="#000"
  })
  v33.addEventListener('mouseleave',function(){
     
     v33.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  let v34=document.getElementById("in54")
  v34.addEventListener('mouseover',function(){
     
      v34.style.backgroundColor="#000"
  })
  v34.addEventListener('mouseleave',function(){
     
     v34.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
    }
    else{
        a5=true
      let x5=document.getElementById("addinfo5"); 
      x5.innerHTML=null
    }
}


function ad6(){

    if(a6==true){
        a6=false
    let x6=document.getElementById("addinfo6");
    x6.innerHTML=`   <div id="in61" class="csss">
    <div class="pl">&#9654</div>
    <div class="i">Intruduction</div>
    <div>1m 22s</div>
  </div>
  <div id="in62" class="csss">
  <div class="pl">&#9654</div>
  <div class="i" onclick="othervideo()">String class</div>
  <div>3m 56s</div>
  </div>
  <div id="in63" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">StringBuilder</div>
  <div>1m 44s</div>
  </div> 
  <div id="in64" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Summanry</div>
  <div>3m 25s</div>
  </div>`
  let v4=document.getElementById("in61")
  v4.addEventListener('mouseover',function(){
     
      v4.style.backgroundColor="#000"
  })
  v4.addEventListener('mouseleave',function(){
     
     v4.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v41=document.getElementById("in62")
  v41.addEventListener('mouseover',function(){
     
      v41.style.backgroundColor="#000"
  })
  v41.addEventListener('mouseleave',function(){
     
     v41.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v43=document.getElementById("in63")
  v43.addEventListener('mouseover',function(){
     
      v43.style.backgroundColor="#000"
  })
  v43.addEventListener('mouseleave',function(){
     
     v43.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  let v44=document.getElementById("in64")
  v44.addEventListener('mouseover',function(){
     
      v44.style.backgroundColor="#000"
  })
  v44.addEventListener('mouseleave',function(){
     
     v44.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
    }
    else{
        a6=true
      let x6=document.getElementById("addinfo6"); 
      x6.innerHTML=null
    }
}


function ad7(){

    if(a7==true){
        a7=false
    let x7=document.getElementById("addinfo7");
    x7.innerHTML=`   <div id="in71" class="csss">
    <div class="pl">&#9654</div>
    <div class="i">Intruduction</div>
    <div>1m 22s</div>
  </div>
  <div id="in72" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Parts of a Format specifier</div>
  <div>3m 56s</div>
  </div>
  <div id="in73" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Argument Index</div>
  <div>1m 44s</div>
  </div> 
  <div id="in74" class="csss">
  <div class="pl">&#9654</div>
  <div class="i">Summanry</div>
  <div>3m 25s</div>
  </div>`
  let v5=document.getElementById("in71")
  v5.addEventListener('mouseover',function(){
     
      v5.style.backgroundColor="#000"
  })
  v5.addEventListener('mouseleave',function(){
     
     v5.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v51=document.getElementById("in72")
  v51.addEventListener('mouseover',function(){
     
      v51.style.backgroundColor="#000"
  })
  v51.addEventListener('mouseleave',function(){
     
     v51.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  
  let v53=document.getElementById("in73")
  v53.addEventListener('mouseover',function(){
     
      v53.style.backgroundColor="#000"
  })
  v53.addEventListener('mouseleave',function(){
     
     v53.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
  let v54=document.getElementById("in74")
  v54.addEventListener('mouseover',function(){
     
      v54.style.backgroundColor="#000"
  })
  v54.addEventListener('mouseleave',function(){
     
     v54.style.backgroundColor="rgba(30, 36, 41, 0.9)"
  })
    }
    else{
        a7=true
      let x7=document.getElementById("addinfo7"); 
      x7.innerHTML=null
    }
}



function note(){
    let d=document.getElementById("info");
    let brc=document.getElementById("n");
    let abrc=document.getElementById("t")
    brc.style.borderBottom="3px solid rgb(0, 116, 171)"
    abrc.style.borderBottom="none"
    d.innerHTML=`<div class="ntdata"><a href="datanotes1.html">1. Data types and variable</a></div>
    <div class="ntdata"><a href="datanotes2.html">2. Conditional Statements</a></div>
    <div class="ntdata"><a href="datanotes3.html">3. Javascript Operators</a></div>`
}




function tablec(){
    let d=document.getElementById("info");
    let brc=document.getElementById("n");
    let abrc=document.getElementById("t")
    brc.style.borderBottom="none"
    abrc.style.borderBottom="3px solid rgb(0, 116, 171)"
    let tes=document.getElementById("info")
    tes.innerHTML=` <div class="infohead" onclick="ad1()" >
    <div class="headinfo" id="mov">
        <div class="num">1</div>
        <div class="hp">
            <h4 style="font-size: 16px;font-weight: 600;color: #fffffff2;">Creating your first java App</h4>
            <p style="font-size: 12px;color: #ffffffb3;">1m 16s</p>
        </div>

    </div>
    <div id="addinfo1">
   
    </div>
   </div>
     <div class="infohead" onclick="ad2()" >
         <div class="headinfo" id="mov1">
             <div class="num">2</div>
             <div class="hp">
                 <h4 style="font-size: 16px;font-weight: 600;color: #fffffff2;">Variables, Data Types, and Math Operators</h4>
                 <p style="font-size: 12px;color: #ffffffb3;">39m 21s</p>
             </div>

         </div>
         <div id="addinfo2">
        
         </div>
        </div>
        <div class="infohead" onclick="ad3()" >
            <div class="headinfo" id="mov3">
                <div class="num">3</div>
                <div class="hp">
                    <h4 style="font-size: 16px;font-weight: 600;color: #fffffff2;">Conditional Logic</h4>
                    <p style="font-size: 12px;color: #ffffffb3;">3m 57s</p>
                </div>

            </div>
            <div id="addinfo3">
           
            </div>
           </div>

           <div class="infohead" onclick="ad4()" >
            <div class="headinfo" id="mov4">
                <div class="num">4</div>
                <div class="hp">
                    <h4 style="font-size: 16px;font-weight: 600;color: #fffffff2;">Looping and Arrays</h4>
                    <p style="font-size: 12px;color: #ffffffb3;">30m 32s</p>
                </div>

            </div>
            <div id="addinfo4">
           
            </div>
           </div>
    
           <div class="infohead" onclick="ad5()">
            <div class="headinfo" id="mov5">
                <div class="num">5</div>
                <div class="hp">
                    <h4 style="font-size: 16px;font-weight: 600;color: #fffffff2;">Understanding Methods</h4>
                    <p style="font-size: 12px;color: #ffffffb3;">36m 0s</p>
                </div>

            </div>
            <div id="addinfo5">
           
            </div>
           </div>
 
           <div class="infohead" onclick="ad6()">
            <div class="headinfo" id="mov6">
                <div class="num">6</div>
                <div class="hp">
                    <h4 style="font-size: 16px;font-weight: 600;color: #fffffff2;">Working with Strings</h4>
                    <p style="font-size: 12px;color: #ffffffb3;">39m 38s</p>
                </div>

            </div>
            <div id="addinfo6">
           
            </div>
           </div>

           <div class="infohead" onclick="ad7()">
            <div class="headinfo" id="mov7">
                <div class="num">7</div>
                <div class="hp">
                    <h4 style="font-size: 16px;font-weight: 600;color: #fffffff2;">String Formatting</h4>
                    <p style="font-size: 12px;color: #ffffffb3;">29m 38s</p>
                </div>

            </div>
            <div id="addinfo7">
           
            </div>
           </div>`
}

let vip=document.getElementById("videos")
function othervideo1(){
    console.log("yes")
vip.innerHTML=`  <video width="1500" height="930" controls>
<source src="../../../videos/variable.mp4" type="video/mp4">


</video>`



}

function first(){
    vip.innerHTML=` <video width="1500" height="930" controls>
    <source src="../../../videos/javaintro.mp4" type="video/mp4">
    
    
    </video>
</div>`
}