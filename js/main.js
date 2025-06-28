let dropIcon = document.querySelectorAll(".drop-dawon");

dropIcon.forEach((link)=>{
    link.addEventListener('click', function(e){
        e.preventDefault;
       let newId = link.getAttribute('data-set');
       document.getElementById(newId).classList.toggle('open')
    })
})
   