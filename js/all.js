$(document).ready(function(){
    $('#btn-bar').click(function(){
    $('#box').toggle(300)
    });
    $('.all-box-panel ,.all-btn,.call-info,.call-data,.a1,.box-profile-1').click(function(){
        $('#box').hide(300)
        });
});