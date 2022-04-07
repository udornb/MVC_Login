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

function vToggle(e) {
    if (e.hasClass('d-none') === true) {
        e.removeClass('d-none')
    }
}

function vEndToggle(e) {
    if (!e.hasClass('d-none') === true) {
        e.addClass('d-none')
    }
}

var ErrLoginPassword = 'Err Login Password';
$('#ck_Access').on('click', function (e) {    
    if (($('#tb_login').val() === '') || ($('#tb_password').val() === '') ) {
        alert(ErrLoginPassword);
        return 0;
    }
    $('#tb_login').val($('#tb_login').val().toUpperCase());
    sessionStorage.removeItem('Login_Success');
    vToggle($('#ovl_login'));
    $.when($.ajax({
        type: "GET",
        url: "api/verifyuserAD/{Login}/{Password}",
        contentType: "application/json; charset=utf-8",
        data: {
            Login: $('#tb_login').val(),
            Password: $('#tb_password').val()
        },        
        datatype: "json",
        success: function (data) { },
        error: function () {
            alert('cannot verify data:access:error');
            setTimeout(function () { vEndToggle($('#ovl_login')); }, 3000);
            return 0;
        }
    })).done(function (data) {
        if ((data === '') || (data === null) || (data === 'undefined')) {
            alert('cannot verify data:access:done');
        } else {            
            if (Errormsg === '') {    
                    $('#modal-login').modal('hide');                
                    sessionStorage.setItem('Login_Success', $('#tb_login').val());                    
                
            } else { alert(Errormsg); }
            setTimeout(function () { vEndToggle($('#ovl_login')); }, 3000);
        }

    }).fail(function (error) {
        alert('cannot verify data:Fail access:fail');
        //setTimeout(function () { $('.overlay').toggle(); }, 3000);
    });
});
