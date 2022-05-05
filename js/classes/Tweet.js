class Tweet{
    constructor(){
        this.lista = []
        this.leerLocalStorage()
    }

    agregarTweet(objTweet){
        this.lista = [...this.lista, objTweet]
       
    }

    eliminarTweetClass(id){
        this.lista = this.lista.filter( p => p.id != id)
   
    }

    guardarLocalStorage(){
        localStorage.setItem('tweet',JSON.stringify(this.lista))
    }

    leerLocalStorage(){
        this.lista = JSON.parse(localStorage.getItem('tweet')) || []
    }
}

const tweetClass = new Tweet()
export default tweetClass   
