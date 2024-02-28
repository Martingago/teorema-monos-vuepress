# Introducción

## ¿Qué es el Teorema del mono infinito?

El Teorema del mono infinito postula que, si un mono pulsara teclas al azar en una máquina de escribir durante un tiempo infinito, eventualmente podría producir cualquier texto dado. Aunque altamente improbable, esta idea nos invita a reflexionar sobre la vastedad de las posibilidades en un universo infinito y la relación entre aleatoriedad y creatividad.


## Funcionamiento.

Este programa desarrollado en JAVA simula el conocido teorema de los monos infinitos, con algunas adaptaciones para simplificar el proceso:

- Unicamente se generan los 27 caracteres del abecedario español en minúsculas (Se excluyen: números, signos de puntuación, acentos, y carácteres especiales).
- La palabras que se generen serán del mismo tamaño que la palabra objetivo.
- El programa opera de manera secuencial, manteniéndose en una palabra específica hasta que se descubre. Una vez descubierta, el programa avanza a la siguiente palabra, continuando este proceso hasta que se completa toda la cadena de texto.

El programa opera sobre un texto predefinido ubicado en `src/FICHERO_ANALIZAR/Fichero_analizar.java` y ejecuta un patrón de diseño Productor/Consumidor. Inicializa tres hilos productores que generan palabras aleatorias y tres hilos consumidores encargados de validarlas hasta encontrar la palabra objetivo. Todo esto es gestionado por una clase directora: `src/model/main/DirectorAlgoritmoBusquedaPalabras.java`, que se encarga de administrar todas las palabras que se deben generar, así como de obtener la información general necesaria para el correcto funcionamiento del programa.

## Puesta en práctica.

Utilizando un patrón de diseño productor-consumidor que gestione varios hilos, es posible generar y comprobar secuencias aleatorias de caracteres con gran eficiencia.
Esta es la arquitectura del software. Genera y valida cadenas de caracteres aleatorios hasta cumplir con los criterios de validación deseados.

![Imagen modelo de software empleado para la elaboración del proyecto](/img/esquema-proyecto.png)

## Análisis de resultados.

Para la generación de las palabras se tendrán en cuenta únicamente los 27 caracteres del abecedario español. Por lo que para conseguir el carácter que deseamos, la probabilidad será de 1/27

::: tip NOTA
Debemos tener en cuenta que al tratarse de probabilidades, no se garantiza el éxito en 27 tiradas consecutivas. Esto se debe a que cada tirada es independiente y está sujeta a la variabilidad inherente de los eventos aleatorios
:::



En la siguiente tabla se puede observar una estimación de intentos necesarios para escribir correctamente una palabra atendiendo a su número de caracteres

| Nº caracteres palabra | Intentos       |
| ----------------------|---------------:| 
| 1                     | 27             |
| 2                     | 729            |
| 3                     | 19.683         |
| 4                     | 531.441        |
| 5                     | 14.348.907     |
| 6                     | 387.420.489    |
| 7                     | 10.460.353.203 |

El número de intentos necesarios crece de manera exponencial, para ver de forma mas sencilla dicho crecimiento se ha creado la siguiente gráfica que representa los valores anteriores:

![Imagen estructura del proyecto](/img/grafico-monos-new.png)

Puedes ver otros de mis proyectos en mi [linkedin](https://www.linkedin.com/in/mart%C3%ADn-gago-chor%C3%A9n-6b1814241/)
