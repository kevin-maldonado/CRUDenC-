use Prueba
CREATE TABLE Personas
   (
      Id int IDENTITY(1,1) PRIMARY KEY,
	  Codigo int not null,
      Nombres varchar(100)not null,
      Apellidos varchar(100)not null,
	  Edad int not null,
	  Telefono varchar(11)not null,
	  Email varchar(50)not null,
	  FechaNacimiento date not null,
	  Genero char(1) not null,
	  Precio decimal(5,2)not null,
	  Estado bit not null,
	  FechaRegistro datetime not null
)
select * from Personas

insert into Personas (Codigo,Nombres,Apellidos,Edad,Telefono,Email,FechaNacimiento,Genero,Precio,Estado,FechaRegistro)VALUES (123,'Kevin Stalin','Maldonado Tixi', 24, '0995791924', 'kevin1104cosner@hotmail.com', '1996-04-11', 'M',10.9,'true', '2016-08-16T11:41:52')
insert into Personas (Codigo,Nombres,Apellidos,Edad,Telefono,Email,FechaNacimiento,Genero,Precio,Estado,FechaRegistro)VALUES (1234,'Jhony Andres','Salas Maldonado', 29, '099999999', 'staff@gmail.com', '1992-04-21', 'M',5.75,'false', '2021-03-16T19:07:52')

---PROCEDIMIENTOS ALMACENADOS 
--------------------------MOSTRAR 
create proc MostrarPersonas
as
select *from Personas
go
--------------------------INSERTAR 
create proc InsetarPersonas
@Codigo int,
@Nombres varchar(100),
@Apellidos varchar(100),
@Edad int,
@Telefono varchar(11),
@Email varchar(50),
@FechaNacimiento date ,
@Genero char(1),
@Precio decimal(5,2),
@Estado bit,
@FechaRegistro datetime 
as
insert into Personas values (@Codigo,@Nombres,@Apellidos,@Edad,@Telefono,@Email,@FechaNacimiento,@Genero,@Precio,@Estado,@FechaRegistro)
go
------------------------ELIMINAR
create proc EliminarPersonas
@Id int
as
delete from Personas where Id=@Id
go
------------------EDITAR
create proc EditarPersonas
@Codigo int,
@Nombres varchar(100),
@Apellidos varchar(100),
@Edad int,
@Telefono varchar(11),
@Email varchar(50),
@FechaNacimiento date ,
@Genero char(1),
@Precio decimal(5,2),
@Estado bit,
@FechaRegistro datetime,
@id int
as
update Personas set  Codigo=@Codigo, Nombres=@Nombres, Apellidos=@Apellidos, Edad=@Edad, Telefono=@Telefono, Email=@Email, FechaNacimiento=@FechaNacimiento,Genero=@Genero,Precio=@Precio,Estado=@Estado,FechaRegistro=@FechaRegistro where Id=@id
go