# curso-acessibilidad-web

## Introducción

### ¿Listo para hacer la web un mejor lugar para todos sus usuarios?

Hola! Y bienvenida al curso de accesibilidad web de Platzi. Soy Juliana y voy a acompañarte para este curso donde aprenderemos sobre las bases de la accesibilidad web, uno de los fundamentos que debemos tener en mente cuando estamos contruyendo nuestros productos y sitios en la web. Pero primero, te cuento un poco sobre mi y sobre el curso. Como ya te conte, mi nombre es Juliana y yo soy Colombo-Canadiense. Creci en Canada y volvi a Colombia hace 4 años. Aqui en Colombia fue cuando conoci el mundo maravilloso de la programacion y como muchas de ustedes, me puse las pilas para aprender a programar por cursos en linea como este. Llevo tres años trabajando como Front End Developer y una de mis grandes pasiones es la accesibilidad porque sueño con un mundo donde todo el mundo puede participar en y contribuir a la web. 

En este curso, te explicaré en mas detalles sobre de que hablamos cuando hablamos de la accesibilidad web y vamos a revisar las organizaciones y estandares que nos guian en contruir proyectos accesibles. Cuando ya tengas un dominio fuerte sobre las teorias y las bases, te voy a enseñar como hacer pruebas distintas para revisar el estado de un proyecto en terminos de su accesibilidad. Despues de aprender como hacer pruebas, vamos a aprender como podemos usar HTML, CSS y JavaScript para mejor la accesibilidad. Este curso es perfecto para ti sí ya tienes algunas bases en estos lenjuages pero como nos queremos enfocar mucho en aprender practicas de la accesibilidad, decidi mantener el nivel bastante basico con eso más personas pueden aprender esto que es tan valioso.

Para el curso, vamos a usar un proyecto que espero te guste mucho - el proyecto con el que trabajaremos es un portafolio muy simple, algo que quizas es parecido al tuyo. Espero que encuentres lo que aprendamos super util y que luego de terminar el curso, lo apliques a tu propio portafolio y lo compartas conmigo en twitter. Mi handle es @gmzjuliana, estoy muy atenta de ver como aplicas estas enseñansas y ver una web mejor porque tu tambien le estas aportando tu granito de arena para hacerla un mejor lugar para todo el mundo!

## Dominar las bases de la accesibilidad

### Conociendo la importancia de la accesibilidad web
Bueno entonces ahora sí. De que hablamos cuando hablamos de la accesibilidad web? La accesibilidad web se refiere a la practica continua que debemos mantener los equipos que crean productos para la web. En esta practica, queremos asegurarnos que lo que creamos se puede usar, interpretar y operar por una variedad de personas en una variedad de situaciones. Ha pasado que las que normalmente creamos cosas para la web, tenemos muchos privilegios, ya sean fisicos o materiales, que nos permiten usar dispositivos en una manera que concideramos normales y se nos olvida que no todo el mundo vive lo mismo que nosotras. Esto significa que podemos excluir muchas personas de usar y de beneficiarse de lo que creamos, a menos de que tengamos en cuenta la gran variedad de maneras que hay de navegar la web. Cuando construimos productos y sitios accesibles, le estamos dando la oportunidad a mas personas de participar en la web, una herramienta que enricquese mucho la vida tanto que muchas la vemos casi como una necesidad fundamental. 

Hay muchas razones por las cuales es buena idea implementar practicas de accesibilidad, pero aqui te cuenta 3 que son importantes:
1. Para incluir a personas en situaciones de discapacidad
- es estimado que alrededor del 20% del mundo viven con una discapacidad. Algunas situaciones de discapacidad impiden a las personas que viven con ellas de usar sus manos para manejar un mouse y/o un teclado, otras no dejan ver bien, ver colores o ver el campo visual completamente, mientras que otras situaciones hacen algunas cosas que leemos o vemos dificiles de entender. Como podras ver, estos tres ejemplos pueden ser fundamentales para participar en la web. Pero no lo tienen que ser. Cuando desarollamos con la accesibilidad en mente, ampliamos las oportunidades para incluir a todas las personas sin importar su situacion en participar y disfrutar de nuestros productos. Una encuesta de WebAIM, una organizacion que entrena y crea muchos recursos para ayudarnos a implementar la accesibilidad web, reporta que la mayoria de las personas que practicamos la accesibilad web lo hacemos por un llamado moral, es decir, pensamos que es lo correcto.

