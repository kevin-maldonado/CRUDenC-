$(document).ready(function () {

    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
    var maxLimitDate = new Date(nowDate.getFullYear() + 1, nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

    //$(".fecha").attr("readonly", "readonly");

    $('.fecha').daterangepicker({
        drops: "down",
        minDate: today,
        maxDate: maxLimitDate,
        singleDatePicker: true,        
        "locale": {
            "format": "MM-DD-YYYY",
            "separator": " - ",
            "applyLabel": "Guardar",
            "cancelLabel": "Cancelar",
            "fromLabel": "Desde",
            "toLabel": "Hasta",
            "customRangeLabel": "Personalizar",
            "daysOfWeek": [
                "Do",
                "Lu",
                "Ma",
                "Mi",
                "Ju",
                "Vi",
                "Sa"
            ],
            "monthNames": [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ],
            "firstDay": 1
        }
    });
});