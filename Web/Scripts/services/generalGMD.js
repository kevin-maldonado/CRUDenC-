function tipoError(jqXHR, textStatus, errorThrown) {
    var error = "";
    if (jqXHR.status === 0)
        error = 'Not connect: Verify Network.';
    else if (jqXHR.status == 302)
        error = 'Requested page moved [302]';
    else if (jqXHR.status == 404)
        error = 'Requested page not found [404]';
    else if (jqXHR.status == 500)
        error = 'Internal Server Error [500].';
    else if (textStatus === 'parsererror')
        error = 'Requested JSON parse failed.';
    else if (textStatus === 'timeout')
        error = 'Time out error.';
    else if (textStatus === 'abort')
        error = 'Ajax request aborted.';
    else
        error = 'Uncaught Error: ' + (typeof jqXHR.responseText);
    return error;
}

function errorMessage(mensajeError, jqXHR, textStatus, errorThrown) {
    var err = tipoError(jqXHR, textStatus, errorThrown);
    bootbox.alert({
        title: "Error",
        message: mensajeError + err
    });
}

function validate() {
    if (confirm('¿Desea proceder con lo solicitado?')) {
        return true;
    } else {
        return false;
    }
}