let davolee = document.createElement("div")
document.body.appendChild(davolee)
davolee.id="main"

async function start() {

     const response = await fetch("https://dog.ceo/api/breeds/list/all")
    
     const data = await response.json()
    
     createBreedList(data.message)
    
    }
    
    start()
    
    
    
    function createBreedList(breedList) {
    
     document.getElementById('app').innerHTML = `
    
     <select onchange="loadByBreed(this.value)">
    
     <option>choose a dog breed</option>
    
     ${Object.keys(breedList).map(function (breed){
    
     return `<option>${breed}</option>`
    
     }).join('')}
    
     </select>
    
    `
    
    }
    
    
    
    
    async function loadByBreed(breed) {
    
    if(breed != "choose a dog breed") {
    
     const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    
     const data = await response.json()
    
     hotDog(data.message)
    
     }
    
    
    
    }
    
    
    
    
    // function hotDog(image){
    
    //     document.getElementById('dev').innerHTML += `<img class='image' src='${images[0]}`
    
    // }
    
    function hotDog(image) {
    
     davolee.innerHTML = `<img src =${image[0]}>`
    
    }
