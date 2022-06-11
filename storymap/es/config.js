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
    title: 'Tecnología en Solidaridad con Comunidades de Primera Línea',
    logo: 'images/Digital Democracy.png', // to add a logo to the header
    translation: 'en',
	mobileView: '<div id="rotate-mobile"><em>Para una visualización óptima de este mapa narrativo en dispositivos móviles, gire su dispositivo a una orientación horizontal.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: '<strong>Para obtener más información y seguir Digital Democracy:</strong><br><a href="https://digital-democracy.org" class="fas fa-link" target="_blank"></a>&nbsp;<a href="https://www.instagram.com/digidem/" class="fab fa-instagram" target="_blank"></a>&nbsp;<a href="http://twitter.com/DigiDem" class="fab fa-twitter" target="_blank"></a>&nbsp;<a href="https://www.facebook.com/digidemocracy/" class="fab fa-facebook-f" target="_blank"></a>&nbsp;<a href="https://www.linkedin.com/company/-digital-democracy/" class="fab fa-linkedin" target="_blank"></a>&nbsp;<a href="https://www.youtube.com/user/digitaldemocracycam" class="fab fa-youtube" target="_blank"></a>',
    chapters: [
        {
            id: 'page0',
            alignment: "left",
            hidden: false,
            title: 'Overview',
            image: 'images/overview.jpg',
            caption: '',
            website: '<a href="https://www.digital-democracy.org/" target="_blank">Digital Democracy website</a>',
            legend: '<img src="images/mapeo-icon-circle.svg"><span id="text" style="vertical-align: super;">Active partners and users of our tools</span><br><img src="images/mapeo-icon-circle-gray.svg"><span id="text" style="vertical-align: super;">Past Digital Democracy project areas</span><br><br><span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: 'Digital Democracy partners with marginalized communities worldwide to build tools to defend their  environmental and human rights. We envision a healthy, vibrant planet where all people are able to participate in the decisions that govern their lives.<br><br>Our work lies in deep, trusting relationships with local partners. Digital Democracy supports communities who are working to defend their human and environmental rights, but who lack the tools to do so. Our local partners represent marginalized communities worldwide, including Indigenous Peoples and ethnic minorities, whose human rights are most severely impacted by environmental abuse. We train partners to use basic digital tools to gather, share, and manage information about environmental and human rights infractions.<br><br><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube-nocookie.com/embed/xw7SyRCOtEc?controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen; picture-in-picture"></iframe></div><br><br>Based on years of work with local communities, Digital Democracy observed persistent technological gaps that weren’t being met by corporate technologies. In 2013 we began to co-create tech solutions with our partners in the Amazon to develop a tool that would meet their needs, resulting in Mapeo, an open-source tool for frontline defenders.<br><br><em>This story map is a living document, and we will be adding more partner stories in the future. Stay tuned!</em><br><br><strong>✋ Click or press on the map to stop it from spinning, pan around and zoom in on the map, and hover over locations to learn about our partners, past and present.</strong>',
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
            title: 'Territory mapping with the Waorani (Ecuador)',
            image: 'images/waorani.jpg',
            caption: 'Pava Yeti from Kiwaro with the community’s completed territory map, Dd 2017.',
            author: 'Aliya Ryan, Digital Democracy',
            website: '<a href="https://www.amazonfrontlines.org/who-should-decide/" target="_blank">Who Should Decide campaign featuring the Waorani map</a>',
            legend: '<span id="text">All map data and symbol design are the intellectual property of the Waorani Nation and the participating communities. No reproduction of use of this data is permitted without their prior consultation.</span>',
            description: '<em>"Waorani Territory is our home, and it is full of life, but it is a fragile and threatened life which we will always fight to protect. The State comes and shows us maps but we don\'t recognize them: their maps are empty, but our territory is full and alive... Making the maps has built unity and solidarity amongst our people. And they are an opportunity to tell the world our story, ourselves."</em> Oswando Nenquimo<br><br>The Waorani people live in the heart of the Ecaudorian Amazon. In 2015 they started a territory mapping project to defend their lands, culture and the livelihoods of their children from oil operations and other extractive activities. The Waorani mapping team, lead by Oswando Nenquimo, worked alongside Alianza Ceibo and Amazon Frontlines, and partnered with Digital Democracy to codevelop Mapeo. They used Mapeo throughout the 3 years of their mapping project, and are now using it as part of ongoing territory monitoring and defense work. The Waorani used the maps they made of the 22 communities in the Pastaza region in a courtcase against the Ecuadorian Government in 2019, in opposition to a new oil concession. The judges\' landmark ruling agreed that the concession had been created without a due consultation process, and half a million acres of the Waorani\'s rainforest home was protected from devastation.',
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
            title: 'Monitoring with ECA-Amarakaeri (Peru)',
            image: 'images/eca.jpg',
            caption: '',
            author: 'Mar Cartró Sabaté, Digital Democracy',
            website: '<a href="https://amarakaeri.org/" target="_blank">ECA Amarakaeri website</a>',
            legend: '<img src="images/castle-15.png"><span id="text">Control station</span><br><span id="block" style="background-color: #b5f231; opacity: 0.5;"></span><span id="text">Amarakaeri Communal Reserve</span><br><span id="block" style="background-color: #3adf11; opacity: 0.5;"></span><span id="text">Buffer zone</span><br><span id="block" style="background-color: #f1a241; opacity: 0.5;"></span><span id="text">Community area</span><br><span id="block" style="background-color: #fd1717; opacity: 0.5;"></span><span id="text">Mining concession</span>',
            description: 'In the Peruvian Madre de Dios department, the Harakbut, Matsiguenka, and Yine Peoples have monitored and protected their ancestral territories for centuries and consider themselves as owners and guards of this part of the Amazon. In 2002, following 18 years of constant struggle, part of their ancestral territory was recognized as a natural protected area, called the Amarakaeri Communal Reserve. Since 2006, the reserve is co-managed between ten Indigenous communities (organized by the Executor of the Amarakaeri Communal Reserve Administration Contract, or ECA Amarakaeri) and the National Service of Protected Areas (SERNANP), with the support of two Indigenous organizations (FENAMAD and COHARYIMA). Community guards, park rangers and technicians use Mapeo, together with other state-of-the-art Technology, to protect their ancestral forests from illegal mining and logging and interrelate ancestral knowledge of surveillance and monitoring with scientific knowledge. Their exemplary efforts have been recognized by the Equator Prize in 2019. Moreover, the IUCN included the Amarakaeri Communal Reserve in their Green list because of its high conservation status. ECA Amarakaeri works closely with Digital Democracy to further develop and improve Mapeo, continually testing it and providing feedback on improving the tool and what features need to be created or improved.<br><br><em>“The Mapeo Mobile and Mapeo Desktop tools have been implemented in our monitoring system in Amarakaeri, and with them, we have developed an early warning system on the affectation of communal territories and the Amarakari Communal Reserve itself.”</em> - Walter Quertehuari Dariquebe, President of the ECA Amarakaeri.<br><br><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube-nocookie.com/embed/4Dup9MDxWJM?controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen; picture-in-picture"></iframe></div>',
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
            title: 'Historical land tenure mapping with the Ogiek (Kenya)',
            image: 'images/ogiek.jpg',
            caption: 'Autor de la foto: Phoebe Ndiema (CIPDP)',
            author: 'Rudo Kemper, Digital Democracy',
            website: '<a href="https://www.forestpeoples.org/en/partner/chepkitale-indigenous-peoples-development-project-cipdp" target="_blank">CIPDP website</a>',
            legend: '<span id="block" style="background-color: #f7b322; opacity: 0.5;"></span><span id="text">Chepkitale Community Lands</span><br><span id="block" style="background-color: #1b9d2a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #55f538; opacity: 0.5;"></span><span id="text">Forest reserves</span><br><span id="block" style="background-color: #ee4444; opacity: 0.5;"></span><span id="text">Encroachment area</span><br>',
            description: 'The Ogiek are one of Africa’s last remaining forest dwellers and hunter-gatherer communities. Traditionally honey-gatherers, they survive mainly on wild fruits and roots, game hunting and traditional beekeeping. Since the beginning of the twentieth century, the Ogiek at Mount Elgon in Kenya have been routinely subjected to arbitrary forced evictions from their ancestral lands, and having their lands allocated to agricultural settlers or national parks. The Chepkitale Indigenous Peoples Development Project (CIPDP) is an Ogiek community organization working to advocate for the recovery of land rights of Ogiek ancestral lands.<br><br>Digital Democracy is helping the Ogiek community in using Mapeo to collect and have local ownership over data about their ancestral lands to support the advocacy processes led by CIPDP. In partnership with the Forest Peoples Programme, we are providing remote accompaniment to help build a bespoke Mapeo configuration for the Ogiek and train a dedicated team of CIPDP mappers to use Mapeo, so they can go on and train others in the community, and initiate a participatory mapping process across the ancestral territory. The hope is that the data and maps generated, along with solidarity building during the process, will empower the Ogiek to negotiate for their land rights, and also clarify boundaries between the lands of other neighboring communities.',
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
            title: 'Mapping oral histories with Ohneganos (Canada)',
            image: 'images/ohneganos.jpg',
            caption: 'Autor de la foto: Rudo Kemper (Digital Democracy)',
            author: 'Rudo Kemper, Digital Democracy',
            website: '<a href="https://www.ohneganos.com/" target="_blank">Ohneganos website</a>',
            legend: '<span id="block" style="background-color: #c3beb1; opacity: 0.5;"></span><span id="text">Haldimand Tract</span><br><span id="block" style="background-color: #f39b16; opacity: 0.5;"></span><span id="text">Six Nations Reserve of the Grand River</span><br>',
            description: 'Six Nations is the largest First Nations reserve in Canada. It is the only reserve in North America that has representatives of all six Haudenosaunee nations living together. These nations are the Mohawk, Cayuga, Onondaga, Oneida, Seneca and Tuscarora. Some Lenape (formerly known as Delaware) also live in the territory. The Haudenosaunee (or Iroquois) people originally inhabited a much larger area stretching across the United Stated and Canada, and were legally granted a large tract of land by the French via the 1784 Haldimand Treaty; this was later taken away, and Six Nations represents only 5% of that area. The organization Ohneganos is an Indigenous water research program led by McMaster University professor Dr. Dawn Martin Hill, and are working to co-create Indigenous water quality tools, and mixed-method tools for collecting and training in Indigenous ecological knowledge.<br><br><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube-nocookie.com/embed/cybEjHDFKAA?controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen; picture-in-picture"></iframe></div><br><br>As part of the Indigenous ecological knowledge research program of Ohneganos, Digital Democracy is providing programmatic support to Ohneganos in using Mapeo to collect Indigenous ecological knowledge across Six Nations, and recording place-based oral histories about important Haudenosaunee cultural sites across the lands. The Ohneganos team, together with a local mapping coordinator, will be using both Mapeo Mobile and Desktop to gather and organize data, and will be mapping and visualizing the geospatial data and stories using the open-source application Terrastories. This project represents the first pilot in testing out a Mapeo-to-Terrastories workflow.',
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