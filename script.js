   // Close offcanvas when any link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const offcanvasElement = document.querySelector('.offcanvas');
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide(); // Manually hide the offcanvas
      }
    });
  });

 //   games section

 function fun1() {
    window.open("./Games-section/Memory-Game/index.html","_self")
  }
  function fun2() {
    window.open("./Games-section/Guess-Game/index.html","_self")
  }
  function fun3() {
    window.open("./Games-section/tic-tac-toe/index.html","_self")
  }
  function fun4() {
    window.open("./Games-section/ping-pong-Game/index.html","_self")
  }
  function fun5() {
    window.open("./Games-section/race-car/index.html","_self")
  }
  function fun6() {
    window.open("./Games-section/roc-paper-scissors/index.html","_self")
  }

  ///////////////////////////////////////////////////


// News  section 
const apiKey = "04cb59cba6a84ac3a76a9469a8aa956c";
let blogContainer = document.getElementById("blog-container");
let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-button");

let currentDate=new Date()
const year = currentDate.getFullYear();       // Get the year (e.g., 2024)
const month = currentDate.getMonth();        // Get the month (0-based, so add 1)
const day = currentDate.getDate();          // Get the day

let date=`${year}-${month}-${day}` 
// console.log(date)   // Example: "2024-10-18"

async function newsApi(inputvalue) { 
try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${inputvalue}&pageSize=16&from=${date}&sortBy=publishedAt&apiKey=${apiKey}`
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)

    blogContainer.innerHTML = "";
    data.articles.forEach((article) => { 
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.addEventListener("click", () => {
      window.open(article.url, "_blank");
});

    const blogCardChildImg = document.createElement("img");
    blogCardChildImg.src = article.urlToImage ; 
    blogCardChildImg.onerror = () => {
      blogCardChildImg.src = "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"; // Placeholder image
    };
    blogCardChildImg.alt = article.title;

    const blogCardChildTitle = document.createElement("h2");
    const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + " ..." : article.title;
    blogCardChildTitle.innerText = truncatedTitle;

    const blogCardChildDescription = document.createElement("p");
    const truncatedDescription = article.description.length > 100 ? article.description.slice(0, 100) + " ..." : article.description;
    blogCardChildDescription.innerText = truncatedDescription;

    blogCard.append(blogCardChildImg, blogCardChildTitle, blogCardChildDescription);
    blogContainer.appendChild(blogCard);

    });

    } catch (error) {
        console.error("Error fetching news", error);
         }
    }

searchBtn.addEventListener("click", () => {
if (searchInput.value !== "") {
newsApi(searchInput.value.trim());
searchInput.value = ""; 
} else {
alert("Please enter input");
}
});

searchInput.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
if (searchInput.value !== "") {
newsApi(searchInput.value.trim());
searchInput.value = "";
} else {
alert("Please enter input.");
}
}
});



  ///////////////////////////////////////////////////

   //   movies section

  movieBtn=document.querySelector("#movieBtn")
  movieInp=document.querySelector("#movieInp")
  moviePoster=document.querySelector(".poster")
  movieInfo=document.querySelector(".info")


      async function getdata(moviename) {
      var res = await fetch(`https://www.omdbapi.com/?t=${moviename}&apikey=76d079f0`); //promice responce
      var newdata = await res.json(); //object
      child=document.createElement("div")
        child_a=document.createElement("p")//movie name
        child_a.innerHTML=`<b>Movie Name : </b> ${newdata.Title}`
        child_b=document.createElement("p")//actors
        child_b.innerHTML=`<b>Actors : </b> ${newdata.Actors}`
        child_c=document.createElement("p")//imdb
        child_c.innerHTML=`<b>IMDB-Rating : </b> ${newdata.imdbRating}`
        child_d=document.createElement("p")//director
        child_d.innerHTML=`<b>Director : </b> ${newdata.Director}`
        child_e=document.createElement("p")//relege
        child_e.innerHTML=`<b>Movie Released : </b> ${newdata.Released}`
        child_f=document.createElement("p")//Genre
        child_f.innerHTML=`<b>Genre : </b> ${newdata.Genre}`
        child_img=document.createElement("img")//poster
        child_img.src=newdata.Poster
        movieInp.value=""

        child.append(child_a,child_b,child_c,child_d,child_e,child_f)
        movieInfo.append(child)
        moviePoster.append(child_img)

      }
                    
        window.addEventListener("load", () => {
            getdata("Baahubali 2: The Conclusion");  // Replace "Baahubali 2: The Conclusion" with any movie title you want as the default
        });

        movieBtn.addEventListener("click", () => {
            if (movieInp.value && movieInp.value.trim() !== "") {
                getdata(movieInp.value.trim());
                movieInfo.innerHTML = "";
                moviePoster.innerHTML = "";
            } else {
                alert("Please enter a valid movie name.");
            }
        });

        movieInp.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                if (movieInp.value && movieInp.value.trim() !== "") {
                    getdata(movieInp.value.trim());
                    movieInfo.innerHTML = "";
                    moviePoster.innerHTML = "";
                } else {
                    alert("Please enter a valid movie name.");
                }
            }
        });


        ///////////////////////////////////////////////////

        //   js project section
        function project1() {
          window.open("./js-ProjectSection/QR-scaner/index.html" , "_self")
        }
        function project2() {
          window.open("./js-ProjectSection/Temp/index.html" , "_self")
        }
        function project3() {
          window.open("./js-ProjectSection/Counter/index.html" , "_self")
        }
        function project4() {
          window.open("./Weather APP/index.html" , "_self")
        }
        function project5() {
          window.open("./js-ProjectSection/Calculator/index.html" , "_self")
        }
        function project6() {
          window.open("./js-ProjectSection/Qezz/index.html" , "_self")
        }