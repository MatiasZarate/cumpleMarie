window.addEventListener("load", function(){
    let escenaActual = 1;
    let bloquearBoton = false;
        /*window.mostrarSiguienteEscena = function() {
            document.querySelector('.escena1').style.display = 'none';
            document.querySelector('.escena2').style.display = 'block'; 
        }*/
        document.getElementById("miAudio").volume = 0.4; 
        window.mostrarSiguienteEscena = function() {
    
            if (bloquearBoton) {
                return; // No hace nada si el botón está bloqueado
            }

            var audioActual = document.getElementById(`audioEscena${escenaActual}`);
            if (audioActual) {
                /*mi vida no tiene sentido*/ 
                audioActual.pause();
                audioActual.currentTime = 0; // Reinicia la reproducción al principio
            }
    
            document.querySelector(`.escena${escenaActual}`).style.display = 'none';
            escenaActual++;

            var audio = document.getElementById(`audioEscena${escenaActual}`);
            if (audio) {
                audio.play();
            }
    
        if(escenaActual > 19){
            bloquearBoton = true;
            escenaActual = 19;
        } 
         
        document.querySelector(`.escena${escenaActual}`).style.display = 'block';
        }
     })