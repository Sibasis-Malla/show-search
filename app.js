const form = document.querySelector('#form')
const container = document.querySelector('.card-content')


form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchItem = form.elements.query.value
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=29fc17499751181585ea224105f9e85e&query=${searchItem}`)
    //console.log(response)
    //console.log(`https://image.tmdb.org/t/p/original/${response.data.results[0].poster_path}`)
    getData(response.data);
    form.elements.query.value = '';

})

const getData=(shows)=>{

for(let i = 0;i<3;i++){
    const source = `https://image.tmdb.org/t/p/w200/${shows.results[i].poster_path}`
    const movie = document.createElement('span')
    const image = document.createElement('img')
    image.src = source
    const rating = shows.results[i].vote_average
    const ratingDisplay =document.createElement('div')
    ratingDisplay.innerText = `IMDB Rating - ${rating}`
    movie.appendChild(image)
    movie.appendChild(ratingDisplay)
    container.appendChild(movie)
    
    
}


}