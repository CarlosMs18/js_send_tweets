import {formulario, lista_tweets} from '../helpers/selectors.js';
import {eliminarTweet} from '../functions/function.js'
import tweetClass from './tweet.js';
class UI{
    constructor(){}

    mostrarErrors(mensaje, estado){
        const error = document.querySelector('.error')
        if(!error){
            const p = document.createElement('p')
            p.textContent = mensaje
            p.classList.add(estado)
            formulario.appendChild(p)
            
            setTimeout(() => {
                p.remove()
            }, 2500);
        }

    }


    pintarHTML(lista){
        this.limpiarHTML()
        lista.forEach( p =>{
            const {id,tweet} = p
            const listatweetss = document.createElement('li')
            listatweetss.textContent = tweet
            listatweetss.dataset.id = id
    
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.textContent = 'X'
            btnEliminar.onclick = () =>{
                eliminarTweet(id)
            }

            listatweetss.appendChild(btnEliminar)
            lista_tweets.appendChild(listatweetss)
        })

        tweetClass.guardarLocalStorage()
    }


    limpiarHTML(){
        while(lista_tweets.firstChild){
            lista_tweets.removeChild(lista_tweets.firstChild)
        }
    }
}


const ui = new UI();

export default ui;