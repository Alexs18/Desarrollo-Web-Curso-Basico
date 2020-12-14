    function Nodos()
  {

    var Principal = document.childNodes[1];
    var Secundario = Principal.firstChild;
    var Terciario = Principal.lastChild;

    alert("El nodo Principal es:  " + Principal.nodeName );
    Principal.childNodes.forEach(
      element => alert("Los hijos del Nodo principal son: " +element.nodeName));

    alert("El Primer hijo es:" +Secundario.nodeName);
    Secundario.childNodes.forEach(
      element => alert("Los Hijos de: "+ Secundario.nodeName+  "  son:" + element.nodeName));

    alert("El segundo hijo es: " + Terciario.nodeName);
    Terciario.childNodes.forEach(
      element => alert("Los hijos de: " + Terciario.nodeName+ "   son: " + element.nodeName)
    );
  }

  function Creacion ()
  {
    var Nod = document.getElementById("Agregar");
    var Crear = document.createElement("p");
    Crear.setAttribute("class", "NuevoNodo")
    var contenido = document.createTextNode("Nodo Agregado correctamente");


    Crear.appendChild(contenido);
    Nod.appendChild(Crear);

  }
  function Eliminacion ()
  {
    var Nod = document.getElementById("Agregar");
    Nod.parentNode.removeChild(Nod);

   

  }


    

    


