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