$(document).ready(function () {
    $('#BtnGuardarServicio').on('click', function (e) {
        var ckrouter = $("#CkLblRouterInt").prop('checked');
        var rbTcp = "";
        var rcProto = "";
        if ($("#RbTcpIPv4").prop('checked') == true) {
            rbTcp = "IPv4";
        }
        else {
            rbTcp = "IPv4/IPv6";
        }

        if ($("#RbProtocoloSta").prop('checked')  == true) {
            rcProto = "Estático";
        }
        else {
            rcProto = "Dinámico";
        }
        var ipMonitoreo = $("#TxtIpMonitoreo").val().trim();
        var vlan = $("#TxtVlan").val().trim();
        var wan = $("#TxtWan").val().trim();
        var lan = $("#TxtLan").val().trim();
        var router = $("#TxtDesRouter").val().trim();
        var idSuscripcion = $("#TxtSuscripcion").val().trim();
        var protocolo = $("#TxtProcoloEnru").val();

        var validacionServicios = validarServicio();
        if (validacionServicios != true) {
            bootbox.alert({
                title: "<i class='fa fa-exclamation-triangle'></i> Advertencia",
                message: "<p><b>Por favor ingrese campos requeridos.</b></p>" + validacionServicios,
                centerVertical: true,
            });
        } else {
            var jsonServicioFac = { IdFactibilidad: $("#HdFacId").val(), IdOfeServicios: $("#HdOfeSerId").val(), NombreServicio: $("#HdServicioNombre").val(), IpMonitoreo: ipMonitoreo, VlanServicio: vlan, WanServicio: wan, TcpipServicio: rbTcp, LanServicio: lan, ProtocoloEnru: rcProto, RouterIntermeio: ckrouter, DescripRouterIntermedio: router, TipoProtocolo: protocolo, IpSuscripcion: idSuscripcion }
            var res = guardarDatoServicioFac(jsonServicioFac);
            var respuesta = res[0];
            if (respuesta == '1') {
                bootbox.alert({
                    title: "<i class='fa fa-check-circle'></i> Confirmación",
                    centerVertical: true,
                    message: "Datos de servicios guardados exitosamente"
                });
            }
        }
    });
});

function validarServicio() {
    var arrError = [];
    var ipMonitoreo = $("#TxtIpMonitoreo").val().trim();
    var vlan = $("#TxtVlan").val().trim();
    var wan = $("#TxtWan").val().trim();
    var lan = $("#TxtLan").val().trim();
    var router = $("#TxtDesRouter").val().trim();
    var idSuscripcion = $("#TxtSuscripcion").val().trim();
    var protocolo = $("#TxtProcoloEnru").val();

    if (ipMonitoreo == "" || vlan == "" || wan == "" || lan == "" || idSuscripcion == ""  ||
        ipMonitoreo.length < 2 || vlan.length < 2 || wan.length < 2 || lan.length < 2 || idSuscripcion.length < 2 )
        arrError.push("ERROR_SERVICIOS");
    if (ipMonitoreo.length > 225)
        arrError.push("ERROR_IPMONITOREO");
    if (vlan.length > 120)
        arrError.push("ERROR_VLAN");
    if (wan.length > 225)
        arrError.push("ERROR_WAN");
    if (lan.length > 300)
        arrError.push("ERROR_LAN");
    if (router.length > 300)
        arrError.push("ERROR_ROUTER");
    if (idSuscripcion.length > 20)
        arrError.push("ERROR_IDSUSCRIPCION");
    if (protocolo.length > 90)
        arrError.push("ERROR_PROTOCOLO");

    if (arrError.length > 0) {
        var mensajeError = "";
        if (arrError.length > 0) {
            $.each(arrError, function (key, value) {
                mensajeError += mensajeErrorServicios(value);
            });
        }
        return mensajeError;
    } else
        return true;
}

function mensajeErrorServicios(mensaje) {
    var res = "";
    switch (mensaje) {
        case "ERROR_SERVICIOS": res += "<p>* Ingresar información valida en los datos del servicio</p>";
            break;
        case "ERROR_IPMONITOREO": res += "<p>* La ip de monitoreo no puede superar los 225 caracteres</p>";
            break;
        case "ERROR_VLAN": res += "<p>* La VLAN no puede superar los 120 caracteres</p>";
            break;
        case "ERROR_WAN": res += "<p>* La Red WAN no puede superar los 225 caracteres</p>";
            break;
        case "ERROR_LAN": res += "<p>* La Red LAN no puede superar los 300 caracteres</p>";
            break;
        case "ERROR_ROUTER": res += "<p>* El protocolo de enrutamiento no puede superar los 300 caracteres</p>";
            break;
        case "ERROR_IDSUSCRIPCION": res += "<p>* El ID Suscripción no puede superar los 20 caracteres</p>";
            break;
        case "ERROR_PROTOCOLO": res += "<p>* El protocolo no puede superar los 90 caracteres</p>";
            break;
        default:
            break;
    }
    return res;
}
