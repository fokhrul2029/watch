function Watch(){
    const i = new Date() ; 



    let hrs = i.getHours() ; 
    let hr = (i.getHours() < 10) ? "0" + i.getHours() : i.getHours() , 
    min = (i.getMinutes() < 10) ? "0"+ i.getMinutes() : i.getMinutes() , 
    sec = (i.getSeconds() < 10) ? "0"+ i.getSeconds() : i.getSeconds()  ,
    M = (i.getHours() >= 12 ) ? "PM" : "AM" ;
    
    
    if(hrs == 0 ){
        hr = 12  
    }else if(hrs > 12){
        hr = hrs - 12 ;
    }else{
        hr ; 
    }
    if( hr < 10 ){
        hr = "0"+ hr ; 
    }else{
        hr 
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

