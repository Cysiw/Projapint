
function f1(e){
    let q=0;
    e.preventDefault()
    function f2(a,b){
        let c2=null;
       const c = document.getElementById(a).value;
       switch(a){
        case "Imie":
            if(c.length!=0){
                    c2 = c.charAt(0).toUpperCase() + c.slice(1);
                    document.getElementById(b).innerHTML="<bold>"+a+"</bold>"+" : "+c2;
                break;
            }else{
                q=1;
                
                alert("Pole Imie musi byc uzupelnione")
                break;
            }
        case "Nazwisko":
            if(c.length!=0){
                    c2 = c.charAt(0).toUpperCase() + c.slice(1);
                    document.getElementById(b).innerHTML="<bold>"+a+"</bold>"+" : "+c2;
                    break;
                }else{
                    q=1;
                    
                    alert("Pole Nazwisko musi byc uzupelnione");
                    break;
                }
        case "Numer":
                if(c.length!=9 || isNaN(c)==true){
                    q=1;
                    
                    alert("Numer musi miec 9 cyfr");
                    break;
                    
                }else{
                    document.getElementById(b).innerHTML="<bold>"+a+"</bold>"+" : "+c;
                    break;
                }

        case "Gmail":
                if(c.includes("@")  == true){
                    document.getElementById(b).innerHTML="<bold>"+a+"</bold>"+" : "+c;
                    break;
                }else{
                    q=1;
                    
                    alert("Wpisz Gmail poprawnie");
                    break
                }
        case "Godzina":
                hours = c.slice(0,-3);
                minutes = c.slice(3);
                Number(hours);
                Number(minutes);
                if(hours>24 || minutes>59||c.length==0){
                    q=1;
                    
                    alert("Podaj poprawna godzine");
                    break;
                }else{
                    document.getElementById(b).innerHTML="<bold>"+a+"</bold>"+" : "+hours+":"+minutes;
                    break;
                }
        case "Miasto":
            if(c.length!=0){
                c2 = c.charAt(0).toUpperCase() + c.slice(1);
                document.getElementById(b).innerHTML="<bold>"+a+"</bold>"+" : "+c2;
                break;
            }else{
                q=1
                
                alert("Pole miejscowosc musi byc uzupelnione");
                break;
            }
       }
       
       if(q!=0){
        document.getElementById("display").style.display= "none";
       }else{
        document.getElementById("display").style.display= "flex";
       }
    }
    f2("Imie","Imie2");
    f2("Nazwisko","Nazwisko2");
    f2("Numer","Numer2");
    f2("Gmail","Gmail2");
    f2("Godzina","Godzina2");
    f2("Miasto","Miasto2");
}




document.getElementById("form").addEventListener("submit",f1);