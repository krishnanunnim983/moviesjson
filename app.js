var firebaseConfig = {
  apiKey: "AIzaSyDDic2jX3L4QScf5uOLMdyvm6AR88uhg54",
  authDomain: "cineflix-4b0ad.firebaseapp.com",
  databaseURL: "https://cineflix-4b0ad-default-rtdb.firebaseio.com",
  projectId: "cineflix-4b0ad",
  storageBucket: "cineflix-4b0ad.appspot.com",
  messagingSenderId: "101041183878",
  appId: "1:101041183878:web:f45ce86a529869810bc507"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var firestore = firebase.firestore();

  let submitBtn = document.querySelector(".btn");
  let Mytitle = document.querySelector(".title");
  let Myposter = document.querySelector(".poster");
  let Myimdb = document.querySelector(".imdb");
  let Mydownload = document.querySelector(".download");
  let Mygenre = document.querySelector(".genre");
  let Mydate = document.querySelector(".date");


  
const db = firestore.collection("movies"); //Add your collection name



submitBtn.addEventListener("click", function (e) {
    let title = Mytitle.value;
    let poster = Myposter.value;
    let imdb = Myimdb.value;
    let download = Mydownload.value;
    let genre = Mygenre.value;
    let date = Mydate.value;  

    e.preventDefault();
    db.doc(date)
      .set({
        title: title,
        poster: poster,
        imdb: imdb,
        download: download,
        genre: genre,
        date: date,
      })
      .then(function () {
        console.log("Movie Updated");
  
        alert("Movie Updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  
    setTimeout(function () {
      document.querySelector(".contact").reset();
    }, 3000);
  });
  
