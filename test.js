// var div=document.getElementById("plus")
// div.addEventListener('click',function(){
// console.log("youssef")
// }

 var div = document.getElementsByClassName("quantity-btn plus-btn" )
 var nav=document. getElementsByClassName("but")
 var min=document.getElementsByClassName( "cprixinnerHTML ")
 var prix=document.getElementById("cart-total-amount")
 var soum=document.getElementsByClassName( "item-price")
 for (var i=0 ;i<div.length;i++ ){
  const btn =div[i]
  const tnn =min[i]
  const nnt =nav[i]
  const mmt =soum[i]
 btn.onclick=function(){

 
   console.log(nnt )
   nnt.innerHTML=parseInt(nnt.innerHTML)  +1
    
   prix.innerHTML= parseInt(prix.innerHTML)  + parseInt(mmt.innerHTML  ) 

  } 

tnn.onclick=function(){

  if (parseInt(nnt.innerHTML)===0 || parseInt(nnt.innerHTML)<0){
    alert("   ")
   
}
  else{
   nnt.innerHTML=parseInt(nnt.innerHTML)-1
   prix.innerHTML= parseInt(prix.innerHTML)  -parseInt(mmt.innerHTML ) 
  }
  console.log("k")
  
 }
}
  






 