2. Para mejorar la usabilidad de nuestros proyectos
- Entre nos, yo estoy de acuerdo que contruir proyectos accesibles es lo corecto pero si tu eres como yo, tambien te importa hacer productos geniales. Productos que la gente ama usar, que aporte positivamente a sus vidas y sientes cierto orgullo creando algo de muy alta calidad. Cuando hacemos nuestros proyectos accesibles, no solo son las personas en situaciones de discapacidad las que ganan, sino todas nuestras usuarias. Esto pasa porque les damos muchas maneras de personalizar su experiencia con nuestro proyecto para hacerla unica y para que la pueden disfrutar en sus terminos. Te doy un ejemplo. Mira tu celular y piensa en todas las veces que le has tenido que quitar el sonido y ponerlo en modo vibracion. Yo pienso en reuniones que no queria interrumpir, pienso en veces que andaba por la calle y estamos esperando una llamada importante entonces lo cargo en mi mano en modo vibracion para asegurarme de no perderla, y en muchas otras ocaciones. El modo vibracion en tu telefono no fue creado para eso. Fue creado para personas sordas, que necesitaban una manera de saber si sus telefonos estaban sonando. Mira la moda de modo oscuro y claro! Darle a un usuario la opcion entre cual tema de color usar puede ser un punto de preferencia pero tambien puede mejorar la usabilidad de tu producto si tu usuario lo usa para leer mejor los textos o entender mejor la pagina.

3. Porque en algunos lugares es la ley
- Muchas de nosotras estamos desarollando productos, sitios y aplicaciones que seran usadas alrededor del mundo y aun si no vivimos alla y las paginas no fueron creadas alla, hay lugares donde nosotras o nuestras empresas pueden ser multadas por no ofrecer una experiencia accesible para sus cuidadanos. En los estados unidos existe una ley llamada el American with Disabilities Act, la cual estipula que personas en situaciones de discapacidad tienen oportunidades iguales para participar en programas, servicios y actividades. La ley no menciona especificamente la web pero han habido caso en los cuales empresas son multadas por no cumplir con la ley. En Latinoamerica el 55% de paises poseen normas, guías o leyes que consideran  la accesibilidad de los sitios web, mientras  que el 45% aún no cuentan con ellas, sólo hablan de la accesibilidad para las personas con discapacidad de manera muy general. Los paises que sí tienen leyes, se basan en el estandard de WCAG, el cual vamos a ver en el proximo modulo.

Piensa en tu familia, tus amigos, tu comunidad.. A quien conoces 

### Aprendiendo sobre WCAG y sus criteros de conformidad
Si ya estas un poco mareada pensando en todo esto y como puedes implementar accesibilidad en tus proyectos, te tengo buenas noticias: hay un estandar muy completo que podemos usar para guiarnos en esta tarea que se llama WCAG - en ingles las Web Content Accessibility Guidelines. Nosotras podemos usar los criterios de conformidad de WCAG para implementar practicas accesibles en nuestros sitios pero es importante tener en cuenta que la accesibilidad es bastante flexible y depende mucho del contexto, asi que aun si sigues WCAG al pie de la letra, necesitas probar tu sitio manualmente y escuchar mucho a tus usuarios para asegurarte que es algo que sirve de maneras distintas. 

Pero antes de adelantarme mucho, es importante conocer de donde viene WCAG y que es lo que lo hace oficial. WCAG es un estandar creo por la W3C - the World Wide Web Consortium, el organo rector de la web que crea todas las estandares que usamos para contruir la web. Son responsables de crear y mantener al dia los estandards para HTML y CSS tambien como WCAG para que todas en la web estemos trabajando de una manera igual que deje que la web crezca a su potencial completo. Dentro de la W3C hay varias iniciativas y una de ellas es la Web Accessibility Initiative, cuya meta es asegurar la accesibilidad de la web. De ahi es donde salen las Web Content Accessibility Guidelines!

Vamos en la versions 2.0 de WCAG, lo cual nos asegura que amedida que va creciendo la web, van actulizando los criterios de conformidad para reflejar la web que conocemos actualmente. Los criterios de conformidad son los puntos que debemos considerar en nuestras aplicaciones y ayudan mucho que son puntuales. Otro punto a favor es que se dividen en tan solo 4 categorias y en total son 12 criterios. En la proximo clase, te enseñare estos 4 principios y veremos ejemplos de ellos en la web!

### Aprendiendo sobre WCAG y sus 4 principios
Ya que conocemos un poco de WCAG, espero que te estes sintiendo un poco mas segura de tus poderes y responsabilidades al implementar practicas accesibles en tus sitios. Suele pasar que la gente le llega a tener miedo a la accesibilidad web pero como todos los miedos, cuando los investigas te das cuenta que son manejables.. y en este caso que tienes muchos recursos y apoyo en tu camino!

