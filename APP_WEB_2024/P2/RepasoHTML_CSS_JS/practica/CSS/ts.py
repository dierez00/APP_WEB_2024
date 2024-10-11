datos = [
    60,73,65,61,66,
66,69,74,62,62,
77,80,67,63,63,70,59,54,76,66,66,66,65,61,68,70,65,67,57,67,69,67,70,78,61,64,66,75,67,72,52,64,73,64,75,71,57,73,65,81,62,72,69,62,67,58,71,64,68,67,58,69,63,71,66,68,67,68,67,72,71,59,74,83,68,69,61,56,76,70
]

con1 = 0
con2 = 0
con3 = 0
con4 = 0
con5 = 0
con6 = 0
con7 = 0


for i in datos:
    if i >= 50 and i <= 54:
        con1 = con1 + 1
    elif i >= 55 and i <= 59:
        con2 = con2 + 1
    elif i >= 60 and i <= 64:
        con3 = con3 + 1
    elif i >= 65 and i <= 69:
        con4 = con4 + 1
    elif i >= 70 and i <= 74:
        con5 = con5 + 1
    elif i >= 75 and i <= 79:
        con6 = con6 + 1
    elif i >= 80 and i <= 84:
        con7 = con7 + 1
        
print(f"Frecuencia 1: {con1}\nFrecuencia 2: {con2}\nFrecuencia 3: {con3}\nFrecuencia 4: {con4}\nFrecuencia 5: {con5}\nFrecuencia 6: {con6}\nFrecuencia 7: {con7}\nTotal {con1 + con2 + con3 + con4 + con5 + con6 + con7}")

