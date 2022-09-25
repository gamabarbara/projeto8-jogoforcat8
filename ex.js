let apiUrl = "https://jsonplaceholder.typicode.com/todos";

function getApi() {
    const promise = axios.get(apiUrl)
    promise.then(renderCards)
    
}
getApi()

function renderCards(response) {
    const element = document.querySelector('.cards')
    for (let i = 0; i < response.data.length; i++) {
    element.innerHTML += `<div class="card">
    <div> Title: ${response.data[i].title}</div>
    <div> Completed: ${response.data[i].completed}</div>
    </div>`

    element.classList.remove("hidden")
    }
 
    
}