#INICIO DE LAS FUNCIONES RELACIOANDAS A LOS PROYECTOS#
def mostrarProyectos(proyectos): #Regresa una lista de la forma [int, string, int, int]
    contador = 1
    for pro in proyectos:
        datos = "ID Proyecto: {0} | Nombre Proyecto: {1}  | Terminal: {2} | Torre de Control: {3} \n"
        print(datos.format(pro[0], pro[1], pro[2], pro[3]))
        contador = contador + 1
    print(" ")


def insertarProyectos(nombre, terminal, torre): #Recibe [string, int, int]
    proyecto = [nombre, terminal, torre]
    return proyecto
#FIN DE LAS FUNCIONES RELACIONADAS A LOS PROYECTOS#


#INICIO DE LAS FUNCIONES RELACIONADAS A LOS REPRESENTANTES LEGALES
def mostrarRepresentantes(representantes): #Regresa una lista de la forma [int, string, string, string, string, string]
    for rep in representantes:
        if rep[1] == 1:
            estado = "Asignado"
        elif rep[1] == 0:
            estado = "No Asignado"
        datos = "ID Representante: {0} | Estado: {1}  | Nombre: {2} | RFC: {3} | Nombre Empresa: {4} | RFC Empresa: {6} \n"
        print(datos.format(rep[0], estado, rep[2], rep[3], rep[4], rep[4], rep[5]))
    print(" ")

def insertarRepresentantes(estado, nombre, RFC, nombreEmp, RFCEmp): #Recibe [int(1 o 0), string, string, string, string]
    representante = [estado, nombre, RFC, nombreEmp, RFCEmp]
    return representante
#FIN DE LAS FUNCIONES RELACIONADAS A LOS REPRESENTANTES LEGALES


##INICIO DE LAS FUNCIONES RELACIONADAS A LOS USUARIOS##
def mostrarUsuarios(usuarios): #Regresa una lista de la forma [int, int, string, string, string, string, string]
    for usu in usuarios:
        if usu[3] == 0:
            rol = "Administrador"
        elif usu[3] == 1:
            rol = "Superintendente"
        elif usu[3] == 2:
            rol = "Supervisor"
        elif usu[3] == 3:
            rol = "Residente"
        datos = "ID Usuario: {0} | ID Representante: {1} | Tipo: {2}  | Nombre: {3} | RFC: {4} | Telefono: {5} | Email: {6}\n"
        print(datos.format(usu[0], usu[1], rol, usu[4], usu[5], usu[6], usu[7]))
    print(" ")

def insertarUsuarios(repID, pswd, tipo, nombre, RFC, tel, email): #Recibe [int, string, int, string, string, string, string]
    representante = [repID, pswd, tipo, nombre, RFC, tel, email]
    return representante
##FIN DE LAS FUNCIONES RELACIONADAS A LOS USUARIOS##


#INICIO DE LAS FUNCIONES RELACIONADAS A LOS FRENTES DE OBRA#
def mostrarFrentes(frentes): #Regresa una lista de la forma [int, int, string, int]
    for fr in frentes:
        datos = "ID Frente de Obra: {0} | ID Proyecto: {1}  | Nombre de Frente: {2} | Usuario ID: {3} \n"
        print(datos.format(fr[0], fr[1], fr[2], fr[3]))
    print(" ")


def insertarFrentes(idProyecto, nombre, usuario): #Recibe [int, string, string]
    frente = [idProyecto, nombre, usuario]
    return frente
#FIN DE LAS FUNCIONES RELACIONADAS A LOS FRENTES DE OBRA#


#INICIO DE LAS FUNCIONES RELACIONADAS A LOS CONCEPTOS#
def mostrarConceptos(conceptos): #Regresa una lista de la forma [int, int, string, string, int, int, float, float, fecha, fecha]
    for con in conceptos:
        datos = "ID Concepto: {0} | ID Frente: {1}  | Descripcion: {2} | Unidad: {3} | Cantidad: {4} | Precio Unitario: {5} | Importe: {6} | Inicio: {7} | Final: {8} \n"
        print(datos.format(con[0], con[1], con[2], con[3], con[4], con[5], con[6], con[7], con[8]))
    print(" ")


def insertarConceptos(frenteID, descripcion, unidad, cantidad, precioUnitario, inicio, fin): #Recibe [int, string, int, int, float, fecha, fecha]
    importe = cantidad*precioUnitario
    concepto = [frenteID, descripcion, unidad, cantidad, precioUnitario, importe, inicio, fin]
    return concepto
#FIN DE LAS FUNCIONES RELACIONADAS A LOS CONCEPTOS#


#INICIO DE LAS FUNCIONES RELACIONADAS A LAS ESTIMACIONES
def mostrarEstimacion(estimacion):
    pass


#def insertarEstimacion(nConceptos, IDConcepto):
    #pass
    #estimacion = [descripcion, unidad, programado, acumulado, estimado, total, porEjecutar, precioUnitario, importe]
    #return estimacion




#FIN DE LAS FUNCIONES RELACIONADAS A LAS ESTIMACIONES