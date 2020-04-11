def numero_primo(num):
	if num < 2:
		return False
	elif num == 2:
		return True
	elif num > 2:
		for divisor in range(2,num):
			if num % divisor == 0:
				return False
			elif num % divisor != 0 and divisor == num-1:
				return True	
				
diccionario = {}
print('Ingrese una palabra')
palabra = input()
for x in palabra:
	if x not in diccionario:
		diccionario[x] = 1
	else:
		diccionario[x] = diccionario[x] + 1
print('')
for x in diccionario:
	print('La letra ', x, ' aparece:', diccionario[x], ' veces.')
print('')
for x in diccionario:
	if numero_primo(diccionario[x]):
		print('La letra ', x, ' es numero primo.')
termino = input()
