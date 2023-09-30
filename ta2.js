var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
    
    let total=0;
    result.forEach(item => {
        total+=item.population 
    });
    console.log(total)
}  