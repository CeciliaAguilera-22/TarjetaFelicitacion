function obj(){

    document.getElementById("tarjeta").style.display='block';
    
    var titulo = document.getElementById("titulom").value;
    document.getElementById("titulo").innerHTML = titulo;
    
    var subtitulo =document.getElementById("subtitulom").value;
    document.getElementById("subtitulo").innerHTML = subtitulo;
    var autor = document.getElementById("autorm").value;
    document.getElementById("autor").innerHTML = autor;
    var mensaje = document.getElementById("mensajem").value;
    document.getElementById("mensaje").innerHTML = mensaje;
    var mensaje = document.getElementById("fecham").value;
    document.getElementById("fecha").innerHTML = mensaje;
    var i;
    var a = document.getElementsByName("a");
    var b = document.getElementsByName("b");
    var c = document.getElementsByName("color");
  
    for( i = 0; i < a.length; i++){
      if(a[i].checked){
        var e = a[i].value;
      } 
    }
  
    for( i = 0; i < b.length; i++){
      if(b[i].checked){
        var n = b[i].value;
      } 
    }
  
    for( i = 0; i < c.length; i++){
      if(c[i].checked){
        var m = c[i].value;
      } 
    }
    switch (n) {
    case 'a':
    document.getElementById("img").src="./imagenes/1.jpg";
    break;
    case 'b':
    document.getElementById("img").src="./imagenes/2.jpg";
    break;
    case 'c':
    document.getElementById("img").src="./imagenes/3.jpg";
    break;
    
      default:
        imgop='nada';
        break;
    }
  
    switch (m) {
      case 'a':
      document.getElementById("tarjeta").style.backgroundColor="rgb(245, 124, 124)";
      break;
      case 'b':
      document.getElementById("tarjeta").style.backgroundColor="rgb(132, 172, 247)";
      break;
      case 'c':
      document.getElementById("tarjeta").style.backgroundColor="rgb(178, 238, 150)";
      break;
      case 'd':
      document.getElementById("tarjeta").style.backgroundColor="rgb(245, 224, 130)";
      break;
      default:
        colorop='nada';
        break;
    }
    
  }