Cuando miramos WCAG nos damos cuenta que los criterios de conformidad se organizan en 4 principios:
1. Perceptible
- que algo sea perceptible significa que la informacion que tu proveedes en tu sitio, pueda ser acesida en varias maneras. Si la unica manera que la informacion de tu sitio puede penetrar la mente de tus usuarios es por su vision, estas excluyendo a un gran grupo de personas. En este principio incluye la necesidad que todo contenido visual tengo una alternativa en texto porque el texto es un medio muy accesible dado a que se puede leer visualmente o se puede escuchar o traducir a braile y otras alternativas. Tambien se trata de poder presentar el contenido en formas diferentes, proporcionar alternativas para medios tempodependientes y facilitar a los usuuarios ver y oir el contenido.

2. Operable
- otra cosa muy importante para tus proyectos es que varias personas los puedan usar. Como habiamos mencionado antes, cuando podemos usar un teclado y un mouse sin problema, podemos olvidar que no todo el mundo lo puede hacer igual y para no excluirlas, es importante que demos opciones variadas para navegar nuestros sitios. Como el texto es universal por su forma que se puede traducir a otros medios, el teclado es nuestro mejor aliado en aseguar la operabilidad de nuestros sitios porque se puede traducir a otras tecnologias. Otras claves para hacer tus sitios operables es propocionar a los usuarios tiempo suficiente para leer y usuar el contenido, diseñar el contenido tienendo en cuenta elementos que pueden provocar ataques, espasmos o convulciones y asegurarte que tu sitio comunica bien la navegacion, el contenido y el foco actual dentro de tu pagina.
3. Comprensible
- Lo que creamos no es nada si la gente que lo usa no lo entiende. Por eso este principio se enfoca en que los contenidos textuales resulten legibles y comprensibles, que las paginas aparezcan y operen de manera predecible y ayudar a los usuarios a evitar y corregir los errores.
4. Robusto
- Finalemente, cuando hablamos de sitios web robustos, hablamos de que funcionen en una variedad de situaciones y dispositivos. Hablamos de temas de performance y responsiveness y aveces de localizacion o internalizacion. 

Toda la info de WCAG la podemos encontrar en su documentacion.. te animo a pasar y learla un poco, no tiene que ser en detalle completo pero familiarizate con los criterios de conformidad y ve pensando en cuales estas cumpliendo en tus proyectos actuales.

### Tecnología Asistivas - cuales son y cómo funcionan
Las tecnologias asistivas existen en muchas formas y son mucho mas comunes de lo que pensamos. En grandes rasgos, las tecnologias asistivas nos dan alternativas a las existentes para mejorar nuestras habilidades de consumir el mundo alrededor nuestro. Mira simplemente tus gafas! Ya sean gafas normales o gafas de sol, las gafas augmentan nuestra vision en situationes donde nuestra vision natural no nos alcanza. Aqui vamos a ver algunos ejemplos de tecnologias asistivas que podemos usar con dispositivos que usamos para aceder a la web. Teniendo en cuenta que hay dos habilidades que son imperativas para participar en la web: vision y movimiento motor.

Vision
- lectores de pantalla
- extensiones que augmentan tamaño/contraste/foco

Motor
- mouth stick
- single switch
- sip and puff switch

Como puedes ver, las opciones de tec para habilidades motores se basan en interacciones con el teclado. Por esto se vuelve tan importante que no solo consideremos lectores de pantalla cuando implementamos practicas accesibles en la web, sino tambien la interaccion del teclado para poder abrirle la web a las muchas personas que usan estetipo de tec para navegar la web.

## Presentar el proyecto
### Installacion del proyecto y primeros pasos

## Evaluar la accessibilidad de sitios web

### Pruebas automaticas con Lighthouse
Ya que tenemos el proyecto instalado, podemos empezar por pruebas. En un mundo ideal, la accesiblidad es uno más de los varios temas que debemos considerar durante todo el proceso de creacion, empezando en las primeras conversaciones sobre requerimientos, pasando por producto y diseño, implementado durante el proceso de ingenieria y luego asegurado por QA y finalmente ser una parte iterativa en conversaciones con los usuarios de una pagina o producto. Lastimosamente, aun necesitamos mas ingenieras, product owners, diseñadoras y QA alzando la mano por accesibilidad entonces siendo realistas, vamos a empezar con pruebas. Porque ya muchas tenemos nuestro proyecto construido y de ahi podemos arrancar en esa situation.

La primera herramienta que les quiero mostrar se llama Lighthouse y es parte de devtools de Chrome. Para este prueba, necesitamos un sitio con http/https entonces yo arranqué una pagina de GitHub pages para poder probarla ahi. La url es esta.

