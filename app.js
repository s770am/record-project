



 function createHTML(albumNameP, artistNameP, genreP) {
   const album = document.createElement('div');
   album.className = "album-box";
   // create the three imgs and attach to the box
   let imgX = document.createElement('img');
   imgX.src = "images/close (1).png";
   imgX.className = 'img top-right';  
   album.append(imgX);

   let imgVinyl = document.createElement('img');
   imgVinyl.src = "images/vinyl (1).png";
   imgVinyl.className = 'img-big';  
   album.append(imgVinyl);

   let imgLove = document.createElement('img');
   imgLove.src = "images/love (1).png";
   imgLove.className = 'img bottom-right'  ;
   album.append(imgLove);

// attach the three lines to the box

let albumName = document.createElement('p');
albumName.textContent = albumNameP;
albumName.className = 'box-text';
album.append(albumName);

let artistName = document.createElement('p');
artistName.textContent = artistNameP;
artistName.className = 'box-text';
album.append(artistName);

let genre = document.createElement('p');
genre.textContent = genreP;
genre.className = 'box-text';
album.append(genre);

    return album ;
}

document.addEventListener('DOMContentLoaded', (e) => {
    // set records
    const records = document.querySelector('.records');

    // dealing with the form
const form = document.querySelector('.form');
const dovError = document.querySelector('.error');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //check if valid
if (e.target.name.value && e.target.Artist.value && e.target.genre.value) {
    records.append(createHTML(e.target.name.value, e.target.Artist.value, e.target.genre.value));

    // reset the form
form.name.value = "";
form.Artist.value = "";
form.genre.value = "";  
dovError.textContent = ""; 
} else {
    
    dovError.textContent = ('you can not leave any of the fields blank'); 
}


  });


});