<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Crud.aspx.cs" Inherits="Web.Crud" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">CRUD CON LINQ TO SQ</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Ingrese Sus Datos Por Favor :</h6>
              <!--Ingreso de datos-->
                     <div class="form-row">
                         <div class="table">
                             <!--label and input-->
                             <div class="form-row">
                                     <div class="form-group col-md-6">
                                         <asp:Label ID="Label1" runat="server" class="col-sm-2 col-form-label" Text="Código:"></asp:Label>

                                         <asp:TextBox ID="txtCodigo" runat="server" class="form-control" placeholder="Codigo" ToolTip="Solo números enteros (int primary key)" type="codigo" Width="100px"></asp:TextBox>
                                     </div>
                                 <div class="form-group col-md-6">
                                         <asp:Label ID="Label2" runat="server" class="col-sm-2 col-form-label" Text="Nombres:"></asp:Label>
                                         <asp:TextBox ID="txtNombres" runat="server" class="form-control" placeholder="Nombres" ToolTip="Ingresar Nombres (varchar)" type="nombres" ></asp:TextBox>

                                     </div>
                            </div>
                             <div class="form-row">
                                     
                                    <div class="form-group col-md-6">
                                         <asp:Label ID="Label3" runat="server" class="col-sm-2 col-form-label" Text="Apellidos:"></asp:Label>
                                         <asp:TextBox ID="txtApellidos" runat="server" class="form-control" placeholder="Apellidos" ToolTip="Ingresar Apellidos (varchar)" type="apellido" ></asp:TextBox>
                            
                                    </div>
                                 <div class="form-group col-md-6">
                                         <asp:Label ID="Label5" runat="server" class="col-sm-2 col-form-label" Text="Teléfono:"></asp:Label>
                                         <asp:TextBox ID="txtTelefono" runat="server" class="form-control" placeholder="Telefono" ToolTip="Ingresar teléfono (varchar)" type="telefono" ></asp:TextBox>
                                 </div>
                             </div>
                             <div class="form-row">
                                 
                                <div class="form-group col-md-6">
                                         <asp:Label ID="Label6" runat="server" class="col-sm-2 col-form-label" Text="Edad:"></asp:Label>
                                         <asp:TextBox ID="txtEdad" runat="server" class="form-control" placeholder="Edad" ToolTip="Ingresar edad (int)" type="edad" ></asp:TextBox>
                                         <br />
                                 </div>
                                   <div class="form-group col-md-6">
                                         <asp:Label ID="Label9" runat="server" class="col-sm-2 col-form-label" Text="FechaNacimiento:"></asp:Label>
                                         <asp:TextBox ID="TextBox4" runat="server" class="form-control" placeholder="FechaNacimiento" ToolTip="Ingresarsu fecha de nacimiento(varchar)" type="FechaNacimiento" ></asp:TextBox>
                            
                                    </div>
  
                            </div>
                             <div class="form-row">
                                  
                                  
                             </div>
                             <div class="form-row">
                                     <div class="form-group col-md-6">
                                         <asp:Label ID="Label4" runat="server" class="col-sm-2 col-form-label" Text="Precio:"></asp:Label>
                                         <asp:TextBox ID="TextBox1" runat="server" class="form-control" placeholder="Precio" ToolTip="Ingresar el precio (varchar)" type="Precio" ></asp:TextBox>
                                     </div>

                             </div>

                             <!-- botones-->
                            
                            <div class="col-lg-6">
                                
                            <h6 class="m-0 font-weight-bold text-primary">seleccionar la accion por favor :</h6>
                                          <%--<asp:Button ID="btnGrabar" runat="server" CssClass=" btn btn-success" OnClick="btnGrabar_Click" Text="Grabar" />
                                          <asp:Button ID="btnBuscar" runat="server" CssClass=" btn btn-secondary" OnClick="btnBuscar_Click" Text="Buscar" />
                                          <asp:Button ID="btnActualizar" runat="server" CssClass="btn btn-info" OnClick="btnActualizar_Click" Text="Actualizar" />
                                          <asp:Button ID="btnBorrar" runat="server" CssClass=" btn btn-danger" OnClick="btnBorrar_Click" Text="Borrar" />--%>
                                </div>
                           
                             <!--Mensaje de alerta-->
                            <div class="alert alert-primary" role="alert">
                                     <asp:Label ID="lblMensaje" runat="server" style="font-weight: 600;" class="alert alert-success" role="alert"></asp:Label>
                            </div>

                            <!--PARTE DE LA TABLES-->

                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"><div class="dataTables_length" id="example_length"><label>Mostrar <select name="example_length" aria-controls="example" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> registros</label>
                                                                    </div></div><div class="auto-style1">
                                          <%-- <%--filtracion de datos--%>    
                                        <div id="example_filter" class="dataTables_filter">
                                            <label>Buscar:
                                                <asp:TextBox ID="Textfiltro" runat="server" class="form-control" placeholder="Codigo" ></asp:TextBox></label>