{hacer la prueba, mostrar que tipo de cosas salen}

### Pruebas con extensiones para ver como se puede ver para diferentes personas
Otra prueba que podemos hacer es descargar una extension que nos ayuda a ver nuestro sitio de una manera parecida a como la ven personas con problemas de vision. La extension que vamos a usar se llama NoCoffee y la puedes encontrar en las extensiones de Google Chrome. Asi la descargas y para usarla hacemos esto.

{mirar la pagina y tales}

### Pruebas manuales con tu teclado
La proxima prueba es muy facil pero requiere un poco de conocimiento a profundo de HTML para hacerla bien :) Recuerda que muchas tecnologias asistivas usan el teclado para mappearlo y asegurarse que las personas que las usan, puedan navegar la web de esa manera. Entonces, cuando probamos con el teclado, queremos asegurarnos que todos los elementos de interaction reciben foco y tambien que los eventos aliados al elemento se puedan disparar con el teclado. 

Para navegar una pagina con el teclado, los unicos comandos que necesitas saber es tab para ir adelante, tab+shift para ir atras y enter para escoger. Lo otro que necesitas saber es que no todos los elementos en tu pagina van a recibir foco automatico.. recuerda que solo los elementos interactivos reciben foco - inputs, enlaces, botones. Para ver una lista completa de elementos que reciben foco mira aca: {link} pero en general recuerda que solo son elementos con interaction.

Miremos nuestro sitio entonces: 

### Pruebas manuales con tecnologias asistivas (lectores de pantalla)
Y finalmente llegamos a las pruebas que son casi siempre asociadas con la accesibilidad - lectores de pantalla! Creo que por ser tan revolucionario que personas con discapacidades visuales puedan al fin participar en la web, solemos a enfocarnos en lectores de pantalla pero si te quedas con algo porfa, recuerda que el teclado es tambien muy importante.

Pero bueno, los lectores de pantalla son software que mappea las paginas que usamos y las lee en voz alta para personas que no pueden ver su pantalla. No siempre son usadas para esto, aveces personas con buena vision las usan para augmentar su comprension y les confieso que si te gustan los audiobooks, quizas te gustaria que te leyeran articulos en la web, y los lectores de pantalla lo pueden hacer.

Los lectores de pantalla dependen de HTML semantico para hacer un arbol de accessibility. Lo podemos ver en DevTools asi.

Lista para ver un lector de pantalla en accion? Hay varios y es importante saber que hay combinaciones que funcionan mejor entre lectore de pantalla y navegador. Para facilitar nuestro testing, vamos a instalar una extension de Chrome llamada ChromeVox. Esto es un lector de pantalla web entonces no tiene todo lo que tendria un lector de pantalla instalado en tu maquina pero cuando hacemos pruebas, lo que queremos ver es que todo la informacion de nuestro sitio de este transladando bien.  Y antes de empezar, hay que saber usarlo!

Aqui en la documentacion de chromevox, vamos a ver todos los comando que podriamos usar pero nos important #: 
1. como se prende y apaga
2. navegar hacia adelante
3. navegar hacia atras

Durante la recorrida, vamos a ver que el lector de pantalla da instrucciones en tiempo real para otras operaciones que podemos hacer mientras navegamos. Ahora si miremos que tal nos va: {prueba}

## Refactorizar HTML para ser mas accessible

### Que es el HTML semantico y porque es importante?
Ya lo hemos mencionado por encima pero el HTML semantico se vuelve muy importante para la accesibilidad porque el HTML semantico no solo nos ayuda con algunos aspectos de presentacion pero le agrega significado a nuestro contenido. Cuando usamos las elementos apropiados le ayudamos al navegador y a tecnologias asistivas diferenciar entre las acciones que pueden tomar usuarios con esos elementos. 

El HTML semantico tambien nos ayuda con mucha accesibilidad incluida. Cuando usamos un elemento boton por ejemplo, ya viene con el eventlistener en teclado y mouse, viene tambien con el foco apropiado y el label que le anuncia a un usuario que hace el boton, ahorandonos todo ese trabajo de implementacion.

Miremos nuestro sitio y cambiemos elementos para elementos semanticos

### Como podemos usar HTML semantico en nuestro sitio
{mira el sitio y hechar codigo}

