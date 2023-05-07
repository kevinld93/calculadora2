function calcular(){
     
    let imp;
   let imp2;
   let impuesto;
   let excedente;
   let total;
  
    let x =parseInt(document.getElementById("precio").value);
    imp=((x*0.75)+x); 
    document.getElementById("impuesto").innerHTML ="$"+ imp;
 
 let producto =parseInt(document.getElementById("producto").value);
imp2=(imp*producto);
 if(producto<50)  {
 document.getElementById("total").innerHTML ="$"+ imp2;}
 
 if (producto>50) {
impuesto=((producto-50)/2) 
 document.getElementById("impuesto4").innerHTML = "$"+impuesto;
 excedente=(impuesto*x);
 total=((imp*producto)+excedente);

 document.getElementById("total").innerHTML = "$"+total;
}
}

function borrar(){
    document.getElementById("impuesto").innerHTML = ""
    document.getElementById("total").innerHTML ="";
    document.getElementById("impuesto4").innerHTML = "";
    

}