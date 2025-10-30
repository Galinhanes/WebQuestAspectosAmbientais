let barril=document.getElementById("barril")
let uvas1=document.getElementById("uvas1")
let uvas2=document.getElementById("uvas2")


function desaparecerbarril(){barril.style.display=("none")}
function desapareceruvas1(){uvas1.style.display=("none")}
function desapareceruvas2(){uvas2.style.display=("none")}

barril.addEventListener("click",function(){
    barril.style.opacity=("0%");
    setTimeout(desaparecerbarril,3000,this.style)
})
uvas1.addEventListener("click",function(){
    uvas1.style.opacity=("0%");
    setTimeout(desapareceruvas1,3000,this.style)
})
uvas2.addEventListener("click",function(){
    uvas2.style.opacity=("0%");
    setTimeout(desapareceruvas2,3000,this.style)
})

function calcularTotal() {
            let suma = 0;
            
            // Selecciona TODOS los botones de radio en el documento
            const radioButtons = document.querySelectorAll('input[type="radio"]');
            
            // Itera sobre cada botón de radio
            radioButtons.forEach(radio => {
                // Si el botón está SELECCIONADO:
                if (radio.checked) {
                    // Obtiene el valor (que es la puntuación: 1, 0.5 o 0)
                    // parseFloat() convierte el valor de texto a un número decimal
                    const valor = parseFloat(radio.value);
                    suma += valor;
                }
            });
            
            // El máximo de puntos es 10 (10 criterios * 1 punto)
            const maxPuntos = 10; 
            
            // Muestra el resultado en el elemento con el ID 'totalSuma'
            const resultadoFormateado = `${suma.toFixed(2)} / ${maxPuntos.toFixed(2)}`;
            document.getElementById('totalSuma').textContent = resultadoFormateado;
        }

        // Ejecuta el cálculo al cargar la página para mostrar el 0.00 inicial
        document.addEventListener('DOMContentLoaded', calcularTotal);