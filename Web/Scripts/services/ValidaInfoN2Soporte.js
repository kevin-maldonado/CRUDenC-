function validarEmail() {
    if (confirm('¿Desea proceder con lo solicitado?')) {
        var validacionDatos = validarDatos();
        if (validacionDatos != true) {
            bootbox.alert({
                title: "<i class='fa fa-exclamation-triangle'></i> Advertencia",
                message: "<p><b>Por favor ingrese campos requeridos.</b></p>" + validacionDatos,
                centerVertical: true,
            });
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }

    function validarDatos() {
        var arrError = [];
        var proveedorUM = $("#DdlProveedorUM").val();
        var NodoAcceso = $("#DdlNodoAcceso").val();
        var TipoUM = $("#DdlUltimaMilla").val();
        var TecAcceso = $("#DdlTecnoAcceso").val();
        var NodoPE = $("#DdlNodoPeConexion").val();
        var TecUM = $("#DdlTecnologiaUM").val();
        var puertoAcceso = $("#TxtWanPE").val().trim();
        var puertoPE = $("#TxtPuertoPe").val().trim();
        var asunto = $("#TxtAsunto").val().trim();
        var mensaje = $("#TxtMensaje").val().trim();
        var path = $("#TxtPathN3").val().trim();
        var modelo = $("#TxtModeloCPE").val().trim();
        var serial = $("#TxtSerialCPE").val().trim();

        if (proveedorUM == "")
            arrError.push("ERROR_PROVEEDORUM");
        if (NodoAcceso == "")
            arrError.push("ERROR_NODOACCESO");
        if (TipoUM == "")
            arrError.push("ERROR_TIPOUM");
        if (TecAcceso == "")
            arrError.push("ERROR_TECACCESO");
        if (NodoPE == "")
            arrError.push("ERROR_NODOPE");
        if (TecUM == "")
            arrError.push("ERROR_TECUM");
        if (puertoAcceso == "")
            arrError.push("ERROR_PUERTOACCESO");
        if (puertoPE == "")
            arrError.push("ERROR_PUERTOPE");
        if (asunto == "")
            arrError.push("ERROR_ASUNTO");
        if (mensaje == "")
            arrError.push("ERROR_MENSAJE");
        if (path == "")
            arrError.push("ERROR_PATH");
        if (modelo == "")
            arrError.push("ERROR_MODELO");
        if (serial == "")
            arrError.push("ERROR_SERIAL");
        if (puertoAcceso.length > 100)
            arrError.push("ERROR_LENPUERTOACCESO");
        if (puertoPE.length > 100)
            arrError.push("ERROR_LENPUERTOPE");
        if (asunto.length > 255)
            arrError.push("ERROR_LENASUNTO");
        if (mensaje.length > 255)
            arrError.push("ERROR_LENMENSAJE");
        if (path.length > 400)
            arrError.push("ERROR_LENPATH");
        if (modelo.length > 100)
            arrError.push("ERROR_LENMODELO");
        if (serial.length > 80)
            arrError.push("ERROR_LENSERIAL");

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
            case "ERROR_PROVEEDORUM": res += "<p>* Seleccione el Proveedor Última Milla</p>";
                break;
            case "ERROR_NODOACCESO": res += "<p>* Seleccione el Nodo Acceso</p>";
                break;
            case "ERROR_TIPOUM": res += "<p>* Selecciona el Tipo UM</p>";
                break;
            case "ERROR_TECACCESO": res += "<p>* Seleccione la Tecnología de Acceso </p>";
                break;
            case "ERROR_NODOPE": res += "<p>* Selecccione el Nodo PE Conexión</p>";
                break;
            case "ERROR_TECUM": res += "<p>* Seleccione la Tecnología de UM</p>";
                break;
            case "ERROR_PUERTOACCESO": res += "<p>* Ingrese el Puerto de Acceso</p>";
                break;
            case "ERROR_PUERTOPE": res += "<p>* Ingrese  el Puerto Nodo PE</p>";
                break;
            case "ERROR_ASUNTO": res += "<p>* Ingrese el Asunto</p>";
                break;
            case "ERROR_MENSAJE": res += "<p>* Ingrese  el Mensaje</p>";
                break;
            case "ERROR_PATH": res += "<p>* Ingrese el Path de culminación o revisión de N3 como entrega del enlace</p>";
                break;
            case "ERROR_MODELO": res += "<p>* Ingrese el Modelo</p>";
                break;
            case "ERROR_SERIAL": res += "<p>* Ingrese el Serial</p>";
                break;
            case "ERROR_LENPUERTOACCESO": res += "<p>* El Puerto de Acceso no puede superar los 100 caracteres</p>";
                break;
            case "ERROR_LENPUERTOPE": res += "<p>* El Puerto Nodo PE no puede superar los 100 caracteres</p>";
                break;
            case "ERROR_LENASUNTO": res += "<p>* El Asunto no puede superar los 255 caracteres</p>";
                break;
            case "ERROR_LENMENSAJE": res += "<p>* El Mensaje no puede superar los 255 caracteres</p>";
                break;
            case "ERROR_LENPATH": res += "<p>* El Path de culminación no puede superar los 400 caracteres</p>";
                break;
            case "ERROR_LENMODELO": res += "<p>* El Modelo CPE no puede superar los 100 caracteres</p>";
                break;
            case "ERROR_LENSERIAL": res += "<p>* El Serial CPE no puede superar los 80 caracteres</p>";
                break;
            default:
                break;
        }
        return res;
    }
}

function validarPostventa() {
    if (confirm('¿Desea proceder con lo solicitado?')) {
        return true;
    } else {
        return false;
    }
}