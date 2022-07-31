function Watch(){
    const i = new Date() ; 

    let hrs = i.getHours() ; 
    let hr = (i.getHours() < 10) ? "0" + i.getHours() : i.getHours() , 
    min = (i.getMinutes() < 10) ? "0"+ i.getMinutes() : i.getMinutes() , 
    sec = (i.getSeconds() < 10) ? "0"+ i.getSeconds() : i.getSeconds()  ,
    M = (i.getHours >= 12 ) ? "AM" : "PM" ;
    
    if(i.getHours() == 0 ){
        hrs = 12 && hr ; 
    }else if(i.getHours() > 12 ){
        hrs = i.getHours() - 12 && hr ;
    }else{
        hrs = i.getHours() && hr ;
    }
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const newDay = weekday[i.getDay()] ; 
    const date = i.getDate() ; 
    const month = i.getMonth()+1 ; 
    const years = i.getFullYear() ; 

    document.getElementById("hr").innerHTML = hr ; 
    document.getElementById("min").innerHTML = min ;
    document.getElementById("sec").innerHTML = sec ;
    document.getElementById("day").innerHTML = newDay ;
    document.getElementById("date").innerHTML = date + "/" + month + "/" + years ;
    document.getElementById("M").innerHTML = M ;
    
}
Watch() ;
setInterval(function(){
    Watch() ;
},1000);