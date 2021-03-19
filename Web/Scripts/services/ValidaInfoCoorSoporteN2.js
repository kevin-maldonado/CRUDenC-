$(document).ready(function () {
    $('#VerHisPermisos').on('click', function (e) {
        var DetaPerId = $('#HdPermisoDetaId').val();
        $('#myModalData').modal('show');
        cargarHisPermisos(DetaPerId);
    });

    $("#FrmDatos").validate({
        rules: {
            'ctl00$MainContent$DdlUsuarioN2': {
                required: true,                
            },            
        },
        messages: {
            'ctl00$MainContent$DdlUsuarioN2': {
                required: "Seleccione el usuario N2 de soporte",               
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            var elm = $(element);
            if (elm.parent('.input-group').length || elm.parent('.input-group-custom').length) {
                error.insertAfter(elm.parent());
            } else {
                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.next("label"));
                } else {
                    error.insertAfter(element);
                }
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });
});

function VerPermisos(IdPermiso) {
    $('#myModalData').modal('show');
    cargaPermiso(IdPermiso);
}