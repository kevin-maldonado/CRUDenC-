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
                                <asp:Label ID="LblCodigo" runat="server" class="col-sm-2 col-form-label" Text="Código:"></asp:Label>
                                <asp:TextBox ID="TxtCodigo" runat="server" class="form-control" placeholder="Codigo" ToolTip="Solo números enteros " type="codigo" Width="100px"></asp:TextBox>
                            </div>

                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <asp:Label ID="LblNombres" runat="server" class="col-sm-2 col-form-label" Text="Nombres:"></asp:Label>
                                <asp:TextBox ID="TxtNombres" runat="server" class="form-control" placeholder="Nombres" ToolTip="Ingrese Sus Nombres " ></asp:TextBox>

                            </div>
                            <div class="form-group col-md-6">
                                <asp:Label ID="LblApellidos" runat="server" class="col-sm-2 col-form-label" Text="Apellidos:"></asp:Label>
                                <asp:TextBox ID="TxtApellidos" runat="server" class="form-control" placeholder="Apellidos" ToolTip="Ingrese Sus Apellidos" ></asp:TextBox>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <asp:Label ID="LblTelefono" runat="server" class="col-sm-2 col-form-label" Text="Teléfono:"></asp:Label>
                                <asp:TextBox ID="TxtTelefono" runat="server" class="form-control" placeholder="Telefono" ToolTip="Ingresar teléfono " ></asp:TextBox>
                            </div>
                            <div class="form-group col-md-6">
                                <asp:Label ID="LblEdad" runat="server" class="col-sm-2 col-form-label" Text="Edad:"></asp:Label>
                                <asp:TextBox ID="TxtEdad" runat="server" class="form-control" placeholder="Edad" ToolTip="Ingresar edad" ></asp:TextBox>
                                <br />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <asp:Label ID="LblEmail" runat="server" class="col-sm-2 col-form-label" Text="Email:"></asp:Label>
                                <asp:TextBox ID="TxtEmail" runat="server" class="form-control" placeholder="Email" ToolTip="Ingrese su Email" ></asp:TextBox>
                                <br />
                            </div>
                            <div class="form-group col-md-6">
                                <asp:Label ID="LblGenero" runat="server" class="col-sm-2 col-form-label" Text="Genero:"></asp:Label>
                                <asp:TextBox ID="TxtGenero" runat="server" class="form-control" placeholder="Genero" ToolTip="Seleccione el genero" ></asp:TextBox>
                                <br />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <asp:Label ID="LblFechaNacimiento" runat="server" class="col-sm-2 col-form-label" Text="Fecha de Nacimiento:"></asp:Label>
                                <asp:TextBox ID="TxtFechaNacimiento" runat="server" class="form-control" placeholder="Fecha de Nacimiento" ToolTip="Ingresarsu fecha de nacimiento" ></asp:TextBox>
                            </div>
                            
                        </div>
                        
                        <!-- botones-->
                        <div class="col-lg-6">
                            <h6 class="m-0 font-weight-bold text-primary">seleccionar la accion por favor :</h6>
                            <asp:Button ID="BtnGuardar" runat="server" CssClass=" btn btn-success" OnClick="BtnGuardar_Click" Text="Guardar" />
                            <asp:Button ID="BtnBuscar" runat="server" CssClass=" btn btn-secondary" OnClick="BtnBuscar_Click" Text="Buscar" />
                            <asp:Button ID="BtnActualizar" runat="server" CssClass="btn btn-info" OnClick="BtnActualizar_Click" Text="Actualizar" />
                            <asp:Button ID="BtnBorrar" runat="server" CssClass=" btn btn-danger" OnClick="BtnBorrar_Click" Text="Borrar" />
                        </div>

                        <!--Mensaje de alerta-->
                        <div class="alert alert-primary" role="alert">
                            <asp:Label ID="lblMensaje" runat="server" Style="font-weight: 600;" class="alert alert-success" role="alert"></asp:Label>
                        </div>

                        <!--PARTE DE LA TABLES-->

                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                   <%-- <div class="dataTables_length" id="example_length">
                                        <label>
                                            Mostrar
                                            <select name="example_length" aria-controls="example" class="custom-select custom-select-sm form-control form-control-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                            registros</label>
                                    </div>--%>
                                </div>
                                <div class="auto-style1">
                                    <%-- <%--filtracion de datos--%>
                                    

                                </div>
                                <div class="col-lg-12">
                                    <div class="table-responsive">
                                        <table id="example1" class="table table-striped table-bordered" style="width: 100%">

                                            <!--parte del gridwieb-->
                                            <tr>
                                                <td>
                                                    <div class="table-responsive">
                                                        <asp:GridView ID="WdgPersonas" runat="server" AutoGenerateColumns="False" ShowHeaderWhenEmpty="True" Width="100%" CssClass="table table-border table-hover table-sm miEstilo"
                                                            AllowPaging="True" OnPageIndexChanging="WdgPersonas_PageIndexChanging" DataSourceID="LinqDataSource1">
                                                            <PagerStyle HorizontalAlign="Center" CssClass="GridPage" />
                                                            <PagerSettings FirstPageText="Primera Página" LastPageText="Ultima Página" Mode="NumericFirstLast" />
                                                            <Columns>
                                                                <asp:BoundField HeaderText="Codigo" DataField="Codigo" HeaderStyle-Width="20%" />
                                                                <asp:BoundField HeaderText="Nombres" DataField="Nombres" HeaderStyle-Width="20%" />
                                                                <asp:BoundField HeaderText="Apellidos" DataField="Apellidos" HeaderStyle-Width="10%" />
                                                                <asp:BoundField HeaderText="Edad" DataField="Edad" HeaderStyle-Width="10%" />
                                                                <asp:BoundField HeaderText="Telefono" DataField="Telefono" HeaderStyle-Width="20%" />
                                                                <asp:BoundField HeaderText="Email" DataField="Email" HeaderStyle-Width="10%" />
                                                                <asp:BoundField HeaderText="Fecha de Nacimiento" DataField="FechaNacimiento" HeaderStyle-Width="10%" />
                                                                <asp:BoundField HeaderText="Genero" DataField="Genero" HeaderStyle-Width="10%" />
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <h5 class="text-center">No existen registros</h5>
                                                            </EmptyDataTemplate>
                                                        </asp:GridView>
                                                        <asp:LinqDataSource ID="LinqDataSource1" runat="server" ContextTypeName="Negocios.db_personasDataContext" EntityTypeName="" Select="new (Id, Nombres, Codigo, Apellidos, Edad, Telefono, Email, FechaNacimiento, Genero, Precio, Estado, FechaRegistro)" TableName="Personas">
                                                        </asp:LinqDataSource>
                                                        <!--Dropdown List -->
                                                        <div class="form-group">
                                                            <div class="col-md-12 text-right">
                                                                <asp:DropDownList ID="DdlList" runat="server" AutoPostBack="true" OnSelectedIndexChanged="DropDownList_SelectedIndexChanged" HorizontalAlign="Center" CssClass="form-control-sm">
                                                                    <asp:ListItem>10</asp:ListItem>
                                                                    <asp:ListItem>25</asp:ListItem>
                                                                    <asp:ListItem>50</asp:ListItem>
                                                                    <asp:ListItem>100</asp:ListItem>
                                                                </asp:DropDownList>
                                                            </div>
                                                        </div>

                                                    </div>

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
