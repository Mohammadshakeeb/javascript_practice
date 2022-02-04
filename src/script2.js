function myfunc3(){
    if(document.getElementById('rad1').checked==true){
            let s=document.getElementById('val').value
            document.getElementById('output').innerHTML=s*60
    }
    else if(document.getElementById('rad2').checked==true){
       let s =document.getElementById('val').value
        document.getElementById('output').innerHTML=s*60*60
    }
    else {
        document.getElementById('output').innerHTML="no output"
    }
}


