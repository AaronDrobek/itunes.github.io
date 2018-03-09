/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let search    = document.getElementById("search");
let results   = document.querySelector(".results")
let searchBar = document.getElementById("searchBar");
let button    = document.querySelector("button");
// let musicPlayer = document.getElementsByClassName("musicPlayer");





button.addEventListener('click', function(){

  let searchBar = document.getElementById("searchBar");

  // let searchBar = searchBar.value;
  // searchBar.addEventListener('keypress', function (e) {
  //     var key = e.which || e.keyCode;
  //     if (key === 13) { // 13 is enter
  //       // code for enter
  //     }


  while(results.firstChild){
    results.removeChild(results.firstChild);
  }


  let bar = searchBar.value;


  fetch("https://itunes.apple.com/search?term=" + bar )
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);



        for (var i = 0; i < data.results.length; i++) {

          let el1 = document.createElement("div");
          el1.classList.add("el1");
          el1.setAttribute("src", `${data.results[i].previewUrl}`);
          let image = document.createElement("img");
          image.setAttribute("src", `${data.results[i].artworkUrl100}` );
          el1.appendChild(image);

          let song_title = document.createElement("h4");
          song_title.setAttribute("id", "song_title");
          song_title.textContent= `${data.results[i].trackName}`
          el1.appendChild(song_title);

          let artist_title=document.createElement("h2");
          artist_title.setAttribute("id", "artist_title");
          artist_title.textContent=`${data.results[i].artistName}`;
          el1.appendChild(artist_title);
          let music = `${data.results[i].previewUrl}`;


          // music.children().append( el1 );
          results.appendChild(el1);

          el1.addEventListener('click', function(){

            // music.(event.target.value);
            musicPlayer.src = music;
            musicPlayer.load();
            musicPlayer.play();


        })

        }



      })


    })

  })






//
//
// let rsvp = document.createElement("button");
//   let view = document.createElement("button");
//   rsvp.setAttribute("class", "rsvp")
//   view.setAttribute("class", "view")
//   rsvp.textContent= "RSVP"
//   view.textContent= "View Event"
//   rsvp.addEventListener('click', function(){
//     container.innerHTML = eventView;
