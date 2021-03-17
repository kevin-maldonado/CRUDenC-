$(document).ready(function () {
    $('#BtnGuardarEqui').hide();
    listarEquipamiento($("#HdFacId").val());
    $('#BtnGuardarCont').on('click', function (e) {
        var validacionDatosContactos = validarContactos();
        if (validacionDatosContactos != true) {
            bootbox.alert({
                title: "<i class='fa fa-exclamation-triangle'></i> Advertencia",
                message: "<p><b>Por favor ingrese campos requeridos.</b></p>" + validacionDatosContactos,
                centerVertical: true,
            });
        } else {
            var jsonContacto = { IdFactiblidad: $("#HdFacId").val(), NombreContacto: $("#TxtNombreCont").val().trim(), NumeroContacto: $("#TxtTelefonoCont").val().trim(), EmailContacto: $("#TxtEmailCont").val().trim() }
            var res = guadarContactoInfo(jsonContacto);
            var respuesta = res[0];
            if (respuesta == '1') {
                bootbox.alert({
                    title: "<i class='fa fa-check-circle'></i> Confirmación",
                    centerVertical: true,
                    message: "Datos de contacto guardados exitosamente"
                });
            }
        }
    });

    $(document).on('click', "span[rel='verSolicitud']", function () {
        var EquipaId = $(this).attr('data-id');
        $('#HdEquipamientoId').val(EquipaId);
        $('#BtnGuardarEqui').show();
        var dataEquipo = cargaDatosEquipa(EquipaId);
        if (dataEquipo != null || dataEquipo != "") {
            $("#DdlTipoRenta option[value='" + dataEquipo.RentaEqui + "']").prop("selected", "selected");
            $('#LblEquipamiento').text(dataEquipo.DescripcionEqui === null ? '' : dataEquipo.DescripcionEqui);
            $('#TxtNumSerie').val(dataEquipo.NumeroSerie === null ? '' : dataEquipo.NumeroSerie);
            $('#TxtModelo').val(dataEquipo.ModeloEqui === null ? '' : dataEquipo.ModeloEqui);
            $('#CkxEstado').prop('checked', dataEquipo.EstadoEqui === 'Activo' ? true : false);
        }
    });

    $('#BtnGuardarEqui').on('click', function (e) {
        var estado = $("#CkxEstado").prop('checked');
        var validacionDatosEquipamiento = validarEquipamiento();
        if (validacionDatosEquipamiento != true) {
            bootbox.alert({
                title: "<i class='fa fa-exclamation-triangle'></i> Advertencia",
                message: "<p><b>Por favor ingrese campos requeridos.</b></p>" + validacionDatosEquipamiento,
                centerVertical: true,
            });
        } else {
            var jsonEquipamiento = { IdEquipamiento: $("#HdEquipamientoId").val(), ModeloEqui: $("#TxtModelo").val().trim(), RentaEqui: $("#DdlTipoRenta").val(), NumeroSerie: $("#TxtNumSerie").val().trim(), EstadoEqui: (estado == true ? "Activo" : "Inactivo") }
            var res = guardarDatosEquipa(jsonEquipamiento);
            var respuesta = res[0];
            if (respuesta == '1') {
                bootbox.alert({
                    title: "<i class='fa fa-check-circle'></i> Confirmación",
                    centerVertical: true,
                    message: "Datos de equipamiento guardados exitosamente"
                });
            }
            $('#BtnGuardarEqui').hide();
            listarEquipamiento($("#HdFacId").val());
            var FacId = $('#HdFacId').val();
            var dataEqui = cargarDataEquipo(FacId);
            if (dataEqui != null || dataEqui != "") {
                $('#TxtSerialCPE').val(dataEqui.NumeroSerie === null ? '' : dataEqui.NumeroSerie);
                $('#TxtModeloCPE').val(dataEqui.DescripcionEqui === null ? '' : dataEqui.DescripcionEqui);
            }
        }
    });

    $('#BtnGuardarOTM').on('click', function (e) {
        var validacionDatosOT = validarOrdenTrabajo();
        if (validacionDatosOT != true) {
            bootbox.alert({
                title: "<i class='fa fa-exclamation-triangle'></i> Advertencia",
                message: "<p><b>Por favor ingrese campos requeridos.</b></p>" + validacionDatosOT,
                centerVertical: true,
            });
        } else {
            var jsonOT = { IdFactiblidad: $("#HdFacId").val(), DireccionOrigen: $("#TxtDirOrigen").val().trim(), DireccionDestino: $("#TxtDirDestino").val().trim(), NodoAcceso: $("#TxtNodoAcceso").val().trim(), PuertoConex: $("#TxtPuertoConex").val().trim(), Observacion: $("#TxtObservacion").val().trim() }
            var res = guardarDatosOT(jsonOT);
            var respuesta = res[0];
            if (respuesta == '1') {
                bootbox.alert({
                    title: "<i class='fa fa-check-circle'></i> Confirmación",
                    centerVertical: true,
                    message: "Datos de orden de trabajo guardados exitosamente"
                });
            }
        }
    });

    $('#BtnGuardarFechas').on('click', function (e) {
        var jsonCausalidad = { IdFactibilidad: $("#HdFacId").val(), FechaReqUm: $("#TxtFechaReqUM").val(), FechaPlaUm: $("#TxtFechaPlaniUM").val(), FechaReqN2: $("#TxtFechaReqN2").val(), FechaPlaN2: $("#TxtFechaPlaniN2").val() }
        var res = guardarDatosFechas(jsonCausalidad);
        var respuesta = res[0];
        if (respuesta == '1') {
            bootbox.alert({
                title: "<i class='fa fa-check-circle'></i> Confirmación",
                centerVertical: true,
                message: "Datos de fecha de implementación guardados exitosamente"
            });
        }
    });
});

