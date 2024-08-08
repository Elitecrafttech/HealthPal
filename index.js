function menubar() {
    const openmenu = document.querySelector(".openmenu");
    const firstMenu = document.querySelector(".ham1");
    const nextMenu = document.querySelector(".ham2");
    openmenu.classList.toggle('showmenu');
    firstMenu.classList.toggle('close');
    nextMenu.classList.toggle('openbar')
    
}
function booking() {
    const putname = document.querySelector(".putname").value;
    const putops = document.querySelector(".putops").value;
    const putdate = document.querySelector(".putdate").value;
    if(!putname && !putops && !putdate){
        alert("Fill out all the field")
    }
    else{
        window.location.href = "booking.html";
    }  
}
