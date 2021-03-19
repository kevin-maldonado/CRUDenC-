using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Negocios;
using Entidad;
namespace Web
{
    public partial class Crud : System.Web.UI.Page
    {
        private LogicaPersona lgPer = new LogicaPersona();
        private InfoPersona infPer = new InfoPersona();
        db_personasDataContext dc = new db_personasDataContext();
        
        
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                BtnBorrar.Attributes.Add("OnClick", "return confirm('¿Desea eliminar el Cliente?');");
                Carga();
            }

        }
        //limpiar Campos
        private void limpiar()
        {
            TxtCodigo.Text = String.Empty;
            TxtNombres.Text = String.Empty;
            TxtApellidos.Text = String.Empty;
            TxtEdad.Text = String.Empty;
            TxtTelefono.Text = String.Empty;
            TxtEmail.Text = String.Empty;
            TxtFechaNacimiento.Text = String.Empty;
            TxtGenero.Text = String.Empty;
            
        }
        ////listar
        //private void listar()
        //{
        //    dataGridView1.AutoGenerateColumns = false;
        //    dataGridView1.DataSource = clsPrueba.listar();
        //}

        ////obtener
        //private void obtener(int key)
        //{
        //    Personas objeto = lgPer.ObtenerPersonas(key);
        //    txtnombre.Text = objeto.nombre;
        //    txtapellido.Text = objeto.apellido;
        //    txtdni.Text = objeto.dni;
        //}
        public const int PAGE_SIZE = 10;
        protected void LinqDataSource_Selecting(object sender, LinqDataSourceSelectEventArgs e)
        {
            // LINQ query
            var query = from Personas in dc.Personas select Personas;
            // Set the total count
            // so GridView knows how many pages to create
            e.Arguments.TotalRowCount = query.Count();
            // Get only the rows we need for the page requested
            query = query.Skip(WdgPersonas.PageIndex * PAGE_SIZE).Take(PAGE_SIZE);
            e.Result = query;
        }
        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                infPer.Codigo = Convert.ToInt32(TxtCodigo.Text);
                infPer.Nombres = TxtNombres.Text;
                infPer.Apellidos = TxtApellidos.Text;
                infPer.Edad = Convert.ToInt32(TxtEdad.Text);
                infPer.Telefono = TxtTelefono.Text;
                infPer.Email = TxtEmail.Text;
                infPer.FechaNacimiento = DateTime.Parse(TxtFechaNacimiento.Text);
                infPer.Genero = Char.Parse(TxtGenero.Text);
                lgPer.GuardarDatos(infPer);
                lblMensaje.Text = "Persona Guardada Exitosamente";
                limpiar();
                Carga();
            }
            catch (Exception ex)
            {
                lblMensaje.Text = ex.Message.ToString();
            }
        }
        //protected void btnBuscar_Click(object sender, EventArgs e)
        //{
        //    try
        //    {
        //        infPer.Codigo = Convert.ToInt32(TxtCodigo.Text);
        //        infPer.Nombres = TxtNombres.Text;
        //        infPer.Apellidos = TxtApellidos.Text;
        //        infPer.Edad = Convert.ToInt32(TxtEdad.Text);
        //        infPer.Telefono = TxtTelefono.Text;
        //        infPer.Email = TxtEmail.Text;
        //        infPer.FechaNacimiento = DateTime.Parse(TxtFechaNacimiento.Text);
        //        infPer.Genero = Char.Parse(TxtGenero.Text);
        //        lgPer.GuardarDatos(infPer);
        //        lblMensaje.Text = "Cliente Actualizado Correctamente";
        //    }
        //    catch (Exception ex)
        //    {
        //        lblMensaje.Text = ex.Message.ToString();
        //    }
        //}
        protected void BtnActualizar_Click(object sender, EventArgs e)
        {
            try
            {
                Personas infrPer = new Personas();
                infPer.Codigo = Convert.ToInt32(TxtCodigo.Text);
                infPer.Nombres = TxtNombres.Text;
                infPer.Apellidos = TxtApellidos.Text;
                infPer.Edad = Convert.ToInt32(TxtEdad.Text);
                infPer.Telefono = TxtTelefono.Text;
                infPer.Email = TxtEmail.Text;
                infPer.FechaNacimiento = DateTime.Parse(TxtFechaNacimiento.Text);
                infPer.Genero = Char.Parse(TxtGenero.Text);
                lgPer.ActualizarDatos(infPer);
                lblMensaje.Text = "Persona Actualizada Exitosamente";
                limpiar();
                Carga();
            }
            catch (Exception ex)
            {
                lblMensaje.Text = ex.Message.ToString();
            }
        }
        protected void BtnBorrar_Click(object sender, EventArgs e)
        {
            try
            {
                Personas infrPer = new Personas();
                infPer.Codigo = Convert.ToInt32(TxtCodigo.Text);
                infPer.Nombres = TxtNombres.Text;
                infPer.Apellidos = TxtApellidos.Text;
                infPer.Edad = Convert.ToInt32(TxtEdad.Text);
                infPer.Telefono = TxtTelefono.Text;
                infPer.Email = TxtEmail.Text;
                infPer.FechaNacimiento = DateTime.Parse(TxtFechaNacimiento.Text);
                infPer.Genero = Char.Parse(TxtGenero.Text);
                lgPer.EliminarDatos(infPer);
                lblMensaje.Text = "Persona Elminada Exitosamente";
                limpiar();
                Carga();
            }
            catch (Exception ex)
            {
                lblMensaje.Text = ex.Message.ToString();
            }
            
        }
        protected void WdgPersonas_PageIndexChanging(object sender, System.Web.UI.WebControls.GridViewPageEventArgs e)
        {
            try
            {
                WdgPersonas.PageIndex = e.NewPageIndex;
                this.WdgPersonas.DataBind();
            }
            catch (Exception ex)
            {
                lblMensaje.Text = ex.Message.ToString();
            }
        }
        ////para filtrar por nombres
        //protected void BtnBuscar_Click(object sender, EventArgs e)
        //{

        //    try
        //    {
        //        ////int codi = int.Parse(this.Textfiltro.Text);
        //        ////var xi = from x in dc.Personas
        //        ////         where x.Codigo == codi
        //        ////         select x;

        //        ////WdgPersonas.DataBind();
        //    }
        //    catch (Exception ex)
        //    {
        //        lblMensaje.Text = ex.Message.ToString();
        //    }


        //}
        protected void Timer1_Tick1(object sender, EventArgs e)
        {
            this.WdgPersonas.DataBind();
        }
       
        protected void DropDownList_SelectedIndexChanged(object sender, EventArgs e)
        {
            WdgPersonas.PageSize = Convert.ToInt32(DdlList.SelectedValue);
            WdgPersonas.DataSource = lgPer;
            WdgPersonas.DataBind();
        }
        //carga datos en el grid
        void Carga()
        {
            this.WdgPersonas.DataBind();
        }
    }
}
