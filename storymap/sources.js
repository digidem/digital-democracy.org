var externalData = {
    sources: [
        {
            "name": 'aliya',
            "type": 'vector',
            "url": 'mapbox://aliya.9v8qx32q,aliya.ajj405nj,aliya.42r2hgrk,aliya.58yacl13,aliya.51s8zntv,aliya.0jduv2cw,aliya.0nxoi84l,aliya.0ikc6buv,aliya.1h56tanh,aliya.0a2tz7ob,aliya.8m1nnx5a?access_token=pk.eyJ1IjoiYWxpeWEiLCJhIjoiY2lzZDVhbjM2MDAwcTJ1cGY4YTN6YmY4cSJ9.NxK9jMmYZsA32ol_IZGs5g'
        },
        {
            "name": 'nativeland',
            "type": 'vector',
            "url": 'mapbox://nativeland.cjh3mywgg04aaahpidhgio50e-9ctzy'
        },
    ],
    layers: [
        {
            "id": "native-land",
            "type": "symbol",
            "source": "nativeland",
            "source-layer": "Territories",
            "layout": {
                "text-field": ["to-string", ["get", "Name"]],
                "text-font": ["Open Sans SemiBold", "Arial Unicode MS Regular"],
                "text-size": 10,
                "text-padding": 0
            },
            "paint": {
                "text-color": "#ffffff",
                "text-halo-color": "hsl(0, 99%, 1%)",
                "text-halo-width": 1,
                "text-opacity": 0
            }
        },
        {
            "id": "green territory",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Waorani-territory-area-8r1igc",
            "minzoom": 5,
            "filter": ["==", "$type", "Polygon"],
            "layout": {},
            "paint": { "fill-color": "hsl(93, 83%, 85%)", "fill-opacity": 0 }
        },
        {
            "id": "chacra-areas",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-comunidad-bl578s",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "comunidad/chacra"]
            ],
            "layout": { "visibility": "none" },
            "paint": {
                "fill-color": "hsla(98, 95%, 62%, 0)",
                "fill-pattern": "area-chacra-128-01"
            }
        },
        {
            "id": "new-chacra-areas",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "comunidad/chacra"]
            ],
            "layout": {},
            "paint": { "fill-pattern": "area-chacra-128-01" }
        },
        {
            "id": "zona-palmera",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "any",
                    ["==", "arbol", "construccion"],
                    ["in", "especie_palmera", "karawe", "ungurahua", "wamomo"]
                ]
            ],
            "layout": { "visibility": "none" },
            "paint": { "fill-pattern": "area-wamontape-128", "fill-opacity": 0 }
        },
        {
            "id": "new-zona-palmera",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "any",
                    ["==", "arbol", "construccion"],
                    ["in", "especie_palmera", "karawe", "ungurahua", "wamomo"]
                ]
            ],
            "layout": {},
            "paint": { "fill-pattern": "area-wamontape-128", "fill-opacity": 0 }
        },
        {
            "id": "zona-moretal",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "especie_palmera", "morete"]
            ],
            "layout": { "visibility": "none" },
            "paint": { "fill-pattern": "area-moretal-128", "fill-opacity": 0 }
        },
        {
            "id": "new-zona-moretal",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "especie_palmera", "morete"]
            ],
            "layout": {},
            "paint": { "fill-pattern": "area-moretal-128", "fill-opacity": 0 }
        },
        {
            "id": "zona-toketibo",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "name", "Toketibe"]
            ],
            "layout": { "visibility": "none" },
            "paint": {
                "fill-color": "hsla(54, 98%, 49%, 0.72)",
                "fill-opacity": 0,
                "fill-pattern": "area-moretal-128"
            }
        },
        {
            "id": "new-zona-toketibo",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "name", "Toketibe"]
            ],
            "layout": {},
            "paint": { "fill-pattern": "area-moretal-128", "fill-opacity": 0 }
        },
        {
            "id": "zona-miwago",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "arbol_especie", "miwago"]
            ],
            "layout": { "visibility": "none" },
            "paint": { "fill-color": "#f7df02", "fill-opacity": 0 }
        },
        {
            "id": "new-zona-miwago",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "arbol_especie", "miwago"]
            ],
            "layout": {},
            "paint": { "fill-color": "#f7df02", "fill-opacity": 0 }
        },
        {
            "id": "zona peces",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-fauna-6ziddm",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "in",
                    "fauna",
                    "bagre",
                    "carachama",
                    "piranha",
                    "raya",
                    "sabalo",
                    "zona-de-pesca"
                ]
            ],
            "layout": { "visibility": "none" },
            "paint": {
                "fill-color": "hsl(178, 81%, 84%)",
                "fill-opacity": 0,
                "fill-pattern": "area-pesca2-128-01"
            }
        },
        {
            "id": "new-zona-peces",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "in",
                    "fauna",
                    "bagre",
                    "carachama",
                    "piranha",
                    "raya",
                    "sabalo",
                    "zona-de-pesca"
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(54, 98%, 49%)",
                "fill-opacity": 0,
                "fill-pattern": "area-pesca2-128-01"
            }
        },
        {
            "id": "zona animales",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-fauna-6ziddm",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "none",
                    [
                        "in",
                        "fauna",
                        "",
                        "bagre",
                        "carachama",
                        "piranha",
                        "raya",
                        "sabalo",
                        "zona-de-pesca"
                    ]
                ]
            ],
            "layout": { "visibility": "none" },
            "paint": {
                "fill-color": "hsl(178, 81%, 84%)",
                "fill-opacity": 0,
                "fill-pattern": "area-animales-128"
            }
        },
        {
            "id": "new-zona animales",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "none",
                    ["!has", "fauna"],
                    [
                        "in",
                        "fauna",
                        "bagre",
                        "carachama",
                        "piranha",
                        "raya",
                        "sabalo",
                        "zona-de-pesca"
                    ]
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(54, 98%, 49%)",
                "fill-opacity": 0,
                "fill-pattern": "area-animales-128"
            }
        },
        {
            "id": "new-zona rastrojo",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "in",
                    "id",
                    "12038236699722637352",
                    "12964310093095399621",
                    "15364797924862719759",
                    "16107734599648354342",
                    "16972507236853831254",
                    "17186383658241226196",
                    "17291077397055047680",
                    "6219959485474067723"
                ]
            ],
            "layout": {},
            "paint": { "fill-color": "#9fc897", "fill-opacity": 0 }
        },
        {
            "id": "zona-animales-label",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "wao-fauna-6ziddm",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "all",
                    ["!=", "fauna", "zona-de-pesca"],
                    [
                        "!in",
                        "preset",
                        "",
                        "fauna/pez_carachama",
                        "fauna/pez_piranha",
                        "fauna/pez_sabalo",
                        "fauna/raya"
                    ]
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Extrabold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14,
                "symbol-avoid-edges": true,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "visibility": "none"
            },
            "paint": { "text-color": "#342727", "text-opacity": 0 }
        },
        {
            "id": "new-zona animales-label",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "none",
                    ["!has", "fauna"],
                    ["==", "fauna", "zona-de-pesca"],
                    [
                        "in",
                        "preset",
                        "fauna/pez_carachama",
                        "fauna/pez_piranha",
                        "fauna/pez_raya",
                        "fauna/pez_sabalo"
                    ]
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans ExtraBold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14
            },
            "paint": { "text-opacity": 0, "text-color": "#342727" }
        },
        {
            "id": "zona-cascada",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "name", "Teata"]
            ],
            "layout": { "visibility": "none" },
            "paint": { "fill-color": "hsl(277, 95%, 62%)", "fill-opacity": 0 }
        },
        {
            "id": "new-zona-cascada",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "name", "Teata"]
            ],
            "layout": {},
            "paint": { "fill-color": "hsl(277, 95%, 62%)", "fill-opacity": 0 }
        },
        {
            "id": "zona de recoleccion",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "actividad/recoleccion"]
            ],
            "layout": { "visibility": "none" },
            "paint": { "fill-color": "hsl(0, 87%, 94%)", "fill-opacity": 0 }
        },
        {
            "id": "new-zona-de-recoleccion",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "actividad/recoleccion"]
            ],
            "layout": {},
            "paint": { "fill-color": "hsl(0, 87%, 94%)", "fill-opacity": 0 }
        },
        {
            "id": "Rivers-large highlight",
            "type": "line",
            "metadata": { "mapbox:group": "ef06b3c56e6ae2d75c1df5394c74e9d7" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "waterway", "river"]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "#f7fcfc",
                "line-width": 5.5,
                "line-translate-anchor": "viewport",
                "line-translate": [1, 1]
            }
        },
        {
            "id": "new Rivers-large highlight",
            "type": "line",
            "metadata": { "mapbox:group": "ef06b3c56e6ae2d75c1df5394c74e9d7" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "waterway", "river"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-color": "#f7fcfc",
                "line-width": 5.5,
                "line-translate": [1, 1],
                "line-translate-anchor": "viewport"
            }
        },
        {
            "id": "Rivers-large shadow",
            "type": "line",
            "metadata": { "mapbox:group": "ef06b3c56e6ae2d75c1df5394c74e9d7" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "waterway", "river"]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "#59b8f7",
                "line-width": 5.5,
                "line-translate-anchor": "viewport",
                "line-translate": [-1, -1]
            }
        },
        {
            "id": "new Rivers-large shadow",
            "type": "line",
            "metadata": { "mapbox:group": "ef06b3c56e6ae2d75c1df5394c74e9d7" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "waterway", "river"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-color": "#59b8f7",
                "line-width": 5.5,
                "line-translate": [-1, -1],
                "line-translate-anchor": "viewport"
            }
        },
        {
            "id": "Rivers-large",
            "type": "line",
            "metadata": { "mapbox:group": "ef06b3c56e6ae2d75c1df5394c74e9d7" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "waterway", "river"]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "#85d9ea",
                "line-width": 5.5,
                "line-translate-anchor": "viewport"
            }
        },
        {
            "id": "new Rivers-large",
            "type": "line",
            "metadata": { "mapbox:group": "ef06b3c56e6ae2d75c1df5394c74e9d7" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "waterway", "river"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-color": "#85d9ea",
                "line-width": 5.5,
                "line-translate": [0, 0],
                "line-translate-anchor": "viewport"
            }
        },
        {
            "id": "Rivers -small",
            "type": "line",
            "metadata": { "mapbox:group": "ef06b3c56e6ae2d75c1df5394c74e9d7" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "waterway", "", "spring", "stream"]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "#85d9ea",
                "line-width": 2.5,
                "line-translate-anchor": "viewport"
            }
        },
        {
            "id": "new Rivers -small",
            "type": "line",
            "metadata": { "mapbox:group": "ef06b3c56e6ae2d75c1df5394c74e9d7" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "waterway", "", "\"estero\"", "spring", "stream"]
            ],
            "layout": {},
            "paint": { "line-color": "#85d9ea", "line-width": 2.5 }
        },
        {
            "id": "camino-huangana",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "any",
                    ["==", "camino_fau", "huangana"],
                    ["==", "preset", "camino/huangana"]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "hsl(20, 31%, 34%)",
                "line-pattern": "camino-huanta-single",
                "line-opacity": 0,
                "line-width": 7
            }
        },
        {
            "id": "new camino-huangana",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "any",
                    ["==", "camino_fau", "huangana"],
                    ["==", "preset", "camino/huangana"]
                ]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-pattern": "camino-huanta-single",
                "line-opacity": 0,
                "line-width": 7
            }
        },
        {
            "id": "camino-jaguar",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "any",
                    ["==", "camino_fau", "jaguar"],
                    ["==", "preset", "camino/jaguar"]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "hsl(20, 31%, 34%)",
                "line-width": 6.7,
                "line-opacity": 0,
                "line-pattern": "camino-jaguar-single"
            }
        },
        {
            "id": "new camino-jaguar",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "any",
                    ["==", "camino_fau", "jaguar"],
                    ["==", "preset", "camino/jaguar"]
                ]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-width": 6.7,
                "line-opacity": 0,
                "line-pattern": "camino-jaguar-single"
            }
        },
        {
            "id": "camino-tapir",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "any",
                    ["==", "camino_fau", "tapir"],
                    ["==", "preset", "camino/tapir"]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "hsl(20, 31%, 34%)",
                "line-width": 7,
                "line-opacity": 0,
                "line-pattern": "camino-tapir-single"
            }
        },
        {
            "id": "new camino-tapir",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "any",
                    ["==", "camino_fau", "tapir"],
                    ["==", "preset", "camino/tapir"]
                ]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-pattern": "camino-tapir-single",
                "line-opacity": 0,
                "line-width": 7
            }
        },
        {
            "id": "camino-sahino",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "any",
                    ["==", "preset", "camino/sajino"],
                    ["in", "camino_fau", "sahiino", "sahino", "sajino"]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "hsl(20, 31%, 34%)",
                "line-width": 7,
                "line-opacity": 0,
                "line-pattern": "camino-sahino-single"
            }
        },
        {
            "id": "new camino-sahino",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "any",
                    ["==", "preset", "camino/sajino"],
                    ["in", "camino_fau", "sahiino", "sahino", "sajino"]
                ]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-pattern": "camino-sahino-single",
                "line-opacity": 0,
                "line-width": 7
            }
        },
        {
            "id": "camino-animales",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    [
                        "!in",
                        "camino_fau",
                        "huangana",
                        "jaguar",
                        "sahiino",
                        "sahino",
                        "sajino",
                        "tapir"
                    ],
                    ["==", "preset", "camino/animales"]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "hsl(20, 31%, 34%)",
                "line-width": 7,
                "line-opacity": 0,
                "line-pattern": "camino-animal-single"
            }
        },
        {
            "id": "camino-animales copy",
            "type": "line",
            "metadata": { "mapbox:group": "2909d02b6003eaedc89834c86016b550" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    [
                        "!in",
                        "camino_fau",
                        "huangana",
                        "jaguar",
                        "sahiino",
                        "sahino",
                        "sajino",
                        "tapir"
                    ],
                    ["==", "preset", "camino/animales"]
                ]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-pattern": "camino-animal-single",
                "line-opacity": 0,
                "line-width": 7
            }
        },
        {
            "id": "caminos-aventura",
            "type": "line",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "camino", "aventura"]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "#651895",
                "line-width": 2,
                "line-opacity": 0,
                "line-dasharray": [2, 2]
            }
        },
        {
            "id": "new caminos-aventura",
            "type": "line",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "camino", "aventura"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": 2,
                "line-color": "#651895",
                "line-opacity": 0,
                "line-dasharray": [2, 2]
            }
        },
        {
            "id": "caminos-viajar",
            "type": "line",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "camino", "viajar"]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "#43a85c",
                "line-width": 3,
                "line-opacity": 0
            }
        },
        {
            "id": "new caminos-viajar",
            "type": "line",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "camino", "viajar"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-color": "#43a85c",
                "line-opacity": 0,
                "line-width": 3
            }
        },
        {
            "id": "caminos-caseria",
            "type": "line",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "camino", "caseria", "imaginado"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "#724e3c",
                "line-width": 1.7,
                "line-opacity": 0,
                "line-dasharray": [0.2, 2]
            }
        },
        {
            "id": "new caminos-caseria",
            "type": "line",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "camino", "caseria", "imaginado"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-opacity": 0,
                "line-width": 1.7,
                "line-color": "hsl(20, 31%, 34%)",
                "line-dasharray": [0.2, 2]
            }
        },
        {
            "id": "label-caminos-viajar",
            "type": "symbol",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "camino", "viajar"]
            ],
            "layout": {
                "text-size": 8,
                "text-allow-overlap": true,
                "text-max-angle": 50,
                "text-transform": "uppercase",
                "symbol-spacing": 200,
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Regular"],
                "symbol-placement": "line",
                "visibility": "none",
                "text-offset": [0, 0],
                "text-field": "{name}",
                "text-letter-spacing": 0.2
            },
            "paint": {
                "text-color": "#196713",
                "text-halo-color": "#faf5f5",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-translate": [0, 0]
            }
        },
        {
            "id": "new label-caminos-viajar",
            "type": "symbol",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "camino", "viajar"]
            ],
            "layout": {
                "text-size": 8,
                "text-max-angle": 50,
                "text-transform": "uppercase",
                "symbol-spacing": 200,
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "symbol-placement": "line",
                "text-field": "{name}",
                "text-letter-spacing": 0.2
            },
            "paint": {
                "text-color": "#196713",
                "text-halo-width": 1,
                "text-halo-color": "#faf5f5",
                "text-halo-blur": 1
            }
        },
        {
            "id": "label-caminos-otros",
            "type": "symbol",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "wao-caminos-ongoing-16plpw",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "camino", "aventura", "caseria", "imaginado"]
            ],
            "layout": {
                "text-size": 8,
                "text-allow-overlap": true,
                "text-max-angle": 50,
                "text-transform": "uppercase",
                "symbol-spacing": 200,
                "symbol-placement": "line",
                "visibility": "none",
                "text-offset": [0, 0],
                "text-field": "{name}",
                "text-letter-spacing": 0.2
            },
            "paint": {
                "text-color": "hsl(52, 48%, 14%)",
                "text-halo-color": "hsl(0, 33%, 97%)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-translate": [0, 0]
            }
        },
        {
            "id": "new label-caminos-otros",
            "type": "symbol",
            "metadata": { "mapbox:group": "19501c5706ae46fb310e849e5db51705" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "camino", "aventura", "caseria", "imaginado"]
            ],
            "layout": {
                "text-size": 8,
                "text-allow-overlap": true,
                "text-max-angle": 50,
                "text-transform": "uppercase",
                "symbol-spacing": 200,
                "symbol-placement": "line",
                "text-offset": [0, 0],
                "text-field": "{name}",
                "text-letter-spacing": 0.2
            },
            "paint": {
                "text-color": "hsl(52, 48%, 14%)",
                "text-halo-color": "hsl(0, 33%, 97%)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-translate": [0, 0]
            }
        },
        {
            "id": "Lagos",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-agua-2ss3an",
            "minzoom": 10,
            "filter": ["==", "$type", "Polygon"],
            "layout": { "visibility": "none" },
            "paint": {
                "fill-color": "hsl(204, 91%, 66%)",
                "fill-opacity": 0,
                "fill-outline-color": "#59b8f7"
            }
        },
        {
            "id": "new- Lagos",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["in", "preset", "agua/lago", "agua/laguna"]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(204, 91%, 66%)",
                "fill-opacity": 0,
                "fill-outline-color": "#59b8f7"
            }
        },
        {
            "id": "Cazadero-cueva",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["in", "preset", "actividad/caza", "natural/cueva"]
            ],
            "layout": {
                "icon-image": "{icon}-33px",
                "icon-ignore-placement": true,
                "icon-size": 0,
                "visibility": "none"
            },
            "paint": { "icon-opacity": 0.85 }
        },
        {
            "id": "new-Cazadero-cueva",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["in", "preset", "actividad/caza", "natural/cueva"]
            ],
            "layout": { "icon-image": "{icon}-33px", "icon-size": 0 },
            "paint": { "icon-opacity": 0.85 }
        },
        {
            "id": "zona de caza",
            "type": "fill",
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "actividad/caza"]
            ],
            "layout": { "visibility": "none" },
            "paint": { "fill-pattern": "area-animales-128", "fill-opacity": 0 }
        },
        {
            "id": "new-zona de caza",
            "type": "fill",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "actividad/caza"]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(204, 91%, 66%)",
                "fill-opacity": 0,
                "fill-pattern": "area-animales-128"
            }
        },
        {
            "id": "Fauna",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "wao-fauna-6ziddm",
            "minzoom": 10,
            "filter": ["==", "$type", "Point"],
            "layout": {
                "icon-size": 0,
                "icon-image": "{icon}-33px",
                "icon-allow-overlap": true,
                "visibility": "none"
            },
            "paint": {}
        },
        {
            "id": "new-Fauna",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": ["all", ["==", "$type", "Point"], ["has", "fauna"]],
            "layout": { "icon-image": "{icon}-33px", "icon-size": 0 },
            "paint": {}
        },
        {
            "id": "new-zona rastrojo copy",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "in",
                    "id",
                    "12038236699722637352",
                    "12964310093095399621",
                    "15364797924862719759",
                    "16107734599648354342",
                    "16972507236853831254",
                    "17186383658241226196",
                    "17291077397055047680",
                    "6219959485474067723"
                ]
            ],
            "layout": {
                "text-field": "zona de rastrojo",
                "text-font": [
                    "Open Sans ExtraBold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 13
            },
            "paint": { "text-color": "#4c7133", "text-opacity": 0 }
        },
        {
            "id": "Flora-no labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "595dc5e8d9edcdd0eba392520c563bd9" },
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "none",
                    [
                        "in",
                        "icon",
                        "",
                        "arbol",
                        "arbol-artesanal",
                        "arbol-construccion",
                        "arbol-frutal",
                        "arbol-medicinal",
                        "liana",
                        "palmera",
                        "planta-medicinal"
                    ],
                    [
                        "in",
                        "preset",
                        "",
                        "arbol/artesanal",
                        "arbol/construccion",
                        "arbol/frutal",
                        "arbol/otro",
                        "flora/arbol",
                        "liana/liana",
                        "palmera/palmera",
                        "planta/higiene",
                        "planta/medicinal"
                    ]
                ]
            ],
            "layout": {
                "text-optional": true,
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-transform": "uppercase",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "visibility": "none",
                "text-offset": [0, 1.5],
                "icon-size": 0.65,
                "text-anchor": "top"
            },
            "paint": {
                "text-color": "hsl(130, 60%, 19%)",
                "text-halo-color": "hsla(0, 20%, 98%, 0.8)",
                "text-halo-width": 0.7
            }
        },
        {
            "id": "Flora-no labels copy",
            "type": "symbol",
            "metadata": { "mapbox:group": "595dc5e8d9edcdd0eba392520c563bd9" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["any", ["==", "preset", "arbol/chiparro"], ["has", "flora"]]
            ],
            "layout": {
                "text-optional": true,
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-transform": "uppercase",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "text-offset": [0, 1.5],
                "icon-size": 0.65,
                "text-anchor": "top"
            },
            "paint": {
                "text-color": "hsl(130, 60%, 19%)",
                "text-halo-color": "hsla(0, 20%, 98%, 0.8)",
                "text-halo-width": 0.7
            }
        },
        {
            "id": "Flora-with labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "595dc5e8d9edcdd0eba392520c563bd9" },
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "any",
                    [
                        "in",
                        "icon",
                        "",
                        "arbol",
                        "arbol-artesanal",
                        "arbol-construccion",
                        "arbol-frutal",
                        "arbol-medicinal",
                        "liana",
                        "palmera",
                        "planta-medicinal"
                    ],
                    [
                        "in",
                        "preset",
                        "",
                        "arbol/artesanal",
                        "arbol/construccion",
                        "arbol/frutal",
                        "arbol/otro",
                        "flora/arbol",
                        "liana/liana",
                        "palmera/palmera",
                        "planta/higiene",
                        "planta/medicinal"
                    ]
                ]
            ],
            "layout": {
                "text-optional": true,
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-transform": "uppercase",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "visibility": "none",
                "text-offset": [0, 1.5],
                "icon-size": 0.65,
                "text-anchor": "top",
                "text-field": "{name}"
            },
            "paint": {
                "text-color": "hsl(130, 60%, 19%)",
                "text-halo-color": "hsla(0, 20%, 98%, 0.91)",
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "new Flora-with labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "595dc5e8d9edcdd0eba392520c563bd9" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "any",
                    [
                        "in",
                        "icon",
                        "",
                        "arbol",
                        "arbol-artesanal",
                        "arbol-construccion",
                        "arbol-frutal",
                        "liana",
                        "palmera"
                    ],
                    [
                        "in",
                        "preset",
                        "",
                        "arbol/artesanal",
                        "arbol/construccion",
                        "arbol/frutal",
                        "arbol/otro",
                        "flora/arbol",
                        "liana/liana",
                        "palmera/palmera",
                        "planta/higiene",
                        "planta/medicinal"
                    ]
                ]
            ],
            "layout": {
                "text-optional": true,
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-transform": "uppercase",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "text-offset": [0, 1.5],
                "icon-size": 0.65,
                "text-anchor": "top",
                "text-field": "{name}"
            },
            "paint": {
                "text-color": "hsl(130, 60%, 19%)",
                "text-halo-color": "hsla(0, 20%, 98%, 0.91)",
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "Flora-arbol-especie",
            "type": "symbol",
            "metadata": { "mapbox:group": "595dc5e8d9edcdd0eba392520c563bd9" },
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["all", ["!has", "name"], ["has", "arbol_especie"]]
            ],
            "layout": {
                "text-optional": true,
                "text-size": 8,
                "text-allow-overlap": true,
                "icon-image": "{icon}-33px",
                "text-transform": "uppercase",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "visibility": "none",
                "text-offset": [0, 1.5],
                "icon-size": 0.65,
                "text-anchor": "top",
                "text-field": "{arbol_especie}"
            },
            "paint": {
                "text-color": "hsl(130, 60%, 19%)",
                "text-halo-color": "hsla(0, 20%, 98%, 0.91)",
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "new Flora arbol especie",
            "type": "symbol",
            "metadata": { "mapbox:group": "595dc5e8d9edcdd0eba392520c563bd9" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "all",
                    ["!=", "arbol", "medicinal"],
                    ["!has", "name"],
                    ["has", "arbol_especie"]
                ]
            ],
            "layout": {
                "text-optional": true,
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-transform": "uppercase",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "text-offset": [0, 1.5],
                "icon-size": 0.65,
                "text-anchor": "top",
                "text-field": "{arbol_especie}"
            },
            "paint": {
                "text-color": "hsl(130, 60%, 19%)",
                "text-halo-color": "hsla(0, 20%, 98%, 0.91)",
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "zona-palmera label",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "any",
                    ["==", "arbol", "construccion"],
                    ["in", "especie_palmera", "karawe", "ungurahua", "wamomo"]
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Extrabold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "symbol-avoid-edges": true,
                "visibility": "none"
            },
            "paint": { "text-color": "#351b03", "text-opacity": 0.75 }
        },
        {
            "id": "new-zona-palmera label",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "any",
                    ["==", "arbol", "construccion"],
                    ["in", "especie_palmera", "karawe", "ungurahua", "wamomo"]
                ]
            ],
            "layout": {
                "text-font": ["Open Sans Bold", "Arial Unicode MS Regular"],
                "text-field": "{name}",
                "text-size": 14
            },
            "paint": {
                "icon-opacity": 0.9,
                "text-color": "#351b03",
                "text-opacity": 0.75
            }
        },
        {
            "id": "zona-toketibe-label",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "wao-flora-9mqwil",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "any",
                    ["==", "arbol_especie", "miwago"],
                    ["==", "name", "Toketibe"]
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Extrabold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14,
                "text-allow-overlap": true,
                "symbol-avoid-edges": true,
                "visibility": "none"
            },
            "paint": { "text-color": "#342727", "text-opacity": 0.41 }
        },
        {
            "id": "new-zona-toketibo copy",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "any",
                    ["==", "arbol_especie", "miwago"],
                    ["==", "name", "Toketibe"]
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans ExtraBold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14
            },
            "paint": { "text-opacity": 0.41 }
        },
        {
            "id": "zona-cascada-label",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "name", "Teata"]
            ],
            "layout": {
                "text-field": "{name_es}",
                "text-font": [
                    "Open Sans Extrabold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14,
                "symbol-avoid-edges": true,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "visibility": "none"
            },
            "paint": { "text-color": "#342727", "text-opacity": 0.41 }
        },
        {
            "id": "new-zona-cascada copy",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "name", "Teata"]
            ],
            "layout": {
                "text-field": "{name_es}",
                "text-font": [
                    "Open Sans ExtraBold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14
            },
            "paint": { "text-color": "#342727", "text-opacity": 0.41 }
        },
        {
            "id": "zona de caza label",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "actividad/caza"]
            ],
            "layout": {
                "text-field": "zona de cacería",
                "text-font": [
                    "Open Sans ExtraBold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14,
                "visibility": "none"
            },
            "paint": { "text-color": "#342727", "text-opacity": 0.41 }
        },
        {
            "id": "new-zona de caza copy",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "actividad/caza"]
            ],
            "layout": {
                "text-field": "zona de cacería",
                "text-font": [
                    "Open Sans ExtraBold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14
            },
            "paint": { "text-color": "#342727", "text-opacity": 0.41 }
        },
        {
            "id": "zona de recoleccion label",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "actividad/recoleccion"]
            ],
            "layout": {
                "text-field": "zona de recolección",
                "text-font": [
                    "Open Sans ExtraBold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14,
                "visibility": "none"
            },
            "paint": { "text-color": "#891f1f", "text-opacity": 0.25 }
        },
        {
            "id": "new-zona-de-recoleccion copy",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "preset", "actividad/recoleccion"]
            ],
            "layout": {
                "text-field": "zona de recolección",
                "text-font": [
                    "Open Sans ExtraBold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14
            },
            "paint": { "text-color": "#891f1f", "text-opacity": 0.41 }
        },
        {
            "id": "Pesca",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "preset", "actividad/pesca"]
            ],
            "layout": {
                "icon-image": "wao-actividad-pesca-33px",
                "text-field": "{name_es}",
                "text-size": 8,
                "text-anchor": "top",
                "text-offset": [0, 0.6],
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "visibility": "none"
            },
            "paint": {
                "text-translate": [0, 4],
                "text-halo-color": "hsl(0, 33%, 97%)",
                "text-halo-width": 1
            }
        },
        {
            "id": "new-Pesca",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "preset", "actividad/pesca"]
            ],
            "layout": {
                "text-field": "{name_es}",
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-size": 8,
                "icon-image": "wao-actividad-pesca-33px"
            },
            "paint": {}
        },
        {
            "id": "Otros-y-labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                [
                    "!in",
                    "preset",
                    "actividad/caza",
                    "actividad/pesca",
                    "artificial/camara_trampa",
                    "fauna/banadero_sahino",
                    "historia/casa-ancestral",
                    "historia/zona_de_guerra"
                ],
                ["==", "$type", "Point"]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "icon-ignore-placement": true,
                "text-offset": [0, 0.7],
                "icon-size": 0.8,
                "text-anchor": "top",
                "text-field": "{name}",
                "visibility": "none"
            },
            "paint": {
                "text-translate": [0, 0],
                "text-halo-color": "hsla(0, 50%, 98%, 0.93)",
                "text-halo-width": 1
            }
        },
        {
            "id": "new-otros-y-labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "any",
                    [
                        "in",
                        "preset",
                        "artificial/instlacion_petrolera_antiguo",
                        "artificial/linea_sismica",
                        "artificial/pozo_petrolero",
                        "artificial/video"
                    ],
                    [
                        "in",
                        "preset",
                        "historia/cementerio",
                        "historia/cuento",
                        "historia/olla_antigua",
                        "natural/barro",
                        "natural/cueva",
                        "natural/mirador",
                        "natural/montaña",
                        "natural/playa",
                        "natural/relampago"
                    ]
                ]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-offset": [0, 0.7],
                "icon-size": 0.8,
                "text-anchor": "top",
                "text-field": "{name}",
                "icon-ignore-placement": true
            },
            "paint": {}
        },
        {
            "id": "cazadores",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "preset", "actividad/caza"]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "icon-ignore-placement": true,
                "text-offset": [0, 0.6],
                "icon-size": 0.8,
                "text-anchor": "top",
                "visibility": "none"
            },
            "paint": {
                "text-translate": [0, 6],
                "text-halo-color": "hsla(0, 50%, 98%, 0.93)",
                "text-halo-width": 1
            }
        },
        {
            "id": "new-cazadores",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "preset", "actividad/caza"]
            ],
            "layout": {
                "icon-size": 0.8,
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "icon-ignore-placement": true
            },
            "paint": {}
        },
        {
            "id": "Banadero de sahino",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "any",
                    ["==", "preset", "fauna/banadero_sahino"],
                    ["in", "id", "", "12094386331565138286"]
                ]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "icon-ignore-placement": true,
                "text-offset": [0, 0.6],
                "icon-size": 0.8,
                "text-anchor": "top",
                "visibility": "none"
            },
            "paint": {
                "text-translate": [0, 6],
                "text-halo-color": "hsla(0, 50%, 98%, 0.93)",
                "text-halo-width": 1
            }
        },
        {
            "id": "new-Banadero de sahino",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "any",
                    ["==", "id", "12094386331565138286"],
                    ["==", "preset", "fauna/banadero_sahino"]
                ]
            ],
            "layout": {
                "text-field": "{name_es}",
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "icon-ignore-placement": true,
                "icon-size": 0.6
            },
            "paint": {}
        },
        {
            "id": "Historicos",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "any",
                    ["in", "name", "Casa antigua", "Casa antigua de Gequeta"],
                    [
                        "in",
                        "preset",
                        "",
                        "historia/cementerio",
                        "historia/cuento"
                    ]
                ]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "icon-ignore-placement": true,
                "text-offset": [0, 0.6],
                "icon-size": 0.8,
                "text-anchor": "top",
                "text-field": "{note}",
                "visibility": "none"
            },
            "paint": {
                "text-translate": [0, 6],
                "text-halo-color": "hsla(0, 50%, 98%, 0.93)",
                "text-halo-width": 1
            }
        },
        {
            "id": "Historicos copy",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "wao-other-6i8hpz",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "in",
                    "id",
                    "14178962910470642649",
                    "6384461283286781944",
                    "6592320731143884866"
                ]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "icon-ignore-placement": true,
                "text-offset": [0, 0.6],
                "icon-size": 0.8,
                "text-anchor": "top",
                "text-field": "{note}",
                "visibility": "none"
            },
            "paint": {
                "text-translate": [0, 6],
                "text-halo-color": "hsla(0, 50%, 98%, 0.93)",
                "text-halo-width": 1
            }
        },
        {
            "id": "new-Historicos",
            "type": "symbol",
            "metadata": { "mapbox:group": "0e4cc73fef4f1fd83bbd268612c55ed8" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "any",
                    [
                        "in",
                        "id",
                        "14178962910470642649",
                        "6384461283286781944",
                        "6592320731143884866"
                    ],
                    ["in", "name", "Casa antigua", "Casa antigua de Gequeta"],
                    ["in", "preset", "historia/cementerio", "historia/cuento"]
                ]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-offset": [0, 0.6],
                "icon-size": 0.8,
                "text-anchor": "top",
                "text-field": "{note}",
                "icon-ignore-placement": true
            },
            "paint": { "text-translate": [0, 6] }
        },
        {
            "id": "water points",
            "type": "symbol",
            "metadata": { "mapbox:group": "861fbb57626e36295674760a7b5aa75e" },
            "source": "aliya",
            "source-layer": "wao-agua-2ss3an",
            "minzoom": 10,
            "filter": ["==", "$type", "Point"],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "icon-allow-overlap": true,
                "visibility": "none",
                "text-offset": [0, 1.5],
                "icon-size": 0.8,
                "text-anchor": "top",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(204, 72%, 21%)",
                "text-halo-color": "hsla(0, 50%, 98%, 0.95)",
                "text-halo-width": 0.6,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "new water points",
            "type": "symbol",
            "metadata": { "mapbox:group": "861fbb57626e36295674760a7b5aa75e" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": ["all", ["==", "$type", "Point"], ["has", "water"]],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "text-offset": [0, 0.6],
                "icon-size": 0.7,
                "text-anchor": "top"
            },
            "paint": { "text-translate": [0, 6] }
        },
        {
            "id": "water points labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "861fbb57626e36295674760a7b5aa75e" },
            "source": "aliya",
            "source-layer": "wao-agua-2ss3an",
            "minzoom": 10,
            "filter": [
                "all",
                [
                    "!in",
                    "name",
                    "",
                    "Cascada",
                    "Estero",
                    "Gawapaa",
                    "Gawapë",
                    "Teatä",
                    "Teäta",
                    "Teñataa",
                    "Waatime",
                    "camino  a cascada",
                    "cascada",
                    "teata",
                    "teñata"
                ],
                ["==", "$type", "Point"]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "icon-allow-overlap": true,
                "visibility": "none",
                "text-offset": [0, 1.5],
                "icon-size": 0.8,
                "text-anchor": "top",
                "text-field": "{name}",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "#0f3d5c",
                "text-halo-color": "#fcf7f7",
                "text-halo-width": 0.6,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "new-water points labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "861fbb57626e36295674760a7b5aa75e" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "all",
                    [
                        "!in",
                        "name",
                        "",
                        "Cascada",
                        "Estero",
                        "Gawapaa",
                        "Gawapë",
                        "Teatä",
                        "Teäta",
                        "Teñataa",
                        "Waatime",
                        "camino  a cascada",
                        "cascada",
                        "teata",
                        "teñata"
                    ],
                    ["has", "water"]
                ]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-offset": [0, 0.6],
                "icon-size": 0.8,
                "text-anchor": "top",
                "text-field": "{name}",
                "icon-ignore-placement": true
            },
            "paint": {
                "text-color": "#0f3d5c",
                "text-translate": [0, 6],
                "text-halo-width": 0.6,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fcf7f7"
            }
        },
        {
            "id": "Lakes labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "861fbb57626e36295674760a7b5aa75e" },
            "source": "aliya",
            "source-layer": "wao-agua-2ss3an",
            "minzoom": 10,
            "filter": [
                "all",
                ["!in", "name", "Gawapaa", "Gawape", "Gawapë", "Waatime"],
                ["==", "$type", "Polygon"]
            ],
            "layout": {
                "text-size": 8,
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "icon-allow-overlap": true,
                "text-offset": [0, 0],
                "icon-size": 0.8,
                "text-field": "{name}",
                "text-max-width": 7,
                "visibility": "none"
            },
            "paint": {
                "text-color": "#0f3d5c",
                "text-halo-color": "#fcf7f7",
                "text-halo-width": 0.6,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "new-Lakes labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "861fbb57626e36295674760a7b5aa75e" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "all",
                    ["!in", "name", "Gawapaa", "Gawape", "Gawapë", "Waatime"],
                    ["has", "water"]
                ]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "icon-allow-overlap": true,
                "text-offset": [0, 0],
                "icon-size": 0.8,
                "text-field": "{note}"
            },
            "paint": {
                "text-color": "#0f3d5c",
                "text-translate": [0, 6],
                "text-halo-width": 0.6,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fcf7f7"
            }
        },
        {
            "id": "Casas",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "wao-comunidad-bl578s",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "comunidad", "casa"]
            ],
            "layout": {
                "icon-ignore-placement": true,
                "icon-image": "{icon}-33px",
                "visibility": "none"
            },
            "paint": {}
        },
        {
            "id": "new-casas",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "comunidad", "casa"]
            ],
            "layout": {
                "text-size": 8,
                "icon-image": "{icon}-33px",
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-offset": [0, 0],
                "icon-ignore-placement": true
            },
            "paint": {
                "text-color": "#0f3d5c",
                "text-translate": [0, 6],
                "text-halo-width": 0.6,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fcf7f7"
            }
        },
        {
            "id": "Casas labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "wao-comunidad-bl578s",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "all",
                    ["==", "comunidad", "casa"],
                    [
                        "in",
                        "id",
                        "12066668167733623557",
                        "12422929924068337181",
                        "12579021165086506942",
                        "132646183765439427",
                        "15793977333907631787",
                        "1817447512055019176",
                        "4552944792565570826",
                        "4560922546950477800",
                        "5637467538804278948",
                        "5730501406680577059",
                        "7830869696785029547",
                        "8383924011115925527"
                    ]
                ]
            ],
            "layout": {
                "text-size": 8,
                "text-allow-overlap": true,
                "icon-image": "wao-comunidad-casa-33px",
                "text-ignore-placement": true,
                "icon-allow-overlap": true,
                "visibility": "none",
                "text-anchor": "top",
                "text-field": "{name}",
                "icon-ignore-placement": true
            },
            "paint": {
                "text-color": "#4d340f",
                "text-halo-width": 1,
                "text-halo-color": "hsl(0, 33%, 97%)",
                "text-translate": [0, 13]
            }
        },
        {
            "id": "new-casas labels",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "all",
                    ["==", "comunidad", "casa"],
                    [
                        "in",
                        "id",
                        "12066668167733623557",
                        "12422929924068337181",
                        "12579021165086506942",
                        "132646183765439427",
                        "15793977333907631787",
                        "1817447512055019176",
                        "4552944792565570826",
                        "4560922546950477800",
                        "5637467538804278948",
                        "5730501406680577059",
                        "7830869696785029547",
                        "8383924011115925527"
                    ]
                ]
            ],
            "layout": {
                "text-size": 8,
                "text-allow-overlap": true,
                "icon-image": "{icon}-33px",
                "text-ignore-placement": true,
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "text-offset": [0, 0],
                "text-field": "{name}",
                "icon-ignore-placement": true
            },
            "paint": {
                "text-color": "#4d340f",
                "text-translate": [0, 13],
                "text-halo-width": 1,
                "text-halo-color": "#fcf7f7"
            }
        },
        {
            "id": "Community facilities",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "wao-comunidad-bl578s",
            "minzoom": 10,
            "filter": [
                "all",
                [
                    "!in",
                    "comunidad",
                    "",
                    "campamento",
                    "casa",
                    "chacra",
                    "comunidad"
                ],
                ["==", "$type", "Point"]
            ],
            "layout": { "icon-image": "{icon}-33px", "visibility": "none" },
            "paint": {}
        },
        {
            "id": "new - community facilities",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                [
                    "in",
                    "preset",
                    "comunidad/canoa",
                    "comunidad/escuela",
                    "comunidad/especial",
                    "comunidad/iglesia",
                    "comunidad/limite",
                    "comunidad/linderacion-chonta",
                    "comunidad/pista"
                ]
            ],
            "layout": {
                "text-size": 8,
                "text-allow-overlap": true,
                "icon-image": "{icon}-33px",
                "text-ignore-placement": true,
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-offset": [0, 0]
            },
            "paint": {
                "text-color": "#4d340f",
                "text-translate": [0, 13],
                "text-halo-width": 1,
                "text-halo-color": "#fcf7f7"
            }
        },
        {
            "id": "new - celular",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "preset", "comunidad/wao-senal-celular"]
            ],
            "layout": {
                "text-size": 8,
                "text-allow-overlap": true,
                "icon-image": "{icon}-33px",
                "text-ignore-placement": true,
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-offset": [0, 0],
                "icon-size": 0.6
            },
            "paint": {
                "text-color": "#4d340f",
                "text-translate": [0, 13],
                "text-halo-width": 1,
                "text-halo-color": "#fcf7f7"
            }
        },
        {
            "id": "chacra",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "wao-comunidad-bl578s",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "comunidad", "chacra"]
            ],
            "layout": { "icon-image": "{icon}-33px", "visibility": "none" },
            "paint": {}
        },
        {
            "id": "new-chacra",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "comunidad", "chacra"]
            ],
            "layout": {
                "text-size": 8,
                "text-allow-overlap": true,
                "icon-image": "{icon}-33px",
                "text-ignore-placement": true,
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-offset": [0, 0]
            },
            "paint": {
                "text-color": "#4d340f",
                "text-translate": [0, 13],
                "text-halo-width": 1,
                "text-halo-color": "#fcf7f7"
            }
        },
        {
            "id": "Campamento",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "wao-comunidad-bl578s",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "comunidad", "campamento"]
            ],
            "layout": {
                "text-max-width": 8,
                "icon-image": "{icon}-33px",
                "text-field": "{name}",
                "text-size": 9,
                "text-anchor": "top",
                "visibility": "none"
            },
            "paint": {
                "text-color": "hsl(36, 68%, 18%)",
                "text-halo-color": "hsla(0, 0%, 100%, 0.8)",
                "text-halo-width": 1,
                "text-translate": [0, 4]
            }
        },
        {
            "id": "new-campamento",
            "type": "symbol",
            "metadata": { "mapbox:group": "16b873559f821405c3f829b002a36a3a" },
            "source": "aliya",
            "source-layer": "Wao-combined-4e8uc0",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["==", "comunidad", "campamento"]
            ],
            "layout": {
                "text-size": 9,
                "icon-image": "{icon}-33px",
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-field": "{name}",
                "text-offset": [0, 0],
                "text-anchor": "top"
            },
            "paint": {
                "text-color": "#4d340f",
                "text-translate": [0, 4],
                "text-halo-width": 1,
                "text-halo-color": "#fcf7f7"
            }
        },
        {
            "id": "Rivers -small label",
            "type": "symbol",
            "metadata": { "mapbox:group": "91f2d82d6d0c0daa163512a4e024b4b2" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    [
                        "!in",
                        "name",
                        "Estero S/N",
                        "Estero de tanque entubada",
                        "Quebrada S/N",
                        "Rio S/N",
                        "S/N"
                    ],
                    ["in", "waterway", "", "spring", "stream"]
                ]
            ],
            "layout": {
                "text-size": 10,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-max-angle": 90,
                "symbol-spacing": 390,
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "visibility": "none",
                "text-offset": [0, -0.1],
                "text-rotation-alignment": "map",
                "text-field": "{name}",
                "text-letter-spacing": 0.2
            },
            "paint": {
                "text-color": "hsl(204, 69%, 23%)",
                "text-halo-width": 0.7,
                "text-halo-blur": 0.4,
                "text-halo-color": "hsl(0, 50%, 98%)"
            }
        },
        {
            "id": "new Rivers -small label",
            "type": "symbol",
            "metadata": { "mapbox:group": "91f2d82d6d0c0daa163512a4e024b4b2" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    [
                        "!in",
                        "name",
                        "Estero S/N",
                        "Estero de tanque entubada",
                        "Quebrada S/N",
                        "Rio S/N",
                        "S/N",
                        "Tomonpare"
                    ],
                    ["in", "waterway", "", "spring", "stream"]
                ]
            ],
            "layout": {
                "text-size": 10,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-max-angle": 90,
                "symbol-spacing": 390,
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-offset": [0, -0.1],
                "text-rotation-alignment": "map",
                "text-field": "{name}",
                "text-letter-spacing": 0.2
            },
            "paint": {
                "text-color": "#124363",
                "text-halo-color": "#fcf7f7",
                "text-halo-width": 0.7,
                "text-halo-blur": 0.4
            }
        },
        {
            "id": "Rivers -large label",
            "type": "symbol",
            "metadata": { "mapbox:group": "91f2d82d6d0c0daa163512a4e024b4b2" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    [
                        "!in",
                        "name",
                        "Estero S/N",
                        "Estero de tanque entubada",
                        "Quebrada S/N",
                        "Rio S/N",
                        "S/N"
                    ],
                    ["==", "waterway", "river"]
                ]
            ],
            "layout": {
                "text-size": 12,
                "text-allow-overlap": true,
                "text-max-angle": 40,
                "symbol-spacing": 600,
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 0,
                "visibility": "none",
                "text-offset": [0, 0],
                "text-rotation-alignment": "map",
                "text-field": "{name}",
                "text-letter-spacing": 0.33
            },
            "paint": {
                "text-color": "hsl(204, 69%, 28%)",
                "text-halo-width": 0.7,
                "text-halo-blur": 0.7,
                "text-halo-color": "hsl(0, 50%, 98%)"
            }
        },
        {
            "id": "new Rivers -large label",
            "type": "symbol",
            "metadata": { "mapbox:group": "91f2d82d6d0c0daa163512a4e024b4b2" },
            "source": "aliya",
            "source-layer": "Wao-Rivers-0r23kc",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    [
                        "!in",
                        "name",
                        "Estero S/N",
                        "Estero de tanque entubada",
                        "Quebrada S/N",
                        "Rio S/N",
                        "S/N"
                    ],
                    ["==", "waterway", "river"]
                ]
            ],
            "layout": {
                "text-size": 12,
                "text-allow-overlap": true,
                "text-max-angle": 40,
                "symbol-spacing": 600,
                "text-font": [
                    "Olsen Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "text-field": "{name}",
                "text-letter-spacing": 0.33
            },
            "paint": {
                "text-color": "#165179",
                "text-halo-color": "#fcf7f7",
                "text-halo-width": 0.7,
                "text-halo-blur": 0.7
            }
        },
        {
            "id": "waorani-territory-area-8r1igc",
            "type": "line",
            "source": "aliya",
            "source-layer": "Waorani-territory-area-8r1igc",
            "minzoom": 10,
            "filter": ["==", "$type", "Polygon"],
            "layout": {},
            "paint": {
                "line-color": "hsl(287, 56%, 42%)",
                "line-dasharray": [3.9, 3],
                "line-opacity": 0,
                "line-width": 3.1
            }
        },
        {
            "id": "comunidades-waorani-85wt49",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Comunidades_Waorani-85wt49",
            "minzoom": 10,
            "filter": ["==", "$type", "Point"],
            "layout": {
                "icon-image": "wao-comunidad-100px",
                "icon-size": 0.4,
                "text-anchor": "top",
                "text-font": ["Open Sans Bold", "Arial Unicode MS Regular"],
                "visibility": "none"
            },
            "paint": {
                "text-color": "hsl(0, 62%, 19%)",
                "text-translate": [0, 15]
            }
        },
        {
            "id": "wao-comunidad-centro-12-18-61njjo copy",
            "type": "symbol",
            "source": "aliya",
            "source-layer": "Wao-Comunidad-centro-12-18-1b14w2",
            "minzoom": 10,
            "layout": {
                "text-size": 21,
                "text-allow-overlap": true,
                "icon-image": "wao-comunidad-100px",
                "text-ignore-placement": true,
                "text-font": ["Open Sans Bold", "Arial Unicode MS Regular"],
                "icon-allow-overlap": true,
                "visibility": "none",
                "text-offset": [0.8, 0],
                "icon-size": 0.45,
                "text-anchor": "bottom-left",
                "text-field": "{name}",
                "text-max-width": 15
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 0.8,
                "text-halo-blur": 1,
                "text-color": "hsl(13, 41%, 21%)"
            }
        }
    ]
};