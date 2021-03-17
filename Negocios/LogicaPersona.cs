using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidad;
using System.Web;

namespace Negocios
{
    public class LogicaPersona
    {
        db_personasDataContext dc = new db_personasDataContext();

        public string[] GuardarDatos(Persona perso)
        {
            string[] retorna = new string[2];
            try
            {
                var datosPerso = dc.Personas.Where(p => p.Id == perso.Id).Select(f => f).FirstOrDefault();
                datosPerso.Codigo = perso.Codigo;
                datosPerso.Nombres = perso.Nombres;
                datosPerso.Apellidos = perso.Apellidos;
                datosPerso.Edad = perso.Edad;
                datosPerso.Telefono = perso.Telefono;
                datosPerso.Email = perso.Email;
                datosPerso.FechaNacimineto = perso.FechaNacimineto;
                datosPerso.Genero = perso.Genero;
                datosPerso.Precio = perso.Precio;
                datosPerso.Estado = perso.Estado;
                datosPerso.FechaRegistro = perso.FechaRegistro;
                
                dc.SubmitChanges();
                retorna[0] = "1";
                retorna[1] = "";
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
                retorna[0] = "0";
                retorna[1] = "Error:" + ex.Message;
                //oLog.Add("LOG - Edicion de Campos - Consolidacion - InfoConsolidacion.aspx - Error:" + ex.Message);
            }
            return retorna;
        }
    }
}
