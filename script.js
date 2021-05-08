fetchMovies()

window.onload=()=>{
    displayMovies(movies)
    document.getElementById("filters").addEventListener("change", changeFunction);
    
    
}

async function fetchMovies() {
    const response = await fetch('movieslist.json').then(results=>console.log(results));

  }

function changeFunction(){
    let e = document.getElementById("filters");
    let strUser = e.options[e.selectedIndex].value;
    let copyMovies= [...movies];
    let sortedMovies=sortBestFirst(copyMovies, strUser);
    console.log(sortedMovies);
    displayMovies(sortedMovies);

}

function getAttributeValue(){
    document.getElementById()
}

function displayMovies(movies){
    let table="<table border='1' style='width: 100%'>";
    table +="<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for (let index=0; index<movies.length; index ++){
        table +="<tr>";
        table +="<td>" +movies[index].id + "</td>";
        table +="<td>" +movies[index].title + "</td>";
        table +="<td>" +movies[index].rank + "</td>";
        table += "</tr>"
    }
    table += "</table>";
    document.getElementById("movies-list").innerHTML= table;
}

function sortBestFirst(number, attr){
    console.log(attr)
    if (! attr) return number;
    console.log(attr)
    console.log(attr=='rank')
    console.log(attr=='title')
    console.log(attr=='id')
    if (attr =='rank' || attr =='title' || attr =='id'){
        
        return mergeSort(number, attr)
    }

    return number
}

function merge(left, right, attr){
    i=0
    arr=[]
    while(left.length && right.length){
        if (attr =="rank"){
            left[i].rank=parseInt(left[i].rank)
            right[i].rank=parseInt(right[i].rank)
        }
        if (left[i][attr]<right[i][attr]){
            arr.push(right.shift())
        }
        else{
            arr.push(left.shift())
        }
    }

    return [...arr,...left,...right]
}

function mergeSort(array, attr){
    if (array.length<2){
        
        return array
    }

    divider=array.length/2

    return merge(mergeSort(array.splice(0,divider), attr),mergeSort(array, attr), attr)
}
