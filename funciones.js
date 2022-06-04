function agrega(nlista, nombre, grupos, fecha, comentario ){
    let datos=document.getElementById("datos");
    let sfecha=fecha.trim()
    sfecha=sfecha.slice(8, 10)+"/"+sfecha.slice(5, 7)+"/"+sfecha.slice(0, 4);

    datos.innerHTML+=`<tr>  <td id="nu">${nlista}</td> <td>${nombre}</td> <td>${grupos}</td> <td>${sfecha}</td> <td>${comentario}</td> 
    <td> <input type="button" value="Eliminar" name="eliminar" id="eliminar"> 
     <input type="button" value="Modificar" name="modificar" id="modificar"> </td> </tr>`
 ocultararmodal();
 }
 
 function limpia(){
     document.getElementById("alumnos").reset();
     document.getElementById("nombre").focus();
 }
 
 function eliminar(elem){
     if(elem.name==="eliminar"){
        elem.parentElement.parentElement.remove();
     
    mensaje("Registro Eliminado");
    reordenar();
 }

 function reordenar(){

let lista=document.querySelectorAll("#nu");
nlista=0;
for(ele of lista){
    nlista++;
    ele.innerHTML=nlista;
}
 }

 }
 
 function modificar(elem){
     if(elem.name==="modificar"){
         mostrarmodal();
         document.getElementById("guardar").value="Actualizar";
         seleccion=elem.parentElement.parentElement;
         document.getElementById("nombre").value=seleccion.cells[1].innerHTML;
         document.getElementById("grupos").value=seleccion.cells[2].innerHTML; 
         let sf=seleccion.cells[3].innerHTML;
         sf=sf.trim()
         sf=sf.slice(6, 10)+"-"+sf.slice(3, 5)+"-"+sf.slice(0, 2);
         document.getElementById("fecha").value=sf; 
         doocument.getElementById("comentari").value=seleccion.cells[4].innerHTML;
         
 
     }
 }
 
 function actualiza(nombre, grupos, fecha, comentario){
    
     seleccion.cells[1].innerHTML=nombre; 
     seleccion.cells[2].innerHTML=grupos; 
     sfecha=fecha.trim()
    sfecha=sfecha.slice(8, 10)+"/"+sfecha.slice(5, 7)+"/"+sfecha.slice(0, 4);
     seleccion.cells[3].innerHTML=sfecha;
     seleccion=null; 
     seleccion.cells[4].innerHTML=comentario;
     mensaje("Registro Actualizado");
     document.getElementById("guardar").value="Agregar";
     ocultararmodal();
 }

 function mensaje(me){
     document.getElementById("mensaje").innerHTML=me;
     setTimeout(()=>{
         document.getElementById("mensaje").innerHTML="";
     }, 3000);
 }

function mostrarmodal(){
    modal.style.display="block";
}
function ocultararmodal(){
    modal.style.display="none";
}