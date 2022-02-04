function myfunct(){
   s = document.getElementById('length').value
   p = document.getElementById('width').value
   document.getElementById('output').innerHTML= "Area is " + " " + s*p + " " +"sq.mtr"
   document.getElementById('output2').innerHTML="Perimeter is " + " " + 2*(s+p) + " " +"sq.mtr"
}