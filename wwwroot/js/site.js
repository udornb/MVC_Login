// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//refactoring @ 26/03/2021
$(function () {
    //innitail login 
    //remove current 
    try {
        sessionStorage.setItem('x', getTodayDate(0));        
    } catch
    {  
         alert('Error in cache!'); 
    }

    var recno = sessionStorage.getItem("Login_Success");
    if ((recno === '') || (recno === null) || (recno === undefined)) { 
        $('#modal-login').modal({
            backdrop: 'static',
            keyboard: false
         });
                
        $('#modal-login').modal('show');
    } else {      

    }
});

$('#modal-login').on('hidden.bs.modal', function (e) {
    var recno = sessionStorage.getItem("Login_Success");
    if ((recno === '') || (recno === null) || (recno === 'undefined')) {
        //alert('Login page require!');
        $('#modal-login').modal('show');
    } else {
        //setTimeout(function () { dialog_get_staffconsent(); }, 2000);
        //console.log(recno);
    }
});