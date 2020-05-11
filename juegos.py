'''1)Como estructura de datos use un diccionario de diccionario ya que su forma de acceso es mas ordenada y legible 
   a la hora de usarlo, propongo una clave y le asigno valores. En definitiva la estructura accedo al elemento bajo 
   su nombre clave y ahi podre acceder a sus datos.
   2)Como formato de archivo elegi uno de texto porque la estructura coincide con un formato que permite json, 
   clave-valor, además de que no se específico desde que aplicación iban a acceder al archivo, json es independiente 
   del lenguaje y/o tecnología que este utilizando'''

import hangman
import json
import os
import PySimpleGUI as sg 
import reversegam
import tictactoeModificado
import time

jugadores = os.getcwd()+"\jugadores.txt"

arch = open(jugadores,'a')

juegos = ('Hangman', 'TicTacToe', 'Reversegam')

def Error(nombre,juego):
	error = False
	if(nombre == '') or (nombre == None):
		sg.popup('Ingrese un nombre de usuario.')
		error = True
	if(juego == None) or (juego == '') or (juego not in juegos):
		sg.popup('No ha seleccionado ningun juego.')			
		error = True
	return error
	
def Actualizar(nombre,juego):
	nombre = nombre.lower()
	fecha = time.strftime("%a, %d %b %Y", time.gmtime())
	if(os.stat(jugadores).st_size == 0):
		diccionario = {'Juegos Jugados':[],'Sesiones':1,'Ultimo Acceso':fecha}
		dato = {nombre:diccionario}
		dato[nombre]['Juegos Jugados'].append(juego)
	else:
	    with open(jugadores,'r') as archivo:
		    dato = json.load(archivo)
	    if(nombre in dato.keys()):
		    dato[nombre]['Juegos Jugados'].append(juego)     
		    dato[nombre]['Sesiones'] = dato[nombre]['Sesiones']+1
		    dato[nombre]['Ultimo Acceso'] = fecha
	    else:
		    diccionario = {'Juegos Jugados':[],'Sesiones':1,'Ultimo Acceso':fecha}
		    dato.setdefault(nombre,diccionario)
		    dato[nombre]['Juegos Jugados'].append(juego)
	with open(jugadores,'w') as archivo:
	    json.dump(dato,archivo)	
	sg.popup('Datos actualizados')	
	
def main(args):
	
	diseño = [
	 [sg.Text('Ejercicio Python Plus', font='Calibri 15')],
	 [sg.Text('Ingrese su nombre'),sg.InputText(key = '_usuario_')],
	 [sg.Text('Seleccione el juego'),sg.Combo(juegos, size=(20, 20), key = '_juego_')],
	 [sg.Button('Aceptar')], [sg.Button('Cancelar')]]
		 
	window = sg.Window('Set de juegos', diseño)
	
	while True:
		evento,validacion = window.read()
		if(evento == 'Aceptar') and (Error(validacion['_usuario_'],validacion['_juego_']) == False):
			if validacion['_juego_'] == 'Hangman':
				hangman.main()
			elif validacion['_juego_'] == 'TicTacToe':
				tictactoeModificado.main()
			elif validacion['_juego_'] == 'Reversegam':
				reversegam.main()
			Actualizar(validacion['_usuario_'],validacion['_juego_'])
		elif evento == 'Cancelar':
			print('Gracias por ejecutar la aplicacion')
			break
		
if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
