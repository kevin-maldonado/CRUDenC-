$(document).ready(function () {
    if ($("#MainContent_WrbSi").prop('checked')== true) {
        $("#FrmDatos").validate({
            rules: {
                'ctl00$MainContent$TxtCRQ': {
                    required: true,
                    maxlength: 80
                },
                'ctl00$MainContent$TxtAsunto': {
                    required: true,
                    maxlength: 255
                },
                'ctl00$MainContent$TxtMensaje': {
                    required: true,
                    maxlength: 255
                },
                'ctl00$MainContent$DdlUsuarioN3': {
                    required: true
                } 
            },
            messages: {
                'ctl00$MainContent$TxtCRQ': {
                    required: "Ingrese el CRQ",
                    maxlength: "El CRQ no puede superar los 80 caracteres"
                },
                'ctl00$MainContent$TxtAsunto': {
                    required: "Ingrese el Asunto",
                    maxlength: "El Asunto no puede superar los 255 caracteres"
                },
                'ctl00$MainContent$TxtMensaje': {
                    required: "Ingrese el Mensaje",
                    maxlength: "El Mensaje no puede superar los 255 caracteres"
                },
                'ctl00$MainContent$DdlUsuarioN3': {
                    required: "Seleccione un usuario N3 Postventa"
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
    }         

    $(document).on('click', "#MainContent_WrbSi", function (e) {
        $("#FrmDatos").validate({
            rules: {
                'ctl00$MainContent$TxtCRQ': {
                    required: true,
                    maxlength: 80
                },
                'ctl00$MainContent$TxtAsunto': {
                    required: true,
                    maxlength: 255
                },
                'ctl00$MainContent$TxtMensaje': {
                    required: true,
                    maxlength: 255
                },
                'ctl00$MainContent$DdlUsuarioN3': {
                    required: true
                }            
            },
            messages: {
                'ctl00$MainContent$TxtCRQ': {
                    required: "Ingrese el CRQ",
                    maxlength: "El CRQ no puede superar los 80 caracteres"
                },
                'ctl00$MainContent$TxtAsunto': {
                    required: "Ingrese el Asunto",
                    maxlength: "El Asunto no puede superar los 255 caracteres"
                },
                'ctl00$MainContent$TxtMensaje': {
                    required: "Ingrese el Mensaje",
                    maxlength: "El Mensaje no puede superar los 255 caracteres"
                },
                'ctl00$MainContent$DdlUsuarioN3': {
                    required: "Seleccione un usuario N3 Postventa"
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

    $(document).on('click', "#MainContent_WrbNo", function (e) {
        var form = $('#FrmDatos').get(0);
        $.removeData(form, 'validator');

        $("#FrmDatos").validate({
            rules: {
                'ctl00$MainContent$TxtCRQ': {
                    required: true,
                    maxlength: 80
                },
                'ctl00$MainContent$DdlUsuarioN3': {
                    required: true
                }
            },
            messages: {
                'ctl00$MainContent$TxtCRQ': {
                    required: "Ingrese el CRQ",
                    maxlength: "El CRQ no puede superar los 80 caracteres"
                },
                'ctl00$MainContent$DdlUsuarioN3': {
                    required: "Seleccione un usuario N3 Postventa"
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
});