### ARIA - Accessible Rich Internet Applications
Aveces el HTML semantico no nos alcanza y necesitamos extender el HTML para ayudarle a tecnologias assistivas entender que estamos tratando de comunicar. En estos casos podemos apoyarnos de los atributos ARIA - accessible rich internet applications. ARIA es una specificacion tecnica creada por el Web Accessibility Initiative del W3C. Son un set de attributos divididos en 3 categories: 
1. roles
- comunica el fin del elemento, que hace en la pagina para dar una pista de las maneras que las tecnologias asistivas las pueden anvegar y comunicar. Las tecnologies asistivas navegan diferentemente dependiendo del rol 
2. propiedades
- nosotras podemos usar propiedades para comunicarle attributos que son esentiales para el comportamiento o significado de un elemento. Estas tienden a no cambiar frequentemente pero eso de deberia ser la regla fija para distinguir entre propiedades y estados
3. estados
- Los estados expresan characteristicas de un elemento que pueden cambiar basadas en una interaction o proceso. No afectan la naturaleza del elemento pero representan datos associados con el objecto o posibilidades de interaction

### ARIA roles
Dependiendo de los roles de un elemento, una tecnologia asistiva puede navegar esa parte de un sitio web de una manera diferente. Por ejemplo, los lectores de pantalla leen elementos dentro un form de manera diferente porque la interaction con el usuario es mas activa que digamos dentro un articulo donde el usuario esta simplemente escuchando la informacion.

Hay roles que cambian las interacciones nativas, como el rol applicacion, que renuncia a la mayoria de patrones en la web para darle a los autores de la aplicacion mas flexibilidad de reinventar y mappear nuevas interactions. Esto lo podemos ver en Google Drive -> normalmente, si haces left click en una pagina web, te sale el menu del navegador con opciones. Si haces esto dentro de google drive, ellas han re-escrito esa interaction para sacar un menu propio de la aplicacion.

Es muy recomendado, no usar ARIA rols, ya que el HTML semantico nos lleva muy lejos muy economicamente. Estos rols se usan mas que todo en aplicaciones complejas y requieren mucho trabajo para implementar accesiblemente.

### ARIA properties
ARIA properties si ya son mas usados porque nos ayudan a comunicar atributos que son esentiales para el comportamiento o significado de un elemento pero que solemos comunicar visualmente. Cuando los agregamos a nuestros elementos, nos aseguramos que la experiencia en nuestro sitio es igual o parecido para todas nuestras usuarias.

Algunas propiedades que son utiles son :
{propiedad : uso
aria-live: uso }

Nosotras sí queremos agregar algunas aria propiedades a nuestro sitio, miremos en donde tienen sentido:

### ARIA states
Finalmente, otra manera que podemos extender la accessibilidad es usando aria states para comunicar estados y cambios de estados en elementos que solemos comunicar visualmente. 

En este ejemplo, hay algunas cosas en nuestra pagina que son puramente decorativas, que no ayudan para nada la comprension pero que si las detecta un lector de pantalla, puede confudir a nuestros usuarios. Ten cuidado escondiendo elementos de usuarios. El gol de la accesiblidad es igualar o enparejar la experiencia de nuestros sitios. No es accesible ofrecer experiencias reducidas a personas que usan tecnologias asistivas.

## Utilizar CSS para aumentar la acessibilidad de un sitio web

### Contrastes de color y iconos
- codigo

### Skip Links
- codigo

### Focus y hover styles
- codigo

## Extender la acesibilidad usando JavaScript

### Manejando el foco del teclado
- codigo

### Guiando lectores de pantalla cuando hay un cambio visual
- codigo

### Ayudando a nuestros usuarios entender que es requirido de ellos
Una parte que aun no hemos tocado es la importancia de que nuestros sitios sean faciles de entender y que sean en ciertas maneras predecibles. Esta crea bajo el tercer principio de la accesibilidad, la comprenhension. Cuando digo que sean faciles de entender, tienes que pensar en si las interacciones que le pides a tus usuarios son claras. Esto se puede hacer mas que todo con textos que incluyen instrucciones y explican lo que se espera de la interaccion. Si esperas un correo, le explicas a tus usuarios que esperas un correo en cierto campo. 

Cuando hablamos de que tu sitio sea predecible, aca tenemos en cuenta ciertos patrones a los que nos hemos acostumbrado en nuestro tiempo usando la web. Mira como nuestro sitio tiene un header, un main y un footer. Esto es la estructura que venimos a esperar de una pagina de portafolio y viendo esto, le ayuda a las personas que la vean a saber un poco que pueden esperar de la information en la pagina, conocerte y tu trabajo un poco mejor.

### Aggregando funcionalidad para explicar procesos (validar forms)
- codigo

### Manejando cambios dinamicos
- codigo

## Conclusion
### Siguientes pasos
Llegamos al final del curso pero tu camino en el mundo de la accessibilidad apenas comienza!
