<template><div><h1 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion"><span>Introducción</span></a></h1>
<h2 id="¿que-es-el-teorema-del-mono-infinito" tabindex="-1"><a class="header-anchor" href="#¿que-es-el-teorema-del-mono-infinito"><span>¿Qué es el Teorema del mono infinito?</span></a></h2>
<p>El Teorema del mono infinito postula que, si un mono pulsara teclas al azar en una máquina de escribir durante un tiempo infinito, eventualmente podría producir cualquier texto dado. Aunque altamente improbable, esta idea nos invita a reflexionar sobre la vastedad de las posibilidades en un universo infinito y la relación entre aleatoriedad y creatividad.</p>
<h2 id="funcionamiento" tabindex="-1"><a class="header-anchor" href="#funcionamiento"><span>Funcionamiento.</span></a></h2>
<p>Este programa desarrollado en JAVA simula el conocido teorema de los monos infinitos, con algunas adaptaciones para simplificar el proceso:</p>
<ul>
<li>Unicamente se generan los 27 caracteres del abecedario español en minúsculas (Se excluyen: números, signos de puntuación, acentos, y carácteres especiales).</li>
<li>La palabras que se generen serán del mismo tamaño que la palabra objetivo.</li>
<li>El programa opera de manera secuencial, manteniéndose en una palabra específica hasta que se descubre. Una vez descubierta, el programa avanza a la siguiente palabra, continuando este proceso hasta que se completa toda la cadena de texto.</li>
</ul>
<p>El programa opera sobre un texto predefinido ubicado en <code v-pre>src/FICHERO_ANALIZAR/Fichero_analizar.java</code> y ejecuta un patrón de diseño Productor/Consumidor. Inicializa tres hilos productores que generan palabras aleatorias y tres hilos consumidores encargados de validarlas hasta encontrar la palabra objetivo. Todo esto es gestionado por una clase directora: <code v-pre>src/model/main/DirectorAlgoritmoBusquedaPalabras.java</code>, que se encarga de administrar todas las palabras que se deben generar, así como de obtener la información general necesaria para el correcto funcionamiento del programa.</p>
<h2 id="puesta-en-practica" tabindex="-1"><a class="header-anchor" href="#puesta-en-practica"><span>Puesta en práctica.</span></a></h2>
<p>Utilizando un patrón de diseño productor-consumidor que gestione varios hilos, es posible generar y comprobar secuencias aleatorias de caracteres con gran eficiencia.
Esta es la arquitectura del software. Genera y valida cadenas de caracteres aleatorios hasta cumplir con los criterios de validación deseados.</p>
<p><img src="/img/esquema-proyecto.png" alt="Imagen modelo de software empleado para la elaboración del proyecto"></p>
<h2 id="analisis-de-resultados" tabindex="-1"><a class="header-anchor" href="#analisis-de-resultados"><span>Análisis de resultados.</span></a></h2>
<p>Para la generación de las palabras se tendrán en cuenta únicamente los 27 caracteres del abecedario español. Por lo que para conseguir el carácter que deseamos, la probabilidad será de 1/27</p>
<div class="custom-container tip"><p class="custom-container-title">NOTA</p>
<p>Debemos tener en cuenta que al tratarse de probabilidades, no se garantiza el éxito en 27 tiradas consecutivas. Esto se debe a que cada tirada es independiente y está sujeta a la variabilidad inherente de los eventos aleatorios</p>
</div>
<p>En la siguiente tabla se puede observar una estimación de intentos necesarios para escribir correctamente una palabra atendiendo a su número de caracteres</p>
<table>
<thead>
<tr>
<th>Nº caracteres palabra</th>
<th style="text-align:right">Intentos</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td style="text-align:right">27</td>
</tr>
<tr>
<td>2</td>
<td style="text-align:right">729</td>
</tr>
<tr>
<td>3</td>
<td style="text-align:right">19.683</td>
</tr>
<tr>
<td>4</td>
<td style="text-align:right">531.441</td>
</tr>
<tr>
<td>5</td>
<td style="text-align:right">14.348.907</td>
</tr>
<tr>
<td>6</td>
<td style="text-align:right">387.420.489</td>
</tr>
<tr>
<td>7</td>
<td style="text-align:right">10.460.353.203</td>
</tr>
</tbody>
</table>
<p>El número de intentos necesarios crece de manera exponencial, para ver de forma mas sencilla dicho crecimiento se ha creado la siguiente gráfica que representa los valores anteriores:</p>
<p><img src="/img/grafico-monos-new.png" alt="Imagen estructura del proyecto"></p>
<p>Puedes ver otros de mis proyectos en mi <a href="https://www.linkedin.com/in/mart%C3%ADn-gago-chor%C3%A9n-6b1814241/" target="_blank" rel="noopener noreferrer">linkedin<ExternalLinkIcon/></a></p>
</div></template>


