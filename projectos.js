const projectosString='Proyectos';
const proyectosEl= document.getElementById('proyectos');
proyectosEl.classList.add('proyectos');
function separarLetras(){
    projectosString.split('').forEach((letra, i) => {
        proyectosEl.innerHTML += `<div class="letter">${letra}</div>`;
    })
}
separarLetras();