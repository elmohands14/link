$(document).ready(function(){
    $('#btn-bar').click(function(){
    $('#box').toggle(300)
    });
    $('.all-box-panel ,.all-btn,.call-info,.call-data,.a1,.box-profile-1').click(function(){
        $('#box').hide(300)
        });
});



// page index efect scrooling 

let section = document.querySelector('.content-info');

window.onscroll= function(){
    if(window.scrollY >= section.offsetTop){
        console.log('tets yes');
    }
}





