const jokes = document.getElementById("jokes")
const btn = document.getElementById("btn")
const jokesApi = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'


btn.addEventListener("click", async() =>{
    try {
        const response = await fetch(jokesApi)
        const data = await response.json()
            let joke = `${data.joke}`
            jokes.textContent = joke
        console.log(joke)
        
    } catch (error) {
         jokes.textContent = error
    }
    //  fetch(jokesApi). then((response)=>{
    //     return response.json()
    //  }).then((data)=>{
    //     let joke = data.joke
    //     jokes.textContent = joke || "undefined"
    //  })   
})
