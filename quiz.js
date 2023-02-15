const btnGenerar = document.querySelector('#btnGenerar');
const lacapa = document.querySelector('#lacapa')
const parrafo1 = document.createElement('p')
const parrafo2 = document.createElement('p')
const parrafo3 = document.createElement('p')
const parrafo4 = document.createElement('p')
let arreglo = ["¿Cuantos lados tiene un arreglo?","¿cuantos lenguajes de programacion existen?","¿cual es la distancia entre la tierra y el sol?","¿Como Murio el caballo de simon bolivar?"];

btnGenerar.addEventListener('click', () => 

{
    
     parrafo1.textContent = arreglo[0];
     parrafo2.textContent = arreglo[1];
     parrafo3.textContent = arreglo[2];
     parrafo4.textContent = arreglo[3];
    
     mezclarPreguntas();
     
     
     lacapa.appendChild(parrafo1)
     lacapa.appendChild(parrafo2)
     lacapa.appendChild(parrafo3)
     lacapa.appendChild(parrafo4)

     parrafo1.setAttribute('style','background-color:green;')
     parrafo2.setAttribute('style','background-color:green;')
     parrafo3.setAttribute('style','background-color:green;')
     parrafo4.setAttribute('style','background-color:green;')
    
})



const mezclarPreguntas = () => 
{

arreglo.sort(() => Math.random() - 0.5);

return arreglo
}