function validarContactos() {
    var arrError = [];
    var nombreContacto = $("#TxtNombreCont").val().trim();
    var emailContacto = $("#TxtEmailCont").val().trim();
    var telefonoContacto = $("#TxtTelefonoCont").val().trim();
    if (nombreContacto == "" || emailContacto == "" || telefonoContacto == "" || nombreContacto.length <= 3 || emailContacto.length <= 3 || telefonoContacto.length <= 3)
        arrError.push("ERROR_DATOSCONTACTO");
    if (nombreContacto.length > 80)
        arrError.push("ERROR_NOMBRECONTACTO");
    if (nombreContacto.length > 50)
        arrError.push("ERROR_EMAILCONTACTO");
    if (nombreContacto.length > 25)
        arrError.push("ERROR_TELFCONTACTO");

    if (arrError.length > 0) {
        var mensajeError = "";
        if (arrError.length > 0) {
            $.each(arrError, function (key, value) {
                mensajeError += mensajeErrorDatosContactos(value);
            });
        }
        return mensajeError;
    } else
        return true;
}

function mensajeErrorDatosContactos(mensaje) {
    var res = "";
    switch (mensaje) {
        case "ERROR_DATOSCONTACTO": res += "<p>* Ingresar información valida en los contactos</p>";
            break;
        case "ERROR_NOMBRECONTACTO": res += "<p>* El nombre de contacto no puede superar los 80 caracteres</p>";
            break;
        case "ERROR_EMAILCONTACTO": res += "<p>* El email de contacto no puede superar los 50 caracteres</p>";
            break;
        case "ERROR_TELFCONTACTO": res += "<p>* El teléfono de contacto no puede superar los 25 caracteres</p>";
            break;
        default:
            break;
    }
    return res;
}

function validarOrdenTrabajo() {
    var arrError = [];
    var dirOrigen = $("#TxtDirOrigen").val().trim();
    var dirDestino = $("#TxtDirDestino").val().trim();
    var nodoAcesso = $("#TxtNodoAcceso").val().trim();
    var prtConexion = $("#TxtPuertoConex").val().trim();
    var Obser = $("#TxtObservacion").val().trim();
    if (dirOrigen == "" || dirDestino == "" || nodoAcesso == "" || prtConexion == "" || Obser == "" ||
        dirOrigen.length <= 3 || dirDestino.length <= 3 || nodoAcesso.length <= 3 || prtConexion.length <= 1 || Obser.length <= 3)
        arrError.push("ERROR_DATOSOT");
    if (dirOrigen.length > 200)
        arrError.push("ERROR_DIRORIGEN");
    if (dirDestino.length > 200)
        arrError.push("ERROR_DIRDESTINO");
    if (nodoAcesso.length > 80)
        arrError.push("ERROR_NODOACCESO");
    if (prtConexion.length > 50)
        arrError.push("ERROR_PRTCONE");
    if (Obser.length > 400)
        arrError.push("ERROR_OBSER");

    if (arrError.length > 0) {
        var mensajeError = "";
        if (arrError.length > 0) {
            $.each(arrError, function (key, value) {
                mensajeError += mensajeErrorDatosOT(value);
            });
        }
        return mensajeError;
    } else
        return true;
}

function mensajeErrorDatosOT(mensaje) {
    var res = "";
    switch (mensaje) {
        case "ERROR_DATOSOT": res += "<p>* Ingresar información valida para la orden de trabajo</p>";
            break;
        case "ERROR_DIRORIGEN": res += "<p>* La dirección origen no puede superar los 200 caracteres</p>";
            break;
        case "ERROR_DIRDESTINO": res += "<p>* La dirección destino no puede superar los 200 caracteres</p>";
            break;
        case "ERROR_NODOACCESO": res += "<p>* El nodo acceso no puede superar los 80 caracteres</p>";
            break;
        case "ERROR_PRTCONE": res += "<p>* El puerto de conexión no puede superar los 50 caracteres</p>";
            break;
        case "ERROR_OBSER": res += "<p>* La observación no puede superar los 400 caracteres</p>";
            break;
        default:
            break;
    }
    return res;
}

function validarEquipamiento() {
    var arrError = [];
    var modelo = $("#TxtModelo").val().trim();
    var numeroSerie = $("#TxtNumSerie").val().trim();
    var tipo = $("#DdlTipoRenta").val();
    if (modelo == "" || numeroSerie == "" || modelo.length <= 3 || numeroSerie.length <= 3)
        arrError.push("ERROR_EQUIPAMIENTO");
    if (modelo.length > 40)
        arrError.push("ERROR_MODELO");
    if (numeroSerie.length > 80)
        arrError.push("ERROR_NUMEROSERIE");
    if (tipo.length == "")
        arrError.push("ERROR_TIPO");

    if (arrError.length > 0) {
        var mensajeError = "";
        if (arrError.length > 0) {
            $.each(arrError, function (key, value) {
                mensajeError += mensajeErrorDatosEquipamiento(value);
            });
        }
        return mensajeError;
    } else
        return true;
}

function mensajeErrorDatosEquipamiento(mensaje) {
    var res = "";
    switch (mensaje) {
        case "ERROR_EQUIPAMIENTO": res += "<p>* Ingresar información valida en equipamiento</p>";
            break;
        case "ERROR_MODELO": res += "<p>* El modelo no puede superar los 40 caracteres</p>";
            break;
        case "ERROR_NUMEROSERIE": res += "<p>* El número de serie no puede superar los 80 caracteres</p>";
            break;
        case "ERROR_TIPO": res += "<p>* Seleccione un tipo</p>";
            break;
        default:
            break;
    }
    return res;
}