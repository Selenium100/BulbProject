
 const turnonbutton = document.getElementById("turnon");
 const turnoffimage = document.getElementById("turnoff");
 const turnoffbutton = document.getElementById("turnofflight");
 
 


 const turnonthelight = () => turnoffimage.src = "images/Turnon.png";

 const turnoffthelight = () => turnoffimage.src = "images/Turnoff.png";



 turnonbutton.addEventListener("click", turnonthelight);

 turnoffbutton.addEventListener("click", turnoffthelight);