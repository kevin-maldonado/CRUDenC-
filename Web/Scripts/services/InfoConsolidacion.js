$(document).ready(function () {
    $('#BtnEditarContac').hide(); $('#TxtNombreContac').hide(); $('#TxtNumeroContac').hide(); $('#EdicionDir').hide(); $('#TxtEmailContac').hide();
    $(document).on('click', "#BtnEditar", function () {
        $('#BtnEditarContac').show(); $('#TxtNombreContac').show(); $('#TxtNumeroContac').show(); $('#EdicionDir').show(); $('#TxtEmailContac').show();
        $('#BtnEditar').hide(); $('#LblNombreContac').hide(); $('#LblNumeroContac').hide(); $('#VerDir').hide(); $('#LblEmailContac').hide();
    });
    $(document).on('click', "#BtnEditarContac", function () {
        $('#BtnEditarContac').hide(); $('#TxtNombreContac').hide(); $('#TxtNumeroContac').hide(); $('#EdicionDir').hide(); $('#TxtEmailContac').hide();
        $('#BtnEditar').show(); $('#LblNombreContac').show(); $('#LblNumeroContac').show(); $('#VerDir').show(); $('#LblEmailContac').show();
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