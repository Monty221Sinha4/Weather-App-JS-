Letappid='9d4f5b53afebb4cbf5a9bab392352bab';
Letunits='metric';
Letsearchmethod;


function getSearchMethod(searchTerms){
    if (searchTerms.length===5 && Number.parseint(searchTerms)+''===searchTerms)
        searchMethod;
        else
            searchMethod='q';
}
function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch('http:api//opeanweathermap.org/data/2.5/weather?$(searchmethod)=$(searchTerm)&APPID=$(appId)&units-$(units)').then(result =>{
        return result.json();
    }).then(result=>{
        init(result;
    })
    
}

function init(getfromServer) {
    console.log(getfromServer);
}
document.getElementById('searchbtn').addEventListener('click',()=>{
    let searchTerms=document.getElementById('searchinput').value;
    if (searchTerms)
        searchWeather(searchTerms);
})

