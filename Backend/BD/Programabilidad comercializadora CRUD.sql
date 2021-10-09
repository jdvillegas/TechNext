USE comercializadora;

DROP VIEW IF EXISTS vUsuario;

DROP PROCEDURE IF EXISTS spListarProductos;
DROP PROCEDURE IF EXISTS spBuscarProducto;
DROP PROCEDURE IF EXISTS spActualizarProducto;
DROP PROCEDURE IF EXISTS spListarUsuarios;
DROP PROCEDURE IF EXISTS spEditarUsuario;

-- ***** PRODUCTO *****
-- ** Procedimiento almacenado para listar PRODUCTOS
DELIMITER //
CREATE PROCEDURE spListarProductos()
BEGIN
	SELECT Id, Nombre, Referencia, ValorUnitario, IdMarca 
		FROM producto
		ORDER BY Nombre;
END//

-- ** Procedimiento almacenado para buscar un PRODUCTO
CREATE PROCEDURE spBuscarProducto(
IN Dato varchar(50),
IN Tipo int
)
BEGIN
	DECLARE InstruccionSQL varchar(1000);
	SET Dato=CONCAT(char(39),Dato,'%',char(39));
	SET InstruccionSQL='SELECT * FROM producto';
	IF Tipo=0 THEN
		SET InstruccionSQL=CONCAT(InstruccionSQL,' WHERE Nombre LIKE ',Dato,' AND Id>0');
	ELSEIF Tipo=1 THEN
		SET InstruccionSQL=CONCAT(InstruccionSQL,' WHERE Referencia LIKE ',Dato,' AND Id>0');
	END IF;
	SET InstruccionSQL=CONCAT(InstruccionSQL,' ORDER BY Nombre');

	SET @InstruccionSQL=InstruccionSQL;
	PREPARE ejecucion FROM @InstruccionSQL;
	EXECUTE ejecucion;
	DEALLOCATE PREPARE ejecucion;

END//

-- ** Procedimiento almacenado para agregar o modificar PRODUCTO

CREATE PROCEDURE spActualizarProducto(
IN IdProducto int,
IN Producto varchar(200),
IN Referencia varchar(20),
IN ValorUnitario float,
IN IdMarca int
)
BEGIN
	IF IdMoneda<=0 THEN
		INSERT INTO Moneda 
			(
			Producto, Referencia, ValorUnitario, IdMarca
			)
			VALUES(
			Producto, Referencia, ValorUnitario, IdMarca
			);
	ELSE
		UPDATE Producto
			SET Prodcuto=Producto,
			Referencia=Referencia,
			ValorUnitario=ValorUnitario, 
			IdMarca=IdMarca
			WHERE Id =  IdProducto;
	END IF;
END//

-- ***** USUARIO *****

CREATE VIEW vUsuario
AS
SELECT usuario.Id as Id, usuario.Usuario as Usuario, Nombre, Clave, Rol, Activo
	FROM usuario
		JOIN rol
			ON usuario.IdRol=rol.Id;
            
CREATE PROCEDURE spListarUsuarios()
BEGIN
	SELECT Id, Usuario, Nombre, Clave, Rol, Activo 
		FROM vUsuario
		ORDER BY Nombre;
END//

CREATE PROCEDURE spEditarUsuario(
IN IdUsuario int,
IN Dato int,
IN Tipo int
)
BEGIN
	IF Tipo=0 THEN
		UPDATE usuario SET Activo = Dato WHERE Id=IdUsuario;
	ELSEIF Tipo=1 THEN
		UPDATE usuario SET IdRol = Dato WHERE Id=IdUsuario;
	END IF;
END//