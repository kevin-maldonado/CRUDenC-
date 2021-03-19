function validarDatos() {
    var arrError = [];
    var tipoRechazo = $("#DdlTipoCancelacion").val();
    var observacion = $("#TxtObservacionCierre").val().trim();

    if (tipoRechazo == "")
        arrError.push("ERROR_TIPO");
    if (observacion.length <= 3 )
        arrError.push("ERROR_LENMINOBSER");
    if (observacion.length > 300)
        arrError.push("ERROR_LENMAXOBSER");    

    if (arrError.length > 0) {
        var mensajeError = "";
        if (arrError.length > 0) {
            $.each(arrError, function (key, value) {
                mensajeError += mensajeErrorDatos(value);
            });
        }
        return mensajeError;
    } else
        return true;
}

function mensajeErrorDatos(mensaje) {
    var res = "";
    switch (mensaje) {
        case "ERROR_TIPO": res += "<p>* Debe seleccionar la tipificación</p>";
            break;
        case "ERROR_LENMAXOBSER": res += "<p>* La observación no puede superar los 300 caracteres</p>";
            break;
        case "ERROR_LENMINOBSER": res += "<p>* La observación debe ser mayor a 3 caracteres</p>";
            break;
        default:
            break;
    }
    return res;
}
