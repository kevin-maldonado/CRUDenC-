$(document).ready(function () {
    $("#FrmDatos").validate({
        rules: {
            'ctl00$MainContent$TxtObsConsolidacion': {
                required: true,
                maxlength: 400
            },
            'ctl00$MainContent$TxtCRQ': {
                required: true,
                maxlength: 80
            },
            'ctl00$MainContent$TxtDesRouter': {
                maxlength: 200
            },
            'ctl00$MainContent$TxtTipoProtocolo': {
                maxlength: 90
            }
        },
        messages: {
            'ctl00$MainContent$TxtObsConsolidacion': {
                required: "Ingrese la observación",
                maxlength: "La observación no puede superar los 400 caracteres"
            },
            'ctl00$MainContent$TxtCRQ': {
                required: "Ingrese el CRQ",
                maxlength: "El CRQ no puede superar los 80 caracteres"
            },
            'ctl00$MainContent$TxtDesRouter': {
                maxlength: "La observación no puede superar los 200 caracteres"
            },
            'ctl00$MainContent$TxtTipoProtocolo': {
                maxlength: "El protocolo de enrutamiento no puede superar los 90 caracteres"
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