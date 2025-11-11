let movies = new Array();
let add = document.querySelector("#add");
let data = document.querySelector("#name");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let show = document.querySelector("#show");
let list = document.querySelector("#list")

add.addEventListener("click", () => {
    if (data.value === "") {
        alert("Please Enter movie name");

    }
    else {
        movies.push(data.value);
        data.value = '';
        console.log(movies);
        alert("movie added successfully");
    }
})

clear.addEventListener("click", () => {
    movies = [];
    console.log(movies);
    list.innerText ="";
    updateMovieCount();
    display.style.visibility = 'hidden';
})

show.addEventListener("click", () => {
    display.style.visibility = 'visible';
    if (movies.length===0) {
        alert("No movies added") ;
    } else {
        renderMovieList();
        updateMovieCount();
    }
});
function updateMovieCount() {
    movieCountDisplay.textContent = movies.length;
}
function renderMovieList(){
    list.innerText="";
    movies.forEach((movie,index) => {
        const listItem = document.createElement("li");
        listItem.textContent = movie+"  ";
        list.appendChild(listItem);

        const removeButton= document.createElement('button');
        removeButton.textContent="Remove";
        removeButton.className='remove-btn';

        removeButton.addEventListener("click",()=>{
          movies.splice(index,1);
          renderMovieList();
          updateMovieCount();
        });
        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    });

}
