function display(name, id, type){
  var corpo = document.querySelector('body')
  corpo.innerHTML += 
  `<div class="container ${type}">
    <p class="num"> N°: ${id}</p>
    <img class="pokemon" src='https://pokeres.bastionbot.org/images/pokemon/${id}.png'/>
    <h2>${name}</h2>    
    <h3>${type}</h3>
  </div>
  `
}
async function get(){
  for(id = 1; id <= 151; id++)  {
  url = `https://pokeapi.co/api/v2/pokemon/${id}`
  await fetch(url)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        display(data.name, data.id, data.types[0].type.name)
        console.log(data.types[0].type.name)
      })
      .catch(function(error){
        console.log('Error: '+ error)
      })
  }
}  
  
get()