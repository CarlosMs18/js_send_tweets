import {formulario, tweet} from '../helpers/selectors.js'
import ui from '../classes/UI.js'
import tweetClass from '../classes/tweet.js'

export function eventListener(){
    document.addEventListener('DOMContentLoaded',recargarRecursos)
    formulario.addEventListener('submit',enviarTweet)
}


function enviarTweet(e){
    e.preventDefault()
    
    if(!tweet.value){
        ui.mostrarErrors('El tweet no puede ir vacio!','error')
        return
    }

    const objTweet ={id : Date.now(), tweet : tweet.value} 
    tweetClass.agregarTweet(objTweet)

    const {lista} = tweetClass
    ui.pintarHTML(lista)
    
    formulario.reset()
}


export function eliminarTweet(id){
        tweetClass.eliminarTweetClass(id)

        const {lista} = tweetClass 
        ui.pintarHTML(lista)



}



function recargarRecursos(){
    const {lista} = tweetClass 
    ui.pintarHTML(lista)
}
