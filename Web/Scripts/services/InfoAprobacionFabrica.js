$(document).ready(function () {
    $('#BtnEnviarActivacion').on('click', function (e) {
        e.preventDefault();
        $('#myModalActivacion').modal('show');
    });

    $('#VerHisPermisos').on('click', function (e) {
        var DetaPerId = $('#HdPermisoDetaId').val();
        $('#myModalData').modal('show');
        cargarHisPermisos(DetaPerId);
    });
});

function VerPermisos(IdPermiso) {
    $('#myModalData').modal('show');
    cargaPermiso(IdPermiso);
}