<%--                                            <asp:Button ID="btnfilter" runat="server" CssClass=" btn btn-secondary" OnClick="btnFiltrar_Click" Text="Buscar" />--%>
                                        </div>

                                        </div>
                                    <div class="col-lg-12">
                                        <div class="table-responsive"> 
                                                <table id="example1" class="table table-striped table-bordered" style="width:100%">
                                    
                                                <!--parte del gridwieb-->
                                                     <tr>
                                             
                                                         <td >
                                                             

                                                             <%--<asp:ScriptManager ID="ScriptManager1" runat="server">
                                                             </asp:ScriptManager>--%>
                                                             <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                                                 <ContentTemplate>

<%--                                                             <asp:Timer ID="Timer1" runat="server" Interval="1000" OnTick="Timer1_Tick1"></asp:Timer>--%>
<%--                                                                <asp:GridView  AllowPaging="True" AutoGenerateColumns="False" DataSourceID="LinqDataSource" ID="GridDatos" PageSize="<%# PAGE_SIZE %>" runat="server" Width="100%">
                                                                 <AlternatingRowStyle BackColor="White" />
                                                                 <Columns>
                                                                     <asp:BoundField DataField="Codigo" HeaderText="Codigo" ReadOnly="True" SortExpression="Codigo" />
                                                                     <asp:BoundField DataField="nombres" HeaderText="Nombres" ReadOnly="True" SortExpression="Nombres" />
                                                                     <asp:BoundField DataField="Apellidos" HeaderText="Apellidos" ReadOnly="True" SortExpression="Apellidos" />
                                                                     <asp:BoundField DataField="Telefono" HeaderText="Telefono" ReadOnly="True" SortExpression="Telefono" />
                                                                     <asp:BoundField DataField="Edad" HeaderText="Edad" ReadOnly="True" SortExpression="Edad" />
                                                                 </Columns>
                                                                 <FooterStyle BackColor="#4e73df" Font-Bold="True" ForeColor="White" />
                                                                 <HeaderStyle BackColor="#4e73df" Font-Bold="True" ForeColor="White" />
                                                                 <PagerSettings FirstPageText="Primera" LastPageText="Ultima" NextPageText="Siguiente" PreviousPageText="Anterior" Mode="NumericFirstLast" />
                                                                 <PagerStyle BackColor="#4e73df" ForeColor="White" HorizontalAlign="Center" CssClass="pagination-mg" />
                                                                 <RowStyle BackColor="#F3F6F7" ForeColor="#333333" />
                                                                 <SelectedRowStyle BackColor="#9DA1A2" Font-Bold="True" ForeColor="Navy" />
                                                                 <SortedAscendingCellStyle BackColor="#F3F6F7" />
                                                                 <SortedAscendingHeaderStyle BackColor="#4D0000" />
                                                                 <SortedDescendingCellStyle BackColor="#E8EBEC" />
                                                                 <SortedDescendingHeaderStyle BackColor="#820000" />
                                                                 
                                                             </asp:GridView>--%>

                                                             <!--PARTE DEL PAGIADOR-->
<%--                                                                 <asp:LinqDataSource ID="LinqDataSource" runat="server"  AutoPage="False" ContextTypeName="LINQ_DDM.DataClassesDataContext" EntityTypeName="" 
                                                                     OnSelecting="LinqDataSource_Selecting" Select="new (Codigo, Nombres, Apellidos, Telefono, Edad)" TableName="Alumnos">
                                                                                                
                                                                 </asp:LinqDataSource>--%>
                                                             
<br />
                                                                 </ContentTemplate>
                                                             </asp:UpdatePanel>

                                                             <br />
                                                            
                                                         </td>
                                                     </tr>                          
                                               </table>
                                        </div>
                                     </div>
                                </div>
                            </div>


                             <!--Ejemplo tabla con DataTables para implementar-->
                     </div>
                     </div>
                     
            </div>
          </div>
        

        </div>

        <!-- End of Topbar -->

       
        <!-- /.container-fluid -->

      <!-- End of Main Content -->

      

</asp:Content>
