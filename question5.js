function fetchData(url){
    fetch(url).then(res => {
        return res.text();
    }).then(data => {
        console.log(data); 
    })
}
const url = "https://jsonplaceholder.typicode.com/todos/1";
fetchData(url);