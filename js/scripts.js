function convertir(){
  let valor=parseFloat(document.getElementById("Cantidad").value);
  document.getElementById("valor").innerHTML=valor;

  let de = document.getElementById("de").value;
  let a = document.getElementById("a").value;
  
  var dolar = 210.00;
  var euro = 0.82;
  resultado=0;

  // peso a dolar
  if(de==1&&a==2){
    resultado=valor/dolar;
  }
  //peso a euro
  else if(de==1&&a==3){
    resultado=valor/euro;
  }
  //dolar a peso
  else if(de==2&&a==1){
    resultado=valor*dolar;
  }
  //dolar a euro
  else if(de==2&&a==3){
    resultado=valor*(dolar/euro);
  }
  //euro a peso
  else if(de==3&&a==1){
    resultado=valor*euro;
  }
  //euro a dolar
  else if(de==3&&a==2){
    resultado=valor*(euro/dolar);
  }
  else{
    resultado=valor;
  }

  document.getElementById("resultado").innerHTML="Resultado: $"+resultado.toFixed(2);



}