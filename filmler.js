const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f594f75b06msh0340c6f808d2f74p1abf41jsnc5d073a2e381',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

async function filmler() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const imgElements = document.getElementsByTagName("img");
        const filmİsimleri=document.getElementsByTagName("h4");
        const filmpuani=document.getElementsByTagName("h6");
        const filmtürleri=document.getElementsByTagName("h5");

        for (let i = 0; i < imgElements.length; i++) {
            if (result[i] && result[i].big_image) {
                imgElements[i].src = result[i].big_image;
                imgElements[i].alt = result[i].title; 
            }
        }

        for (let i = 0; i < filmİsimleri.length; i++) {
            if (result[i] && result[i].title) {
                filmİsimleri[i].innerHTML = i+1 + "." + result[i].title;
                
            }
        }

        for (let i = 0; i <filmpuani.length; i++) {
            if (result[i] && result[i].rating) {
                filmpuani[i].innerHTML ="imdb:"+ result[i].rating;
                
            }
        }
        
  
        for (let i = 0; i <filmtürleri.length; i++) {
            if (result[i] && result[i].genre[0]) {
                filmtürleri[i].innerHTML ="Tür:"+ result[i].genre[0];
                
            }
        }
        console.log(result)
        
        
        
        
        
        
        
        
        
        
        console.log(result[56])
    console.log(result[56].rating)
    console.log(result)







    } catch (error) {
        console.error('Error fetching the movies:', error);
    }
}

filmler();
