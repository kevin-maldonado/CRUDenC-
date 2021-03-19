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

        public List<Personas> Listar()
        {
            try
            {
                List<Personas> list = dc.Personas.ToList();
                return list;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //obtener Personas
        public Personas ObtenerPersonas(int key)
        {
            try
            {
                Personas datosPer = dc.Personas.Single(p => p.Id == key);
                return datosPer;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //Guardar Datos
        public void GuardarDatos(InfoPersona info)
        {
            try
            {
                //var datosPer = dc.Personas.Where(p => p.Id == info.Id).Select(p => p).FirstOrDefault();
                Personas datosPer = new Personas();
                datosPer.Codigo = info.Codigo;
                datosPer.Nombres = info.Nombres;
                datosPer.Apellidos = info.Apellidos;
                datosPer.Edad = info.Edad;
                datosPer.Telefono = info.Telefono;
                datosPer.Email = info.Email;
                datosPer.FechaNacimiento = info.FechaNacimiento;
                datosPer.Genero = info.Genero;
                datosPer.Precio = info.Precio;
                datosPer.Estado = true;
                datosPer.FechaRegistro = DateTime.Now;
                dc.Personas.InsertOnSubmit(datosPer);
                dc.SubmitChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //eliminar datos 
        public void EliminarDatos(InfoPersona info)
        {
            Personas datosPer = dc.Personas.Single(p => p.Codigo == info.Codigo);
            dc.Personas.DeleteOnSubmit(datosPer);
            dc.SubmitChanges();

        }
        //Actualizar Datos
        public void ActualizarDatos(InfoPersona info)
        {
            Personas datosPer = dc.Personas.Single(p => p.Codigo == info.Codigo);
            datosPer.Codigo = info.Codigo;
            datosPer.Nombres = info.Nombres;
            datosPer.Apellidos = info.Apellidos;
            datosPer.Edad = info.Edad;
            datosPer.Telefono = info.Telefono;
            datosPer.Email = info.Email;
            datosPer.FechaNacimiento = info.FechaNacimiento;
            datosPer.Genero = info.Genero;
            datosPer.Precio = info.Precio;
            datosPer.Estado = true;
            datosPer.FechaRegistro = DateTime.Now;
            dc.SubmitChanges();
        }
    }
}
