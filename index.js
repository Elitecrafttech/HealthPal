
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