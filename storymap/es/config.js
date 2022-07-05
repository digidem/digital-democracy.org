var config = {
    style: 'mapbox://styles/dd-mapeo/ckw44fy4214l214pbfaupc4ba',
    accessToken: 'pk.eyJ1IjoiZGQtbWFwZW8iLCJhIjoiY2tuaGtxN2hjMjg5YTJ1b29kb3k4a3hwMCJ9.Q4cR8vp-Z6pP9PTUswy7Vw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    useCustomLayers: true, // for custom sources and layers added to the storymap in sources.js
    projection: 'globe', // to change map projection
    inset: true,
    legend: true,
    bookmarks: true, // to add bookmarks to header and footer
    title: 'Tecnología en Solidaridad con Comunidades Defensores de la Tierra',
    logo: 'images/Digital Democracy.png', // to add a logo to the header
    translation: 'en',
	mobileView: '<div id="rotate-mobile"><em>Para una visualización óptima de este mapa narrativo en dispositivos móviles, gire su dispositivo a una orientación horizontal.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: '<strong>Para obtener más información y seguir Digital Democracy:</strong><br><a href="https://digital-democracy.org" class="fas fa-link" target="_blank"></a>&nbsp;<a href="https://www.instagram.com/digidem/" class="fab fa-instagram" target="_blank"></a>&nbsp;<a href="http://twitter.com/DigiDem" class="fab fa-twitter" target="_blank"></a>&nbsp;<a href="https://www.facebook.com/digidemocracy/" class="fab fa-facebook-f" target="_blank"></a>&nbsp;<a href="https://www.linkedin.com/company/-digital-democracy/" class="fab fa-linkedin" target="_blank"></a>&nbsp;<a href="https://www.youtube.com/user/digitaldemocracycam" class="fab fa-youtube" target="_blank"></a>',
    chapters: [
        {
            id: 'page0',
            alignment: "left",
            hidden: false,
            title: 'Descripción general',
            image: 'images/overview.jpg',
            caption: '',
            website: '<a href="https://www.digital-democracy.org/" target="_blank">Sitio de web de Digital Democracy</a>',
            legend: '<img src="images/mapeo-icon-circle.svg"><span id="text" style="vertical-align: super;">Socios activos y usuarios de nuestras herramientas</span><br><img src="images/mapeo-icon-circle-gray.svg"><span id="text" style="vertical-align: super;">Áreas de proyectos anteriores de Digital Democracy</span><br><br><span style="font-size: 0.85em;"><em>Nombres de comunidades indígenas en el mapa cortesía de Native Land Digital</em></span>',
            description: 'Digital Democracy se asocia con comunidades marginalizadas de todo el mundo para crear herramientas para defender sus derechos ambientales y humanos. Visualizamos un planeta saludable y vibrante donde todas las personas puedan participar en las decisiones que gobiernan sus vidas.<br><br>Nuestro trabajo se basa en relaciones profundas y de confianza con socios locales. Digital Democracy apoya a las comunidades que trabajan para defender sus derechos humanos y ambientales, pero que carecen de las herramientas para hacerlo. Nuestros socios locales representan a las comunidades marginalizadas de todo el mundo, incluidos los pueblos indígenas y las minorías étnicas, cuyos derechos humanos se ven más gravemente afectados por el abuso ambiental. Capacitamos a nuestros socios en el uso de herramientas digitales básicas para recopilar, compartir y gestionar información sobre infracciones ambientales y de derechos humanos.<br><br><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube-nocookie.com/embed/xw7SyRCOtEc?controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen; picture-in-picture"></iframe></div><br><br>BBasándose en años de trabajo con las comunidades locales, Digital Democracy observó brechas tecnológicas persistentes que no estaban siendo cubiertas por las tecnologías corporativas. En 2013, comenzamos a crear conjuntamente soluciones tecnológicas con nuestros socios en la Amazonía para desarrollar una herramienta que satisficiera sus necesidades, lo que resultó en <a href="https://mapeo.app">Mapeo</a>, una herramienta de código abierto para los defensores de la tierra y los derechos humanos.<br><br><em>Este story map es un documento vivo y agregaremos más historias de socios en el futuro. ¡Manténganse atento!</em><br><br><strong>✋ Haga clic o presione en el mapa para que deje de girar, desplácese y haga zoom en el mapa, y desplace el cursor sobre las ubicaciones para conocer a nuestros socios.</strong>',
                location: {
                center: [-75, 7], 
				zoom: 3,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            spinGlobe: true,
            mapInteractive: true,
            callback: "browseMap",
            onChapterEnter: [
                {
                    layer: "dd-workareas",
                    opacity: 1,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 1,
                },
                {
                    layer: 'native-land',
                    opacity: 1
                },
                {
                    layer: "country-label",
                    opacity: 0,
                },                
                {
                    layer: "state-label",
                    opacity: 0,
                },
                {
                    layer: "settlement-major-label",
                    opacity: 0,
                },
                {
                    layer: "settlement-minor-label",
                    opacity: 0,
                },
                {
                    layer: "settlement-subdivision-label",
                    opacity: 0,
                },
                {
                    layer: 'admin-0-boundary-disputed',
                    opacity: 0
                }, 
                {
                    layer: 'admin-0-boundary',
                    opacity: 0
                },  
                { 
                    layer: "green territory",
                    opacity: 0,
                },
                {
                    layer: "chacra-areas",
                    opacity: 0,
                },
                {
                    layer: "new-chacra-areas",
                    opacity: 0,
                },
                {
                    layer: "zona-palmera",
                    opacity: 0,
                },
                {
                    layer: "new-zona-palmera",
                    opacity: 0,
                },
                {
                    layer: "zona-moretal",
                    opacity: 0,
                },
                {
                    layer: "new-zona-moretal",
                    opacity: 0,
                },
                {
                    layer: "zona-toketibo",
                    opacity: 0,
                },
                {
                    layer: "new-zona-toketibo",
                    opacity: 0,
                },
                {
                    layer: "zona-miwago",
                    opacity: 0,
                },
                {
                    layer: "new-zona-miwago",
                    opacity: 0,
                },
                {
                    layer: "zona peces",
                    opacity: 0,
                },
                {
                    layer: "new-zona-peces",
                    opacity: 0,
                },
                {
                    layer: "zona animales",
                    opacity: 0,
                },
                {
                    layer: "new-zona animales",
                    opacity: 0,
                },
                {
                    layer: "new-zona rastrojo",
                    opacity: 0,
                },
                {
                    layer: "zona-animales-label",
                    opacity: 0,
                },
                {
                    layer: "new-zona animales-label",
                    opacity: 0,
                },
                {
                    layer: "zona-cascada",
                    opacity: 0,
                },
                {
                    layer: "new-zona-cascada",
                    opacity: 0,
                },
                {
                    layer: "zona de recoleccion",
                    opacity: 0,
                },
                {
                    layer: "new-zona-de-recoleccion",
                    opacity: 0,
                },
                {
                    layer: "Rivers-large highlight",
                    opacity: 0,
                },
                {
                    layer: "new Rivers-large highlight",
                    opacity: 0,
                },
                {
                    layer: "Rivers-large shadow",
                    opacity: 0,
                },
                {
                    layer: "new Rivers-large shadow",
                    opacity: 0,
                },
                {
                    layer: "Rivers-large",
                    opacity: 0,
                },
                {
                    layer: "new Rivers-large",
                    opacity: 0,
                },
                {
                    layer: "Rivers -small",
                    opacity: 0,
                },
                {
                    layer: "new Rivers -small",
                    opacity: 0,
                },
                {
                    layer: "camino-huangana",
                    opacity: 0,
                },
                {
                    layer: "new camino-huangana",
                    opacity: 0,
                },
                {
                    layer: "camino-jaguar",
                    opacity: 0,
                },
                {
                    layer: "new camino-jaguar",
                    opacity: 0,
                },
                {
                    layer: "camino-tapir",
                    opacity: 0,
                },
                {
                    layer: "new camino-tapir",
                    opacity: 0,
                },
                {
                    layer: "camino-sahino",
                    opacity: 0,
                },
                {
                    layer: "new camino-sahino",
                    opacity: 0,
                },
                {
                    layer: "camino-animales",
                    opacity: 0,
                },
                {
                    layer: "camino-animales copy",
                    opacity: 0,
                },
                {
                    layer: "caminos-aventura",
                    opacity: 0,
                },
                {
                    layer: "new caminos-aventura",
                    opacity: 0,
                },
                {
                    layer: "caminos-viajar",
                    opacity: 0,
                },
                {
                    layer: "new caminos-viajar",
                    opacity: 0,
                },
                {
                    layer: "caminos-caseria",
                    opacity: 0,
                },
                {
                    layer: "new caminos-caseria",
                    opacity: 0,
                },
                {
                    layer: "label-caminos-viajar",
                    opacity: 0,
                },
                {
                    layer: "new label-caminos-viajar",
                    opacity: 0,
                },
                {
                    layer: "label-caminos-otros",
                    opacity: 0,
                },
                {
                    layer: "new label-caminos-otros",
                    opacity: 0,
                },
                {
                    layer: "Lagos",
                    opacity: 0,
                },
                {
                    layer: "new- Lagos",
                    opacity: 0,
                },
                {
                    layer: "Cazadero-cueva",
                    opacity: 0,
                },
                {
                    layer: "new-Cazadero-cueva",
                    opacity: 0,
                },
                {
                    layer: "zona de caza",
                    opacity: 0,
                },
                {
                    layer: "new-zona de caza",
                    opacity: 0,
                },
                {
                    layer: "Fauna",
                    opacity: 0,
                },
                {
                    layer: "new-Fauna",
                    opacity: 0,
                },
                {
                    layer: "new-zona rastrojo copy",
                    opacity: 0,
                },
                {
                    layer: "Flora-no labels",
                    opacity: 0,
                },
                {
                    layer: "Flora-no labels copy",
                    opacity: 0,
                },
                {
                    layer: "Flora-with labels",
                    opacity: 0,
                },
                {
                    layer: "new Flora-with labels",
                    opacity: 0,
                },
                {
                    layer: "Flora-arbol-especie",
                    opacity: 0,
                },
                {
                    layer: "new Flora arbol especie",
                    opacity: 0,
                },
                {
                    layer: "zona-palmera label",
                    opacity: 0,
                },
                {
                    layer: "new-zona-palmera label",
                    opacity: 0,
                },
                {
                    layer: "zona-toketibe-label",
                    opacity: 0,
                },
                {
                    layer: "new-zona-toketibo copy",
                    opacity: 0,
                },
                {
                    layer: "zona-cascada-label",
                    opacity: 0,
                },
                {
                    layer: "new-zona-cascada copy",
                    opacity: 0,
                },
                {
                    layer: "zona de caza label",
                    opacity: 0,
                },
                {
                    layer: "new-zona de caza copy",
                    opacity: 0,
                },
                {
                    layer: "zona de recoleccion label",
                    opacity: 0,
                },
                {
                    layer: "new-zona-de-recoleccion copy",
                    opacity: 0,
                },
                {
                    layer: "Pesca",
                    opacity: 0,
                },
                {
                    layer: "new-Pesca",
                    opacity: 0,
                },
                {
                    layer: "Otros-y-labels",
                    opacity: 0,
                },
                {
                    layer: "new-otros-y-labels",
                    opacity: 0,
                },
                {
                    layer: "cazadores",
                    opacity: 0,
                },
                {
                    layer: "new-cazadores",
                    opacity: 0,
                },
                {
                    layer: "Banadero de sahino",
                    opacity: 0,
                },
                {
                    layer: "new-Banadero de sahino",
                    opacity: 0,
                },
                {
                    layer: "Historicos",
                    opacity: 0,
                },
                {
                    layer: "Historicos copy",
                    opacity: 0,
                },
                {
                    layer: "new-Historicos",
                    opacity: 0,
                },
                {
                    layer: "water points",
                    opacity: 0,
                },
                {
                    layer: "new water points",
                    opacity: 0,
                },
                {
                    layer: "water points labels",
                    opacity: 0,
                },
                {
                    layer: "new-water points labels",
                    opacity: 0,
                },
                {
                    layer: "Lakes labels",
                    opacity: 0,
                },
                {
                    layer: "new-Lakes labels",
                    opacity: 0,
                },
                {
                    layer: "Casas",
                    opacity: 0,
                },
                {
                    layer: "new-casas",
                    opacity: 0,
                },
                {
                    layer: "Casas labels",
                    opacity: 0,
                },
                {
                    layer: "new-casas labels",
                    opacity: 0,
                },
                {
                    layer: "Community facilities",
                    opacity: 0,
                },
                {
                    layer: "new - community facilities",
                    opacity: 0,
                },
                {
                    layer: "new - celular",
                    opacity: 0,
                },
                {
                    layer: "chacra",
                    opacity: 0,
                },
                {
                    layer: "new-chacra",
                    opacity: 0,
                },
                {
                    layer: "Campamento",
                    opacity: 0,
                },
                {
                    layer: "new-campamento",
                    opacity: 0,
                },
                {
                    layer: "Rivers -small label",
                    opacity: 0,
                },
                {
                    layer: "new Rivers -small label",
                    opacity: 0,
                },
                {
                    layer: "Rivers -large label",
                    opacity: 0,
                },
                {
                    layer: "new Rivers -large label",
                    opacity: 0,
                },
                {
                    layer: "waorani-territory-area-8r1igc",
                    opacity: 0,
                },
                {
                    layer: "comunidades-waorani-85wt49",
                    opacity: 0,
                },
                {
                    layer: "wao-comunidad-centro-12-18-61njjo copy",
                    opacity: 0,
                },
			],
            onChapterExit: [
            ]
        },
        {
            id: 'page1-before',
            alignment: "left",
            hidden: true,
            location: {
                center: [-77.28717, -1.22521], 
				zoom: 5,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "workAreas",
            onChapterEnter: [
                {
                    layer: "dd-workareas",
                    opacity: 1,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 0,
                },
                {
                    layer: 'native-land',
                    opacity: 1
                },
                {
                    layer: "country-label",
                    opacity: 1,
                },
                {
                    layer: "state-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-major-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-minor-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-subdivision-label",
                    opacity: 1,
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                },
                {
                    layer: 'admin-0-boundary-disputed',
                    opacity: 1
                }, 

			],
            onChapterExit: [
            ]
        },	
		{
            id: 'page1',
            alignment: "left",
            hidden: false,
            title: 'Mapeo del territorio con el pueblo Waorani (Ecuador)',
            image: 'images/waorani.jpg',
            caption: 'Pava Yeti de Kiwaro con el mapa del territorio completo de la comunidad, Dd 2017.',
            author: 'Por Aliya Ryan, Digital Democracy',
            website: '<a href="https://www.amazonfrontlines.org/who-should-decide/" target="_blank">Campaña “Quién debe decidir” muestra el mapa Waorani</a>',
            legend: '<span id="text">Todos los datos del mapa y el diseño de los símbolos son propiedad intelectual de la Nación Waorani y las comunidades participantes. No se permite la reproducción ni el uso de estos datos sin su consulta previa.</span>',
            description: '<em>"“El territorio Waorani es nuestra casa, y está lleno de vida, pero es frágil y se ve amenazada y siempre lucharemos por protegerla. El Estado viene y nos muestra mapas pero no los reconocemos: sus mapas están vacíos, pero nuestro territorio está lleno y vivo... Hacer los mapas ha construido unidad y solidaridad entre nuestros pueblos y son una oportunidad para contarle al mundo nuestra historia, nosotros mismos”.</em> Oswando Nenquimo<br><br>El pueblo Waorani vive en el corazón de la Amazonía ecuatoriana. En 2015 iniciaron un proyecto de mapeo territorial para defender sus tierras, cultura y los medios de vida de sus descendientes de las operaciones petroleras y otras actividades extractivas. El equipo de mapeo Waorani, dirigido por Oswando Nenquimo, trabajó junto con Alianza Ceibo y Amazon Frontlines, y se asoció con Digital Democracy para desarrollar Mapeo. Usaron Mapeo durante los 3 años de su proyecto de mapeo y ahora lo están usando como parte del trabajo continuo de monitoreo y defensa del territorio. El pueblo Waorani utilizó los mapas que hicieron de las 22 comunidades de la región del Pastaza en un juicio contra el Gobierno ecuatoriano en 2019, en oposición a una nueva concesión petrolera. El fallo histórico de los jueces acordó que la concesión se había creado sin el debido proceso de consulta, y que medio millón de acres de la selva tropical ancestral del pueblo Waorani estaban protegidos de la devastación.',
            location: {
                center: [-77.28717, -1.22521], 
				zoom: 13.5,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "waoMap",
            onChapterEnter: [
                {
                    layer: "country-label",
                    opacity: 1,
                },
                {
                    layer: "state-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-major-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-minor-label",
                    opacity: 1,
                },
                {
                    layer: "settlement-subdivision-label",
                    opacity: 1,
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                },
                {
                    layer: 'admin-0-boundary-disputed',
                    opacity: 1
                }, 
                {
                    layer: "dd-workareas",
                    opacity: 0,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 0,
                },
                {
                    layer: 'native-land',
                    opacity: 0
                },          
                { 
                    layer: "green territory",
                    opacity: 0.44,
                },
                {
                    layer: "chacra-areas",
                    opacity: 0.22,
                },
                {
                    layer: "new-chacra-areas",
                    opacity: 1,
                },
                {
                    layer: "zona-palmera",
                    opacity: 0.5,
                },
                {
                    layer: "new-zona-palmera",
                    opacity: 0.5,
                },
                {
                    layer: "zona-moretal",
                    opacity: 0.59,
                },
                {
                    layer: "new-zona-moretal",
                    opacity: 0.59,
                },
                {
                    layer: "zona-toketibo",
                    opacity: 0.25,
                },
                {
                    layer: "new-zona-toketibo",
                    opacity: 0.59,
                },
                {
                    layer: "zona-miwago",
                    opacity: 0.25,
                },
                {
                    layer: "new-zona-miwago",
                    opacity: 0.25,
                },
                {
                    layer: "zona peces",
                    opacity: 0.72,
                },
                {
                    layer: "new-zona-peces",
                    opacity: 0.72,
                },
                {
                    layer: "zona animales",
                    opacity: 0.5,
                },
                {
                    layer: "new-zona animales",
                    opacity: 0.5,
                },
                {
                    layer: "new-zona rastrojo",
                    opacity: 0.5,
                },
                {
                    layer: "zona-animales-label",
                    opacity: 0.41,
                },
                {
                    layer: "new-zona animales-label",
                    opacity: 0.41,
                },
                {
                    layer: "zona-cascada",
                    opacity: 0.22,
                },
                {
                    layer: "new-zona-cascada",
                    opacity: 0.22,
                },
                {
                    layer: "zona de recoleccion",
                    opacity: 0.44,
                },
                {
                    layer: "new-zona-de-recoleccion",
                    opacity: 0.44,
                },
                {
                    layer: "Rivers-large highlight",
                    opacity: 1,
                },
                {
                    layer: "new Rivers-large highlight",
                    opacity: 1,
                },
                {
                    layer: "Rivers-large shadow",
                    opacity: 1,
                },
                {
                    layer: "new Rivers-large shadow",
                    opacity: 1,
                },
                {
                    layer: "Rivers-large",
                    opacity: 1,
                },
                {
                    layer: "new Rivers-large",
                    opacity: 1,
                },
                {
                    layer: "Rivers -small",
                    opacity: 1,
                },
                {
                    layer: "new Rivers -small",
                    opacity: 1,
                },
                {
                    layer: "camino-huangana",
                    opacity: 0.65,
                },
                {
                    layer: "new camino-huangana",
                    opacity: 0.65,
                },
                {
                    layer: "camino-jaguar",
                    opacity: 0.65,
                },
                {
                    layer: "new camino-jaguar",
                    opacity: 0.65,
                },
                {
                    layer: "camino-tapir",
                    opacity: 0.65,
                },
                {
                    layer: "new camino-tapir",
                    opacity: 0.65,
                },
                {
                    layer: "camino-sahino",
                    opacity: 0.65,
                },
                {
                    layer: "new camino-sahino",
                    opacity: 0.65,
                },
                {
                    layer: "camino-animales",
                    opacity: 0.65,
                },
                {
                    layer: "camino-animales copy",
                    opacity: 0.65,
                },
                {
                    layer: "caminos-aventura",
                    opacity: 0.45,
                },
                {
                    layer: "new caminos-aventura",
                    opacity: 0.45,
                },
                {
                    layer: "caminos-viajar",
                    opacity: 0.45,
                },
                {
                    layer: "new caminos-viajar",
                    opacity: 0.45,
                },
                {
                    layer: "caminos-caseria",
                    opacity: 0.7,
                },
                {
                    layer: "new caminos-caseria",
                    opacity: 0.7,
                },
                {
                    layer: "label-caminos-viajar",
                    opacity: 1,
                },
                {
                    layer: "new label-caminos-viajar",
                    opacity: 1,
                },
                {
                    layer: "label-caminos-otros",
                    opacity: 1,
                },
                {
                    layer: "new label-caminos-otros",
                    opacity: 1,
                },
                {
                    layer: "Lagos",
                    opacity: 0.7,
                },
                {
                    layer: "new- Lagos",
                    opacity: 0.7,
                },
                {
                    layer: "Cazadero-cueva",
                    opacity: 0.8,
                },
                {
                    layer: "new-Cazadero-cueva",
                    opacity: 0.8,
                },
                {
                    layer: "zona de caza",
                    opacity: 0.5,
                },
                {
                    layer: "new-zona de caza",
                    opacity: 0.5,
                },
                {
                    layer: "Fauna",
                    opacity: 0.9,
                },
                {
                    layer: "new-Fauna",
                    opacity: 0.9,
                },
                {
                    layer: "new-zona rastrojo copy",
                    opacity: 0.41,
                },
                {
                    layer: "Flora-no labels",
                    opacity: 1,
                },
                {
                    layer: "Flora-no labels copy",
                    opacity: 1,
                },
                {
                    layer: "Flora-with labels",
                    opacity: 1,
                },
                {
                    layer: "new Flora-with labels",
                    opacity: 1,
                },
                {
                    layer: "Flora-arbol-especie",
                    opacity: 1,
                },
                {
                    layer: "new Flora arbol especie",
                    opacity: 1,
                },
                {
                    layer: "zona-palmera label",
                    opacity: 1,
                },
                {
                    layer: "new-zona-palmera label",
                    opacity: 1,
                },
                {
                    layer: "zona-toketibe-label",
                    opacity: 1,
                },
                {
                    layer: "new-zona-toketibo copy",
                    opacity: 1,
                },
                {
                    layer: "zona-cascada-label",
                    opacity: 1,
                },
                {
                    layer: "new-zona-cascada copy",
                    opacity: 1,
                },
                {
                    layer: "zona de caza label",
                    opacity: 1,
                },
                {
                    layer: "new-zona de caza copy",
                    opacity: 1,
                },
                {
                    layer: "zona de recoleccion label",
                    opacity: 1,
                },
                {
                    layer: "new-zona-de-recoleccion copy",
                    opacity: 1,
                },
                {
                    layer: "Pesca",
                    opacity: 1,
                },
                {
                    layer: "new-Pesca",
                    opacity: 1,
                },
                {
                    layer: "Otros-y-labels",
                    opacity: 1,
                },
                {
                    layer: "new-otros-y-labels",
                    opacity: 1,
                },
                {
                    layer: "cazadores",
                    opacity: 1,
                },
                {
                    layer: "new-cazadores",
                    opacity: 1,
                },
                {
                    layer: "Banadero de sahino",
                    opacity: 1,
                },
                {
                    layer: "new-Banadero de sahino",
                    opacity: 1,
                },
                {
                    layer: "Historicos",
                    opacity: 1,
                },
                {
                    layer: "Historicos copy",
                    opacity: 1,
                },
                {
                    layer: "new-Historicos",
                    opacity: 1,
                },
                {
                    layer: "water points",
                    opacity: 1,
                },
                {
                    layer: "new water points",
                    opacity: 1,
                },
                {
                    layer: "water points labels",
                    opacity: 1,
                },
                {
                    layer: "new-water points labels",
                    opacity: 1,
                },
                {
                    layer: "Lakes labels",
                    opacity: 1,
                },
                {
                    layer: "new-Lakes labels",
                    opacity: 1,
                },
                {
                    layer: "Casas",
                    opacity: 1,
                },
                {
                    layer: "new-casas",
                    opacity: 1,
                },
                {
                    layer: "Casas labels",
                    opacity: 1,
                },
                {
                    layer: "new-casas labels",
                    opacity: 1,
                },
                {
                    layer: "Community facilities",
                    opacity: 1,
                },
                {
                    layer: "new - community facilities",
                    opacity: 1,
                },
                {
                    layer: "new - celular",
                    opacity: 1,
                },
                {
                    layer: "chacra",
                    opacity: 1,
                },
                {
                    layer: "new-chacra",
                    opacity: 1,
                },
                {
                    layer: "Campamento",
                    opacity: 1,
                },
                {
                    layer: "new-campamento",
                    opacity: 1,
                },
                {
                    layer: "Rivers -small label",
                    opacity: 1,
                },
                {
                    layer: "new Rivers -small label",
                    opacity: 1,
                },
                {
                    layer: "Rivers -large label",
                    opacity: 1,
                },
                {
                    layer: "new Rivers -large label",
                    opacity: 1,
                },
                {
                    layer: "waorani-territory-area-8r1igc",
                    opacity: 1,
                },
                {
                    layer: "comunidades-waorani-85wt49",
                    opacity: 1,
                },
                {
                    layer: "wao-comunidad-centro-12-18-61njjo copy",
                    opacity: 1,
                },
			],
            onChapterExit: [
                { 
                    layer: "green territory",
                    opacity: 0,
                },
                {
                    layer: "chacra-areas",
                    opacity: 0,
                },
                {
                    layer: "new-chacra-areas",
                    opacity: 0,
                },
                {
                    layer: "zona-palmera",
                    opacity: 0,
                },
                {
                    layer: "new-zona-palmera",
                    opacity: 0,
                },
                {
                    layer: "zona-moretal",
                    opacity: 0,
                },
                {
                    layer: "new-zona-moretal",
                    opacity: 0,
                },
                {
                    layer: "zona-toketibo",
                    opacity: 0,
                },
                {
                    layer: "new-zona-toketibo",
                    opacity: 0,
                },
                {
                    layer: "zona-miwago",
                    opacity: 0,
                },
                {
                    layer: "new-zona-miwago",
                    opacity: 0,
                },
                {
                    layer: "zona peces",
                    opacity: 0,
                },
                {
                    layer: "new-zona-peces",
                    opacity: 0,
                },
                {
                    layer: "zona animales",
                    opacity: 0,
                },
                {
                    layer: "new-zona animales",
                    opacity: 0,
                },
                {
                    layer: "new-zona rastrojo",
                    opacity: 0,
                },
                {
                    layer: "zona-animales-label",
                    opacity: 0,
                },
                {
                    layer: "new-zona animales-label",
                    opacity: 0,
                },
                {
                    layer: "zona-cascada",
                    opacity: 0,
                },
                {
                    layer: "new-zona-cascada",
                    opacity: 0,
                },
                {
                    layer: "zona de recoleccion",
                    opacity: 0,
                },
                {
                    layer: "new-zona-de-recoleccion",
                    opacity: 0,
                },
                {
                    layer: "Rivers-large highlight",
                    opacity: 0,
                },
                {
                    layer: "new Rivers-large highlight",
                    opacity: 0,
                },
                {
                    layer: "Rivers-large shadow",
                    opacity: 0,
                },
                {
                    layer: "new Rivers-large shadow",
                    opacity: 0,
                },
                {
                    layer: "Rivers-large",
                    opacity: 0,
                },
                {
                    layer: "new Rivers-large",
                    opacity: 0,
                },
                {
                    layer: "Rivers -small",
                    opacity: 0,
                },
                {
                    layer: "new Rivers -small",
                    opacity: 0,
                },
                {
                    layer: "camino-huangana",
                    opacity: 0,
                },
                {
                    layer: "new camino-huangana",
                    opacity: 0,
                },
                {
                    layer: "camino-jaguar",
                    opacity: 0,
                },
                {
                    layer: "new camino-jaguar",
                    opacity: 0,
                },
                {
                    layer: "camino-tapir",
                    opacity: 0,
                },
                {
                    layer: "new camino-tapir",
                    opacity: 0,
                },
                {
                    layer: "camino-sahino",
                    opacity: 0,
                },
                {
                    layer: "new camino-sahino",
                    opacity: 0,
                },
                {
                    layer: "camino-animales",
                    opacity: 0,
                },
                {
                    layer: "camino-animales copy",
                    opacity: 0,
                },
                {
                    layer: "caminos-aventura",
                    opacity: 0,
                },
                {
                    layer: "new caminos-aventura",
                    opacity: 0,
                },
                {
                    layer: "caminos-viajar",
                    opacity: 0,
                },
                {
                    layer: "new caminos-viajar",
                    opacity: 0,
                },
                {
                    layer: "caminos-caseria",
                    opacity: 0,
                },
                {
                    layer: "new caminos-caseria",
                    opacity: 0,
                },
                {
                    layer: "label-caminos-viajar",
                    opacity: 0,
                },
                {
                    layer: "new label-caminos-viajar",
                    opacity: 0,
                },
                {
                    layer: "label-caminos-otros",
                    opacity: 0,
                },
                {
                    layer: "new label-caminos-otros",
                    opacity: 0,
                },
                {
                    layer: "Lagos",
                    opacity: 0,
                },
                {
                    layer: "new- Lagos",
                    opacity: 0,
                },
                {
                    layer: "Cazadero-cueva",
                    opacity: 0,
                },
                {
                    layer: "new-Cazadero-cueva",
                    opacity: 0,
                },
                {
                    layer: "zona de caza",
                    opacity: 0,
                },
                {
                    layer: "new-zona de caza",
                    opacity: 0,
                },
                {
                    layer: "Fauna",
                    opacity: 0,
                },
                {
                    layer: "new-Fauna",
                    opacity: 0,
                },
                {
                    layer: "new-zona rastrojo copy",
                    opacity: 0,
                },
                {
                    layer: "Flora-no labels",
                    opacity: 0,
                },
                {
                    layer: "Flora-no labels copy",
                    opacity: 0,
                },
                {
                    layer: "Flora-with labels",
                    opacity: 0,
                },
                {
                    layer: "new Flora-with labels",
                    opacity: 0,
                },
                {
                    layer: "Flora-arbol-especie",
                    opacity: 0,
                },
                {
                    layer: "new Flora arbol especie",
                    opacity: 0,
                },
                {
                    layer: "zona-palmera label",
                    opacity: 0,
                },
                {
                    layer: "new-zona-palmera label",
                    opacity: 0,
                },
                {
                    layer: "zona-toketibe-label",
                    opacity: 0,
                },
                {
                    layer: "new-zona-toketibo copy",
                    opacity: 0,
                },
                {
                    layer: "zona-cascada-label",
                    opacity: 0,
                },
                {
                    layer: "new-zona-cascada copy",
                    opacity: 0,
                },
                {
                    layer: "zona de caza label",
                    opacity: 0,
                },
                {
                    layer: "new-zona de caza copy",
                    opacity: 0,
                },
                {
                    layer: "zona de recoleccion label",
                    opacity: 0,
                },
                {
                    layer: "new-zona-de-recoleccion copy",
                    opacity: 0,
                },
                {
                    layer: "Pesca",
                    opacity: 0,
                },
                {
                    layer: "new-Pesca",
                    opacity: 0,
                },
                {
                    layer: "Otros-y-labels",
                    opacity: 0,
                },
                {
                    layer: "new-otros-y-labels",
                    opacity: 0,
                },
                {
                    layer: "cazadores",
                    opacity: 0,
                },
                {
                    layer: "new-cazadores",
                    opacity: 0,
                },
                {
                    layer: "Banadero de sahino",
                    opacity: 0,
                },
                {
                    layer: "new-Banadero de sahino",
                    opacity: 0,
                },
                {
                    layer: "Historicos",
                    opacity: 0,
                },
                {
                    layer: "Historicos copy",
                    opacity: 0,
                },
                {
                    layer: "new-Historicos",
                    opacity: 0,
                },
                {
                    layer: "water points",
                    opacity: 0,
                },
                {
                    layer: "new water points",
                    opacity: 0,
                },
                {
                    layer: "water points labels",
                    opacity: 0,
                },
                {
                    layer: "new-water points labels",
                    opacity: 0,
                },
                {
                    layer: "Lakes labels",
                    opacity: 0,
                },
                {
                    layer: "new-Lakes labels",
                    opacity: 0,
                },
                {
                    layer: "Casas",
                    opacity: 0,
                },
                {
                    layer: "new-casas",
                    opacity: 0,
                },
                {
                    layer: "Casas labels",
                    opacity: 0,
                },
                {
                    layer: "new-casas labels",
                    opacity: 0,
                },
                {
                    layer: "Community facilities",
                    opacity: 0,
                },
                {
                    layer: "new - community facilities",
                    opacity: 0,
                },
                {
                    layer: "new - celular",
                    opacity: 0,
                },
                {
                    layer: "chacra",
                    opacity: 0,
                },
                {
                    layer: "new-chacra",
                    opacity: 0,
                },
                {
                    layer: "Campamento",
                    opacity: 0,
                },
                {
                    layer: "new-campamento",
                    opacity: 0,
                },
                {
                    layer: "Rivers -small label",
                    opacity: 0,
                },
                {
                    layer: "new Rivers -small label",
                    opacity: 0,
                },
                {
                    layer: "Rivers -large label",
                    opacity: 0,
                },
                {
                    layer: "new Rivers -large label",
                    opacity: 0,
                },
                {
                    layer: "waorani-territory-area-8r1igc",
                    opacity: 0,
                },
                {
                    layer: "comunidades-waorani-85wt49",
                    opacity: 0,
                },
                {
                    layer: "wao-comunidad-centro-12-18-61njjo copy",
                    opacity: 0,
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                },
                {
                    layer: 'admin-0-boundary-disputed',
                    opacity: 1
                }, 

            ]
        },
        {
            id: 'page2-before',
            alignment: "left",
            hidden: true,
            location: {
                center: [-71.284, -12.768], 
				zoom: 5,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "workAreas",
            onChapterEnter: [
                {
                    layer: "dd-workareas",
                    opacity: 1,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 0,
                },
                {
                    layer: 'native-land',
                    opacity: 1
                },
			],
            onChapterExit: [
            ]
        },		        
		{
            id: 'page2',
            alignment: "left",
            hidden: false,
            title: 'Monitoreo con el ECA-Amarakaeri (Perú)',
            image: 'images/eca.jpg',
            caption: '',
            author: 'Por Mar Cartró Sabaté, Digital Democracy',
            website: '<a href="https://amarakaeri.org/" target="_blank">Sitio de web de ECA Amarakaeri</a>',
            legend: '<img src="images/castle-15.png"><span id="text">Estación de control</span><br><span id="block" style="background-color: #b5f231; opacity: 0.5;"></span><span id="text">Reserva Comunal Amarakaeri</span><br><span id="block" style="background-color: #3adf11; opacity: 0.5;"></span><span id="text">Zona de amortiguamiento</span><br><span id="block" style="background-color: #f1a241; opacity: 0.5;"></span><span id="text">Área de las comunidades</span><br><span id="block" style="background-color: #fd1717; opacity: 0.5;"></span><span id="text">Concesiones mineras</span>',
            description: 'En el departamento peruano de Madre de Dios, los Pueblos Harakbut, Matsiguenka y Yine han vigilado y protegido sus territorios ancestrales durante siglos y se consideran dueños y guardianes de esta parte de la Amazonía. En 2002, luego de 18 años de lucha constante, parte de su territorio ancestral fue reconocido como área natural protegida, denominada Reserva Comunal Amarakaeri. Desde 2006, la reserva es cogestionada entre diez comunidades indígenas (organizadas por el Ejecutor de Contrato de Administración de la Reserva Comunal Amarakaeri - ECA Amarakaeri) y el Servicio Nacional de Áreas Protegidas (SERNANP), con el apoyo de dos organizaciones indígenas (FENAMAD y COHARYIMA). Vigilantes comunales, guardaparques y técnicos utilizan la aplicación Mapeo, junto con otras herramientas tecnológicas, para proteger sus bosques ancestrales de la minería y tala ilegal e interrelacionar los conocimientos ancestrales de vigilancia y monitoreo con el conocimiento científico. Sus esfuerzos ejemplares han sido reconocidos por el Premio Ecuatorial en 2019. Además, la UICN incluyó la Reserva Comunal Amarakaeri en su Lista Verde debido a su alto estado de conservación. El ECA Amarakaeri colabora estrechamente con Digital Democracy para seguir desarrollando y mejorando la herramienta Mapeo, testeándola continuamente y ofreciendo comentarios sobre cómo mejorar la herramienta y sobre qué funciones deben crearse o mejorarse.<br><br><em>“Las herramientas Mapeo Mobile y Mapeo Desktop han sido implementadas en nuestro sistema de monitoreo en Amarakaeri, y con ellas hemos desarrollado un sistema de alertas tempranas sobre la afectación de los territorios comunales y la propia Reserva Comunal Amaraekari.”</em> - Walter Quertehuari Dariquebe, Presidente del ECA Amarakaeri.<br><br><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube-nocookie.com/embed/4Dup9MDxWJM?controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen; picture-in-picture"></iframe></div>',
            location: {
                center: [-71.284, -12.768], 
				zoom: 9,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "ecaMap",
            onChapterEnter: [
                {
                    layer: "eca-reserve-label",
                    opacity: 1,
                },
                {
                    layer: "eca-community-labels",
                    opacity: 1,
                },
                {
                    layer: "eca-puestos",
                    opacity: 1,
                },
                {
                    layer: "eca-minero",
                    opacity: 1,
                },
                {
                    layer: "eca-reserve",
                    opacity: 1,
                },
                {
                    layer: "eca-community",
                    opacity: 1,
                },
                {
                    layer: "eca-buffer",
                    opacity: 1,
                },
                {
                    layer: "dd-workareas",
                    opacity: 0,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 0,
                },
                {
                    layer: 'native-land',
                    opacity: 0
                },
			],
            onChapterExit: [
                {
                    layer: "eca-reserve-label",
                    opacity: 0,
                },
                {
                    layer: "eca-community-labels",
                    opacity: 0,
                },
                {
                    layer: "eca-puestos",
                    opacity: 0,
                },
                {
                    layer: "eca-minero",
                    opacity: 0,
                },
                {
                    layer: "eca-reserve",
                    opacity: 0,
                },
                {
                    layer: "eca-community",
                    opacity: 0,
                },
                {
                    layer: "eca-buffer",
                    opacity: 0,
                },  
                {
                    layer: 'native-land',
                    opacity: 0
                },
            ]
        },
        {
            id: 'page3-before',
            alignment: "left",
            hidden: true,
            location: {
                center: [34.56696, 1.026], 
				zoom: 5,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "workAreas",
            onChapterEnter: [
                {
                    layer: "dd-workareas",
                    opacity: 1,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 0,
                },
                {
                    layer: 'native-land',
                    opacity: 1
                },
			],
            onChapterExit: [
            ]
        },	
		{
            id: 'page3',
            alignment: "left",
            hidden: false,
            title: 'Mapeo histórico de la tenencia de la tierra con el pueblo Ogiek (Kenia)',
            image: 'images/ogiek.jpg',
            caption: 'Crédito de la foto: Phoebe Ndiema (CIPDP)',
            author: 'Por Rudo Kemper, Digital Democracy',
            website: '<a href="https://www.forestpeoples.org/en/partner/chepkitale-indigenous-peoples-development-project-cipdp" target="_blank">Sitio de web de CIPDP</a>',
            legend: '<span id="block" style="background-color: #f7b322; opacity: 0.5;"></span><span id="text">Tierras comunales Chepkitale</span><br><span id="block" style="background-color: #1b9d2a; opacity: 0.5;"></span><span id="text">Parque nacional Monte Elgon</span><br><span id="block" style="background-color: #55f538; opacity: 0.5;"></span><span id="text">Reservas forestales</span><br><span id="block" style="background-color: #ee4444; opacity: 0.5;"></span><span id="text">Área donde ocurren las invasiones</span><br>',
            description: 'El pueblo Ogiek es una de las últimas comunidades de cazadores-recolectores y habitantes de los bosques en África. Tradicionalmente recolectores de miel, sobreviven principalmente de frutos y raíces silvestres, caza y apicultura tradicional. Desde principios del siglo XX, las comunidades Ogiek del Monte Elgon en Kenia han sido objeto de forma rutinaria de desalojos forzosos arbitrarios de sus tierras ancestrales y de que sus tierras se asignen a colonos agrícolas o parques nacionales. El Proyecto de Desarrollo de los Pueblos Indígenas Chepkitale (CIPDP) es una organización comunitaria Ogiek que trabaja para abogar por la recuperación de los derechos territoriales de las tierras ancestrales Ogiek.<br><br>Digital Democracy está ayudando a la comunidad Ogiek a utilizar Mapeo para recopilar y ser dueños de datos sobre sus tierras ancestrales para apoyar los procesos de defensa liderados por CIPDP. En asociación con Forest Peoples Programme, brindamos acompañamiento remoto para ayudar a construir una configuración de Mapeo personalizada para el pueblo Ogiek y capacitar a un equipo dedicado de mapeadores del CIPDP para usar Mapeo, de modo que puedan continuar y capacitar a otros en la comunidad e iniciar un proceso de mapeo participativo en todo el territorio ancestral. La esperanza es que los datos y mapas generados, junto con la solidaridad construida durante el proceso, empoderen al pueblo Ogiek para negociar por sus derechos territoriales y también aclaren los límites entre las tierras de otras comunidades vecinas.',
            location: {
                center: [34.56696, 1.026], 
				zoom: 9.95,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'ogiek-1',
                    opacity: 0.5
                },
                {
                    layer: 'ogiek-2',
                    opacity: 1
                },
                {
                    layer: 'ogiek-label-1',
                    opacity: 0
                },
                {
                    layer: 'ogiek-label-2',
                    opacity: 1
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                },        
                {
                    layer: 'admin-0-boundary-disputed',
                    opacity: 1
                }, 

                {
                    layer: 'settlement-minor-label',
                    opacity: 1
                },       
                {
                    layer: 'state-label',
                    opacity: 1
                },
                {
                    layer: "dd-workareas",
                    opacity: 0,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 0,
                },
                {
                    layer: 'native-land',
                    opacity: 0
                },
			],
            onChapterExit: [
                {
                    layer: 'ogiek-1',
                    opacity: 0
                },
                {
                    layer: 'ogiek-2',
                    opacity: 0
                },
                {
                    layer: 'ogiek-label-1',
                    opacity: 0
                },
                {
                    layer: 'ogiek-label-2',
                    opacity: 0
                },
            ]
        },		
        {
            id: 'page4-before',
            alignment: "left",
            hidden: true,
            location: {
                center: [-79.31420, 43.61287], 
				zoom: 5,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "workAreas",
            onChapterEnter: [
                {
                    layer: "dd-workareas",
                    opacity: 1,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 0,
                },
                {
                    layer: 'native-land',
                    opacity: 1
                },
			],
            onChapterExit: [
            ]
        },	
		{
            id: 'page4',
            alignment: "left",
            hidden: false,
            title: 'Mapeo de historias orales con Ohneganos (Canadá)',
            image: 'images/ohneganos.jpg',
            caption: 'Crédito de la foto: Rudo Kemper (Digital Democracy)',
            author: 'Por Rudo Kemper, Digital Democracy',
            website: '<a href="https://www.ohneganos.com/" target="_blank">Sitio de web de Ohneganos</a>',
            legend: '<span id="block" style="background-color: #c3beb1; opacity: 0.5;"></span><span id="text">Haldimand Tract</span><br><span id="block" style="background-color: #f39b16; opacity: 0.5;"></span><span id="text">Six Nations Reserve of the Grand River</span><br>',
            description: 'Six Nations of the Grand River es la reserva más grande de las Primeras Naciones en Canadá. Es la única reserva en América del Norte que tiene representantes de las seis naciones Haudenosaunee que viven juntas. Estas naciones son Mohawk, Cayuga, Onondaga, Oneida, Seneca y Tuscarora. Algunos Lenape (anteriormente conocidos como Delaware) también viven en el territorio. El pueblo Haudenosaunee (o iroqués) habitaba originalmente un área mucho más grande que se extendía por los Estados Unidos y Canadá, y los franceses les otorgaron legalmente una gran extensión de tierra a través del Tratado Haldimand de 1784; esto luego se eliminó, y Six Nations representa solo el 5% de esa área. La organización Ohneganos es un programa indígena de investigación del agua dirigido por la Dra. Dawn Martin Hill, profesora de la Universidad McMaster, y está trabajando para cocrear herramientas indígenas para monitorear la calidad del agua y herramientas de métodos mixtos para recopilar y capacitar en conocimientos ecológicos indígenas.<br><br><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube-nocookie.com/embed/cybEjHDFKAA?controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen; picture-in-picture"></iframe></div><br><br>Como parte del programa de investigación del conocimiento ecológico indígena de Ohneganos, Digital Democracy está brindando apoyo programático a Ohneganos en el uso de Mapeo para recopilar conocimiento ecológico indígena en Six Nations y registrar historias orales basadas en lugares sobre sitios culturales Haudenosaunee relevantes en sus tierras. El equipo de Ohneganos, junto con una persona coordinadora del mapeo local, usará Mapeo Mobile y Desktop para recopilar y organizar datos, y mapeará y visualizará los datos geoespaciales y las historias usando la aplicación de código abierto <a href="https://terrastories.io">Terrastories</a>. Este proyecto representa el primer piloto en probar un flujo de trabajo de Mapeo a Terrastories.',
            location: {
                center: [-79.31420, 43.61287], 
				zoom: 6.5,
				pitch: 0.00,
				bearing: 0.00,
                speed: 0.7
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'ohneganos-1',
                    opacity: 1
                },
                {
                    layer: 'ohneganos-2',
                    opacity: 1
                },
                {
                    layer: 'ohneganos-label-1',
                    opacity: 1
                },
                {
                    layer: 'ohneganos-label-2',
                    opacity: 1
                },
                {
                    layer: 'ohneganos-label-3',
                    opacity: 1
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 1
                },
                {
                    layer: 'admin-0-boundary-disputed',
                    opacity: 1
                }, 
                {
                    layer: 'settlement-minor-label',
                    opacity: 0
                },
                {
                    layer: 'state-label',
                    opacity: 0
                },
                {
                    layer: "dd-workareas",
                    opacity: 0,
                },
                {
                    layer: "dd-workareas-past",
                    opacity: 0,
                },
                {
                    layer: 'native-land',
                    opacity: 0
                },

			],
            onChapterExit: [
                {
                    layer: 'ohneganos-1',
                    opacity: 0
                },
                {
                    layer: 'ohneganos-2',
                    opacity: 0
                },
                {
                    layer: 'ohneganos-label-1',
                    opacity: 0
                },
                {
                    layer: 'ohneganos-label-2',
                    opacity: 0
                },
                {
                    layer: 'ohneganos-label-3',
                    opacity: 0
                },
            ]
        }
    ]
};