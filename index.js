let seleccion=null;
let nlista=0;
let bagrega=document.getElementById("btnAgrega");
let modal=document.getElementById("modal");
document.getElementById("alumnos").addEventListener("submit",function(e){
    e.preventDefault();
    
    
    let nombre=document.getElementById("nombre").value;
    let grupos=document.getElementById("grupos").value;
    let fecha=document.getElementById("fecha").value;
    let comentario=document.getElementById("comentari").value;
    

    
    if(seleccion==null){
        nlista++;
        agrega(nlista, nombre, grupos, fecha, comentario);
    }else{
        actualiza(nombre, grupos, fecha, comentario);
    }
    
    
    limpia();


    })

    document.getElementById("datos").addEventListener("click", function(e){
    e.preventDefault;
        eliminar(e.target);
        modificar(e.target);
    })

    function cont(contador){
document.getElementById("guardar").innerHTML= ++contador;
    }

    bagrega.addEventListener("click", ()=>{
        mostrarmodal();
    })