import mysql.connector
from mysql.connector import Error

class DAO():
    def __init__(self):
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                port = 3306,
                user = 'root',
                passwd = '1234',
                db = 'ADS'
                )
            self.cursor = self.conexion.cursor()
        except Error as ex:
            print("Error al intentar la conexion: {0}".format(ex))

##INICIO PROYECTOS
    def listarProyectos(self):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                cursor.execute("SELECT * from Proyectos")
                resultados = cursor.fetchall()
                return resultados
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        
    def registrarProyecto(self, proyecto):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sql = "INSERT INTO Proyectos (nombreProyecto, terminal, torreDecontrol) VALUES ('{0}', '{1}', '{2}')"
                cursor.execute(sql.format(proyecto[0], proyecto[1], proyecto[2]))
                self.conexion.commit()
                print("Proyecto Registrado\n")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
##FIN PROYECTOS

##INICIO FRENTES
    def listarFrente(self):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                cursor.execute("SELECT * from frentesDeObra")
                resultados = cursor.fetchall()
                return resultados
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        
    def registrarFrente(self, frente):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sql = "INSERT INTO frentesDeObra (proyectoID, nombreFrente, usuarioID) values ('{0}', '{1}', '{2}')"
                cursor.execute(sql.format(frente[0], frente[1], frente[2]))
                self.conexion.commit()
                print("Proyecto Registrado\n")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
##FIN FRENTES
    
##INICIO REPRESENTANTES
    def listarRepresentante(self):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                cursor.execute("SELECT * from representanteLegal")
                representantes= cursor.fetchall()
                return representantes
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        
    def registrarRepresentante(self, representante):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sql = "INSERT INTO representantelegal (estado, nombre, RFC, empNombre, empRFC) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}')"
                cursor.execute(sql.format(representante[0], representante[1], representante[2], representante[3], representante[4]))
                self.conexion.commit()
                print("Representante Legal Registrado\n")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
## FIN REPRESENTANTES


##INICIO USUARIOS
    def listarUsuarios(self):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                cursor.execute("SELECT * from Usuario")
                usuarios = cursor.fetchall()
                return usuarios
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        
    def registrarUsuarios(self, usuario):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sql = "INSERT INTO Usuario (representanteID, contraseña, tipoDeUsuario, nombre, RFC, telefono, email) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}')"
                cursor.execute(sql.format(usuario[0], usuario[1], usuario[2], usuario[3], usuario[4], usuario[5], usuario[6]))
                self.conexion.commit()
                print("Usuarios Registrado\n")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
## FIN USUARIOS


##INICIO CONCEPTOS##
    def listarConceptos(self):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                cursor.execute("SELECT * from Conceptos")
                usuarios = cursor.fetchall()
                return usuarios
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        
    def registrarConceptos(self, concepto):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sql = "insert into conceptos(frenteID, descripcion, unidad, cantidad, precioUnitario, importe, periodoInicio, periodoFinal) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}')"
                cursor.execute(sql.format(concepto[0], concepto[1], concepto[2], concepto[3], concepto[4], concepto[5], concepto[6], concepto[7], concepto, 8))
                self.conexion.commit()
                print("Usuarios Registrado\n")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
##FIN CONCEPTOS##


##INICIO ESTIMACIONES
def registrarEstimacion(self, estimacion):
    pass




##FIN ESTIMACIONES
