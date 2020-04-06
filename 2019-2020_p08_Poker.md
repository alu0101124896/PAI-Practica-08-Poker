# Práctica 8. Poker. Programación Orientada a Objetos en JS.
### Factor de ponderación: 8

### Objetivos

Los objetivos de esta práctica son:

* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos.
* Practicar el proceso de pruebas de software (testing) utilizando Mocha y Chai.
* Practicar la evaluación del cubrimiento de código usando Istanbul.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar este ejercicio:
* El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema.
* Capacidad del programador(a) de introducir cambios en el programa desarrollado.
* Han de aportarse los tests utilizados para probar la aplicación en su fase de desarrollo.
* Han de aportarse los informes sobre cubrimiento de código de su aplicación.
* El programa debe ajustarse al paradigma de Orientación a Objetos.
* El formato del código ha de cumplir con lo establecido en la [Guía de Estilo de Google](https://google.github.io/styleguide/jsguide.html)
para Javascript. Utilice [ESLint](https://eslint.org/), convenientemente configurado, si se considera necesario para cumplir con este requisito.
* El código ha de estar documentado con [JSDoc](https://jsdoc.app/).
* Modularidad: el programa ha de escribirse de modo que las diferentes funcionalidades
que se precisen sean encapsuladas en módulos, clases, funciones y métodos cuya extensión léxica se
mantenga acotada.
* Eficiencia del código desarrollado.

### Presentación de resultados y ejecución de la aplicación
Comience su trabajo subiendo a la tarea correspondiente del aula virtual de la asignatura el enlace (git) a su repositorio privado de trabajo para esta práctica.

Tanto la ejecución de la aplicación como la documentación de la misma, los resultados de de los tests desarrollados y el informe sobre cubrimiento de código se han de mostrar a través de una página `index.html` alojada en el servidor de su máquina IaaS de la asignatura. 

Indexe en esa página principal todos los resultados que desee mostrar como evidencias para la evaluación de su trabajo.

Todas las páginas de la aplicación han de contener en lugar visible Apellidos y Nombre del autor de la aplicación y las URLs de las páginas que se enlacen desde `index.html` han de tener como sufijo: 
`apellido-nombre-nombre-del-ejercicio.html`

El servidor web que aloja estas páginas ha de seguir funcionando después de cerrar la sesión en la máquina
IaaS-ULL que aloja el servidor para posibilitar la evaluación del trabajo realizado.

### El juego del Poker

En esta práctica se propone desarrollar una aplicación JavaScript para representar 
[cartas de la baraja francesa](https://en.wikipedia.org/wiki/Standard_52-card_deck), mazos de cartas, manos y jugadas del Póquer.
Si no conoce el juego del póquer, puede [leer sobre ello](http://en.wikipedia.org/wiki/Poker), 
pero no tiene porqué hacerlo. 
Este documento explica todo lo que se precisa para los ejercicios a realizar.

A pesar de que este documento está escrito en español, se propone que los identificadores que se usen en el código JavaScript utilicen la terminología en inglés para el entorno a modelar en los programas: cartas (cards), mazo de cartas (deck), etc.

En el desarrollo de la aplicación que se propone, aplique el
[enfoque TDD](https://en.wikipedia.org/wiki/Test-driven_development) 
iterando las fases que se definen metodología:
Red - Green - Refactor - [Integrate] y escribiendo la documentación de la misma al mismo tiempo que desarrolla el código.

### Una clase para representar cartas
La baraja francesa está dividida en cuatro palos (en inglés: *suit*), dos de color rojo y dos de color negro:

* ♠ Spades (picas).
* ♥ Hearts (corazones).
* ♦ Diamonds (diamantes).
* ♣ Clubs (tréboles).

Cada palo está formado por 13 cartas, de las cuales 9 son numerales y 4 literales. 
Se ordenan de menor a mayor "rango" de la siguiente forma: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K. 
Las cartas con letras (figuras), se llaman Jack (J), Queen (Q), King (K) y Ace (A).
Dependiendo del juego, un As puede ser más alto que el Rey o más bajo que 2.

Si se quiere definir un objeto para representar una carta de juego, es obvio cuáles deben ser los atributos imprescindibles: valor y palo.
Cualquier implementación que se elija para los atributos ha de permitir comparar cartas para determinar cuál tiene un valor o palo más alto.

1.- Defina una clase `Card` para representar las cartas.
Si no se especifica algo diferente, al crear un objeto de esta clase se crearía un 2 de tréboles.
Para instanciar un objeto Carta se usaría un código como:
```javascript
const myCard = new Card(SUIT, RANK);
```
Desarrolle un método `toString()` que permita imprimir un objeto `Card`.
Las cartas han de poder imprimirse de forma que sean legibles para un humano.
Así en pantalla esperamos encontrar textos como:

```
Ace of Diamonds
9 of Hearts
Jack of Spades
```

Y debería poderse escribir:

```javascript
const jackOfHearts = new Card(HEARTS, JACK);
console.log(jackOfHearts);  // -> Jack of Hearts
```

También resulta necesario un mecanismo que permita comparar cartas.
El orden de las cartas no es obvio. 
Por ejemplo, ¿qué carta es mejor, el 3 de tréboles o el 2 de diamantes?
Una tiene un valor más alto, pero la otra tiene un palo más alto. 
Para comparar las cartas, ha de decidirse si es más importante el valor de la carta o el palo.
La respuesta puede depender del juego que se esté jugando, pero para simplificar, se hará la elección arbitraria de que el palo es más importante. 
Se asumirá la siguiente ordenación para los palos:

`Clubs < Diamonds < Hearts < Spades`

así que, por ejemplo, todas las picas superan a todos los corazones, y así sucesivamente.

### Mazos
Una vez diseñadas las cartas, el siguiente paso será definir un mazo (baraja completa). 
Puesto que un mazo está compuesto de cartas, es natural que cada mazo contenga como atributo un conjunto de cartas.
Defina una clase `Deck` para modelar un mazo de cartas. 
El constructor de esa clase deberá inicializar el mazo con el conjunto estándar de 52 cartas.
La clase `Deck` ha de disponer de un método que permita imprimir el mazo:

```
Ace of Clubs
2 of Clubs
3 of Clubs
...
10 of Spades
Jack of Spades
Queen of Spades
King of Spades
```

### Añadir, quitar, barajar y clasificar
Para gestionar el mazo y poder repartir cartas se precisan métodos para
* Eliminar una carta del mazo y devolverla. `popCard()`
* Añadir una carta determinada al mazo. `addCard()`
* Barajar (mezclar) las cartas del mazo de modo que al sacar una carta del mazo, ésta no esté predeterminada por la configuración del mismo (aleatoriedad). `shuffle()`
* Resulta conveniente disponer de un método `sort()` que ordene las cartas del mazo.

### Manos de cartas
Para avanzar en el diseño de la aplicación propuesta se precisa también una clase para representar las manos (las cartas asignadas a un jugador).
Una mano (*Hand*) es similar a un mazo: tanto un mazo como una mano están formados por un conjunto de cartas, y ambos requieren operaciones como añadir y quitar cartas.
Una mano también es diferente de un mazo puesto que hay operaciones necesarias para las manos que no tienen sentido para un mazo. 
Por ejemplo, en el póquer podríamos comparar dos manos para ver cuál gana. 
En el bridge, podríamos calcular la puntuación de una mano para hacer una apuesta.
El método que inicialice una mano debería inicializarla con un conjunto vacío de cartas:

```javascript
hand = new Hand('new hand')
console.log(hand.cards);	// -> [ ]
console.log(hand.label);	// -> new hand
```
La clase `Hand` también ha de disponer, como se ha expuesto, de métodos `popCard()` y `addCard()`:

```javascript
let deck = new Deck();
let card = deck.popCard();
hand.addCard(card);
console.log(hand);	// -> King of Spades
```

Un paso adicional es disponer de un método `moveCards()` que toma dos argumentos: una mano y el número de cartas a repartir.
`moveCards()` toma el número de cartas a repartir del mazo y las coloca en la mano.

En algunos juegos, las cartas se mueven de una mano a otra, o de una mano al mazo. Se puede usar `moveCards()` para cualquiera de estas operaciones.

### Ejercicios
Ejercicio 1. Escriba un método de `Deck` llamado `dealHands()` que toma dos parámetros: el número de manos y el número de cartas por mano. 
Debe crear el número apropiado de manos, repartir el número apropiado de cartas por mano y devolver una lista de Manos.

Ejercicio 2. En el póker las manos son de 5 cartas. 
Las siguientes son las posibles manos en el póquer, en orden creciente de valor y decreciente de probabilidad:

* *Pair* (Pareja): dos cartas con el mismo valor.
* *Two Pair* (Doble par): dos pares de cartas con el mismo valor.
* *Three of a kind* (Trío): tres cartas con el mismo valor.
* *Straight* (Escalera): cinco cartas con valores en secuencia (los ases pueden ser altos o bajos, así que el As-2-3-4-5 es una escalera y también lo es el 10-Jack-Queen-King-Ace, pero el Queen-King-Ace-2-3 no lo es).
* *Flush* (Color): cinco cartas con el mismo palo.
* *Full House* (Full): tres cartas con un valor, dos cartas con otro.
* *Four of a Kind* (Poker): cuatro cartas con el mismo valor.
* *Straight Flush* (Escalera real): cinco cartas en secuencia (como se definió anteriormente) y con el mismo palo.

El objetivo de este ejercicio es estimar la probabilidad de conseguir estas diversas manos.

2.1 Desarrolle un programa `poker-hand.js` que implemente una clase `PokerHand()` que representará una mano de Póker.
Escriba un programa `poker-game.js` que reparta siete manos de 
[póquer de 7-cartas](https://en.wikipedia.org/wiki/Seven-card_stud)
véase además [esta otra referencia](http://people.math.sfu.ca/~alspach/comp20/)
y comprueba si alguna de ellas contiene una escalera.

2.2 Añada métodos a `poker-hand.js` llamados `hasPair()`, `hasTwopair()`, `hasThreeOfaKind()` etc. que devuelven Verdadero o Falso según si la mano cumple o no los criterios pertinentes. 
Su código debería funcionar correctamente para manos que contengan cualquier número de cartas (aunque 5 y 7 son los tamaños más comunes).

2.3 Escriba un método `classify()` que determine la clasificación de mayor valor para una mano y establezca el atributo de la etiqueta de esa mano en consecuencia. 
Por ejemplo, una mano de 7 cartas podría contener una escalera y un par; debería ser etiquetada como "flush" (escalera).

2.4 Cuando esté convencido de que sus métodos de clasificación funcionan, el siguiente paso es estimar las probabilidades de las distintas manos. 
Escriba una función en `poker-hand.js` que baraje un mazo de cartas, la divida en manos, clasifique las manos y cuente el número de veces que aparecen las distintas clasificaciones.

Imprima una tabla de las clasificaciones y sus probabilidades y muestre esos resultados tanto por pantalla como a través de un fichero JSON.
Ejecute su programa con un número cada vez mayor de manos hasta que los valores de salida converjan con un grado razonable de precisión.

Compare sus resultados con los valores que se indican [en Wikipedia](https://en.wikipedia.org/wiki/Poker_probability).
