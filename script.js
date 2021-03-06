
window.onload=()=>{
    displayMovies(movies)
    document.getElementById("filters").addEventListener("change", changeFunction);
    
    
}

function changeFunction(){
    let e = document.getElementById("filters");
    let strUser = e.options[e.selectedIndex].value;
    let copyMovies= [...movies];
    let sortedMovies=sortBestFirst(copyMovies, strUser);

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

let movies= [
    {
        "title": "The Shawshank Redemption",
        "rank": "1",
        "id": "tt0111161"
    },
    {
        "title": "The Godfather",
        "rank": "2",
        "id": "tt0068646"
    },
    {
        "title": "The Godfather: Part II",
        "rank": "3",
        "id": "tt0071562"
    },
    {
        "title": "Pulp Fiction",
        "rank": "4",
        "id": "tt0110912"
    },
    {
        "title": "The Good, the Bad and the Ugly",
        "rank": "5",
        "id": "tt0060196"
    },
    {
        "title": "The Dark Knight",
        "rank": "6",
        "id": "tt0468569"
    },
    {
        "title": "12 Angry Men",
        "rank": "7",
        "id": "tt0050083"
    },
    {
        "title": "Schindler's List",
        "rank": "8",
        "id": "tt0108052"
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "rank": "9",
        "id": "tt0167260"
    },
    {
        "title": "Fight Club",
        "rank": "10",
        "id": "tt0137523"
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "rank": "11",
        "id": "tt0080684"
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "rank": "12",
        "id": "tt0120737"
    },
    {
        "title": "One Flew Over the Cuckoo's Nest",
        "rank": "13",
        "id": "tt0073486"
    },
    {
        "title": "Inception",
        "rank": "14",
        "id": "tt1375666"
    },
    {
        "title": "Goodfellas",
        "rank": "15",
        "id": "tt0099685"
    },
    {
        "title": "Star Wars",
        "rank": "16",
        "id": "tt0076759"
    },
    {
        "title": "Seven Samurai",
        "rank": "17",
        "id": "tt0047478"
    },
    {
        "title": "Forrest Gump",
        "rank": "18",
        "id": "tt0109830"
    },
    {
        "title": "The Matrix",
        "rank": "19",
        "id": "tt0133093"
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "rank": "20",
        "id": "tt0167261"
    },
    {
        "title": "City of God",
        "rank": "21",
        "id": "tt0317248"
    },
    {
        "title": "Se7en",
        "rank": "22",
        "id": "tt0114369"
    },
    {
        "title": "The Silence of the Lambs",
        "rank": "23",
        "id": "tt0102926"
    },
    {
        "title": "Once Upon a Time in the West",
        "rank": "24",
        "id": "tt0064116"
    },
    {
        "title": "Casablanca",
        "rank": "25",
        "id": "tt0034583"
    },
    {
        "title": "The Usual Suspects",
        "rank": "26",
        "id": "tt0114814"
    },
    {
        "title": "Raiders of the Lost Ark",
        "rank": "27",
        "id": "tt0082971"
    },
    {
        "title": "Rear Window",
        "rank": "28",
        "id": "tt0047396"
    },
    {
        "title": "It's a Wonderful Life",
        "rank": "29",
        "id": "tt0038650"
    },
    {
        "title": "Psycho",
        "rank": "30",
        "id": "tt0054215"
    },
    {
        "title": "L??on: The Professional",
        "rank": "31",
        "id": "tt0110413"
    },
    {
        "title": "Sunset Blvd.",
        "rank": "32",
        "id": "tt0043014"
    },
    {
        "title": "American History X",
        "rank": "33",
        "id": "tt0120586"
    },
    {
        "title": "Apocalypse Now",
        "rank": "34",
        "id": "tt0078788"
    },
    {
        "title": "Terminator 2: Judgment Day",
        "rank": "35",
        "id": "tt0103064"
    },
    {
        "title": "Saving Private Ryan",
        "rank": "36",
        "id": "tt0120815"
    },
    {
        "title": "Memento",
        "rank": "37",
        "id": "tt0209144"
    },
    {
        "title": "City Lights",
        "rank": "38",
        "id": "tt0021749"
    },
    {
        "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "rank": "39",
        "id": "tt0057012"
    },
    {
        "title": "Alien",
        "rank": "40",
        "id": "tt0078748"
    }
]

function sortBestFirst(number, attr){

    if (! attr) return number;
 
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
