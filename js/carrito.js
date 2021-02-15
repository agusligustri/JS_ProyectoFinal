
                
    /***** BASE DE DATOS *****/
    let baseDeDatos = [
        // BICICLETAS
    {
        id: 10000,
        category: "bikes",
        subcategory: "mtb",
        brand: "Scott",
        name: "Scale RC 900 WC",
        price: 1190430,
        image: './images/bicicletas/mtb/scale-rc-wc-2020-300x300.jpg',
        imagelg: './images/bicicletas/mtb/scale-rc-wc-2020.jpg',
        description: 'Para aspirar al título mundial hace falta una máquina de calidad mundial. Ligera, rígida y rápida; esto es lo que te ofrece la Scale RC 900 World Cup. Repleta de componentes de calidad y con toda la magia del carbono, con la World Cup dejarás de ser el seguidor número uno de Nino Schurter para quizás pasar a disputar el maillot de líder. La bicicleta está preparada; ¿y tú? El tiempo lo dirá.',
        list: [
            'Cuadro Scale RC de carbono HMX', 
            'RockShox SID SL Select+RL3 100 mm', 
            'Control remoto RideLoc con 3 posiciones',
            'SRAM X01 Eagle, 12 velocidades', 
            'Frenos de disco SRAM Level TLM', 
            'Ruedas de carbono Syncros Silverton 1.0', 
            'Cubiertas Maxxis Rekon Race Kevlar', 
            'Componentes de carbono Syncros'
        ],
        stock: 3,
        section: 'bicicletas',
    },
    {
        id: 10001,
        category: "bikes",
        subcategory: "mtb",
        brand: "Scott",
        name: "Spark RC 900",
        price: 1109056,
        image: './images/bicicletas/mtb/spark-rc-300x300.jpg',
        imagelg: './images/bicicletas/mtb/spark-rc.jpg',
        description: 'Hazte con la Spark RC Team Issue AXS si quieres hacer realidad tu sueño de participar en un campeonato del mundo. El cuadro más rápido del mercado, un grupo sin cables de 12 velocidades de SRAM y componentes Syncros: es una combinación perfecta para participar en carreras los fines de semana o para intentar poner el pie en tu primera prueba de copa del mundo.',
        list: [
            'Cuadro Spark RC de carbono HMF', 
            'Horquilla RockShox SID Select+RL3 100 mm', 
            'FOX Nude EVOL, TwinLoc, 100 mm', 
            'SRAM X01 AXS Eagle, 12 velocidades', 
            'Frenos de disco Shimano XT', 
            'Ruedas Syncros Silverton 2.0 TR', 
            'Cubiertas Maxxis Rekon Race Kevlar',
            'Componentes de carbono Syncros'
        ], 
        stock: 2,
        section: 'bicicletas',
    },
    {
        id: 10002,
        category: "bikes",
        subcategory: "mtb",
        brand: "Scott",
        name: "Scale RC 900 Team",
        price: 678198,
        image: './images/bicicletas/mtb/scale-rc-900-team-300x300.jpg',
        imagelg: './images/bicicletas/mtb/scale-rc-900-team.jpg',
        description: 'Con la Scale RC Team de SCOTT podrás prepararte para superar tus mejores registros de velocidad en carretera. Diseñada para competir con la élite, la Scale RC Team viene con horquilla RockShox SID, transmisión SRAM Eagle y componentes Syncros en un paquete que no deja indiferente.',
        list: [
            'Cuadro Scale RC Carbon / IMP technology / HMF', 
            'Horquilla RockShox SID Select RL Air', 
            'Descarrilador Trasero SRAM X01 / Eagle 12 Speed', 
            'Shifters SRAM GX Eagle Trigger', 
            'Palancas SRAM X1 DUB Carbon Eagle GXP Boost QF 168 / 32T', 
            'Frenos Shimano XT M8100 Disc 180/F and 160/R SM-RT66 rotor', 
            'Ruedas Syncros Silverton 2.5 6 Bolt F: 15x110mm, R: 12x148mm Boost',
            'Cubieras WTB Ranger / 2.25″ / 60 TPI / Aramid Bead / Tubeless Ready',
            'Componentes de carbono Syncros'    
        ], 
        stock: 1,
        section: 'bicicletas',
    },
    {
        id: 10003,
        category: "bikes",
        subcategory: "mtb",
        brand: "Scott",
        name: "Scale 930",
        price: 470724,
        image: './images/bicicletas/mtb/scale-930-300x300.jpg',
        imagelg: './images/bicicletas/mtb/scale-930.jpg',
        description: 'La serie Scale 930 de SCOTT tiene un cuadro de fibra de carbono superligero. La combinación de suspensión FOX, transmisión SRAM Eagle y componentes Syncros produce una bicicleta de competición ligera y eficiente.',
        list: [
            'Cuadro Scale en carbono HMF',
            'Horquilla FOX 32 Float Rhythm 100 mm',
            'Control remoto RideLoc con 3 posiciones',
            'SRAM SX Eagle, 12 velocidades',
            'Frenos de disco Shimano',
            'Llantas Syncros X-25 TR',
            'Cubiertas WTB Ranger Kevlar',
            'Componentes Syncros'
        ],
        stock: 10,
        section: 'bicicletas', 
    },
    {
        id: 10004,
        category: "bikes",
        subcategory: "mtb",
        brand: "Scott",
        name: "Aspect 940",
        price: 142680,
        image: './images/bicicletas/mtb/aspect-940-300x300.jpg',
        imagelg: './images/bicicletas/mtb/aspect-940.jpg',
        description: 'La Aspect 940 de SCOTT es una bicicleta de montaña rígida sin suspensión trasera, diseñada para ser ligera, eficaz y con un precio razonable. La horquilla cuenta con mecanismo de bloqueo, los frenos son de disco y los componentes de Syncros. Es el modelo perfecto para principiantes o para usuarios de bicicleta de montaña que se guíen por el presupuesto.',
        list: [
            'Cuadro de aleación Aspect 700/900', 
            'Horquilla Suntour XCR32-RL-R 100 mm' ,  
            'Bloqueo remoto Suntour'    ,
            'Shimano Deore-Altus, 18 velocidades' ,  
            'Frenos Shimano',    
            'Kenda Booster'   
        ],
        stock: 8,
        section: 'bicicletas', 
    },
    {
        id: 10005,
        category: "bikes",
        subcategory: "mtb",
        brand: "Scott",
        name: "Aspect 950",
        price: 121647,
        image: './images/bicicletas/mtb/aspect-950-300x300.jpg',
        imagelg: './images/bicicletas/mtb/aspect-950.jpg',
        description: 'La Aspect 950 de SCOTT es una bicicleta de montaña rígida sin suspensión trasera, diseñada para ser ligera, eficaz y con un precio razonable. La horquilla cuenta con mecanismo de bloqueo, los frenos son de disco y los componentes de Syncros. Es el modelo perfecto para principiantes o para usuarios de bicicleta de montaña que se guíen por el presupuesto.',
        list: [
            'Cuadro de aleación Aspect 700/900',
            'Horquilla Suntour XCT30-HLO 100 mm',
            'Shimano Altus, 27 velocidades',
            'Frenos de disco hidráulicos Tektro',
            'Kenda Booster'
        ],
        stock: 5,
        section: 'bicicletas', 
    },
    {
        id: 10006,
        category: "bikes",
        subcategory: "mtb",
        brand: "Scott",
        name: "Aspect 960",
        price: 104754,
        image: './images/bicicletas/mtb/aspect-960-300x300.jpg',
        imagelg: './images/bicicletas/mtb/aspect-960.jpg',
        description: 'La Aspect 960 de SCOTT es una bicicleta de montaña rígida sin suspensión trasera, diseñada para ser ligera, eficaz y con un precio razonable. Los frenos son de disco y los componentes de Syncros. Es el modelo perfecto para principiantes o para usuarios de bicicleta de montaña que se guíen por el presupuesto.',
        list: [
            'Cuadro de aleación Aspect 700/900',
            'Horquilla Suntour XCE28 100 mm',
            'Shimano Tourney TX, 24 velocidades',
            'Frenos de disco hidráulicos Tektro',
            'Kenda Booster'
        ],
        stock: 4,
        section: 'bicicletas',  
    },
    {
        id: 10100,
        category: "bikes",
        subcategory: "ruta",
        brand: "Scott",
        name: "Foil RC",
        price: 876633,
        image: './images/bicicletas/ruta/foil-rc-300x300.jpg',
        imagelg: './images/bicicletas/ruta/foil-rc.jpg',
        description: 'Con victorias en etapas de todas las grandes vueltas, triunfos en clásicas como la Milán-San Remo, Lieja Bastogne-Lieja y París-Roubaix, podemos decir con total seguridad que la FOIL es la bicicleta aerodinámica más polivalente del mercado. Hemos diseñado el cuadro de fibra de carbono HMX para ayudarte a arañar esos valiosos segundos. Es uno de los cuadros más ligeros en el segmento de aerodinámicos. La SCOTT FOIL RC es una réplica de la del equipo Orica-SCOTT. Con un sistema de manillar integrado Syncros y componentes de carbono Syncros, esta bicicleta está diseñada para ayudarte a ganar todas las carreras.',
        list: [
            'Cuadro de carbono FOIL HMX',
            'Horquilla FOIL HMX',
            'Transmisión Shimano Dura-Ace, 22 velocidades',
            'Ruedas Zipp 30 Course'
        ],
        stock: 3,
        section: 'bicicletas', 
    },
    {
        id: 10101,
        category: "bikes",
        subcategory: "ruta",
        brand: "Scott",
        name: "Addict 10",
        price: 395400,
        image: './images/bicicletas/ruta/addict-10-19-300x300.jpg',
        imagelg: './images/bicicletas/ruta/addict-10.jpg',
        description: '¿Ligera? Por supuesto. ¿Rápida? Ni te imaginas. Ahora más integrada que nunca: la NUEVA Addict 10 pone en tus manos toda la ventaja competitiva que necesitas, ya sea para triturar todos los registros de Strava de tu zona uno a uno, para imponerte al sprint en un puerto de montaña o para llevarte la victoria en los critériums de tu zona.',
        list: [
            'Cuadro: Addict HMF Carbon',
            'Horquilla: Addict HMF Carbon',
            'Desviador trasero: Shimano Ultegra RD-R8000- GS 22 speed',
            'Desviador delantero: Shimano Ultegra FD-R8000',
            'Manetas de cambio: Shimano Ultegra ST-R8000 Carbon',
            'Frenos: Shimano Ultegra BR-R8000 Super SLR Dual',
            'Bielas: Shimano Ultegra FC-R8000',
            'Neumáticos: Schwalbe Durano Fold',
            'Rueda: Syncros RP2.0'
        ],
        stock: 2,
        section: 'bicicletas',
    },
    {
        id: 10102,
        category: "bikes",
        subcategory: "ruta",
        brand: "Scott",
        name: "Speedster 20 Disco",
        price: 199800,
        image: './images/bicicletas/ruta/speedster-20-disco-300x300.jpg',
        imagelg: './images/bicicletas/ruta/speedster-20-disco.jpg',
        description: 'Hemos renovado completamente el diseño de la SCOTT Speedster para 2020. Con un peso inferior a su predecesora, la Speedster 20 presenta un grupo Shimano y componentes Syncros. ¡Notarás cómo mejora tu velocidad al instante!',
        list: [
            'Cuadro de aleación Speedster',
            'Horquilla Speedster Carbon 1 1/8″-1 1/4″',
            'Transmisión Shimano Tiagra, 20 velocidades',
            'Frenos a disco Tektro',
            'Manillar Syncros RR2.0 Comfort 31.8mm',
            'Sillín Syncros FL2.5',
            'Llantas Syncros Race 22',
            'Peso Aproximado: 9.3kg'
        ],
        stock: 2,
        section: 'bicicletas', 
    },
    {
        id: 10103,
        category: "bikes",
        subcategory: "ruta",
        brand: "Scott",
        name: "Speedster 20",
        price: 188020,
        image: './images/bicicletas/ruta/speedster-20-300x300.jpg',
        imagelg: './images/bicicletas/ruta/speedster-20.jpg',
        description: 'Hemos renovado completamente el diseño de la SCOTT Speedster para 2020. Con un peso inferior a su predecesora, la Speedster 20 presenta un grupo Shimano y componentes Syncros. ¡Notarás cómo mejora tu velocidad al instante!',
        list: [
            'Cuadro de aleación Speedster',
            'Horquilla Speedster Carbon 1 1/8″-1 1/4″',
            'Transmisión Shimano Tiagra, 20 velocidades',
            'Frenos Tektro',
            'Manillar Syncros RR2.0 Comfort 31.8mm',
            'Sillín Syncros FL2.5',
            'Llantas Syncros Race 22',
            'Peso Aproximado: 9.3kg' 
        ],
        stock: 3,
        section: 'bicicletas', 
    },
    {
        id: 10200,
        category: "bikes",
        subcategory: "tria",
        brand: "Scott",
        name: "Plasma 10",
        price: 853040,
        image: './images/bicicletas/tria/plasma-10-300x300.jpg',
        imagelg: './images/bicicletas/tria/plasma-10.jpg',
        description: 'La Plasma 10 de SCOTT tiene un diseño muy similar al del modelo Plasma Team Issue. La Plasma 10 es una mejora creada sobre modelos anteriores que presenta un increíble nivel de ajustabilidad e integración, incluye espacio para llevar alimentos, y además a un precio asequible.',
        list: [
            'Cuadro Plasma 4 Carbon',
            'Shimano Ultegra, 22 velocidades',
            'Llantas Syncros Race 22',
            'Cubiertas Continental Grand Sport Race',
            'Componentes de carbono • aleación Profile'
        ],
        stock: 4,
        section: 'bicicletas', 
    },
        // ACCESORIOS
    {
        id: 20000,
        category: "accesories",
        subcategory: "asiento",
        brand: "Syncros",
        name: "Belcarra 1.0 Cut Out",
        price: 24600,
        image: './images/accesorios/asientos/belcarra-1.0-cutout-300x300.jpg',
        imagelg: 'images/accesorios/asientos/belcarra-1.0-cutout.jpg',
        description: 'Nuestro asiento orientado a la máxima performance, el Belcarra V 1.0 es parte de nuestro concepto V-CONCEPT trabajado junto a nuestros corredores con diseño específico que adapta la pelvis y lumbares para permitir una posición aero más agresiva. Sus rieles de carbono permiten un bajo peso de solo 160grs.',
        list: [
            'RANGO DE USO: High Performance Road and MTB',
            'BASE: Carbon-reinforced nylon',
            'RIELES Oversized 7x9mm Carbon',
            'FOAM Light PU',
            'COBERTURA: Microfabric Cut Out',
            'DIMENSIONES: 245x140mm',
            'PESO: 160g'
        ],
        stock: 1,
        section: 'accesorios', 
    },
    {
        id: 20001,
        category: "accesories",
        subcategory: "asiento",
        brand: "Syncros",
        name: "XR 1.0 Carbono",
        price: 23358,
        image: './images/accesorios/asientos/xr1.0-carbono-300x300.jpg',
        imagelg: './images/accesorios/asientos/xr1.0-carbono.jpg',
        description: 'Gracias a la combinación de los raíles de carbono ligeros y las carcasas inyectadas, estos sillines XR1.0 utilizan la cantidad justa de acolchado para mantener el confort en las salidas largas sin añadir volumen. Está disponible en 2 anchos diferentes, así que tienes asegurado un ajuste perfecto.',
        list: [
            'RANGE OF USE MTB de alto rendimiento',
            'BASE Nailon reforzado con carbono',
            'RAILS Carbono extragrande 7 x 9 mm',
            'FOAM PU ligero',
            'COVER Microtejido',
            'SHAPE Canal central',
            'DIMENSIONS estrecho 275 x 132 mm',
            'WEIGHT 170 g'
        ],
        stock: 3,
        section: 'accesorios', 
    },
    {
        id: 20002,
        category: "accesories",
        subcategory: "asiento",
        brand: "Syncros",
        name: "Belcarra 1.5 Cut Out",
        price: 15900,
        image: './images/accesorios/asientos/belcarra-1.5-cutout-300x300.jpg',
        imagelg: './images/accesorios/asientos/belcarra-1.5-cutout.jpg',
        description: 'Nuestro sillín diseñado para ofrecer lo máximo en prestaciones, el Belcarra V 1.5, forma parte de nuestro programa V-Concept, desarrollado para los ciclistas más flexibles, especialmente en la zona pélvica y lumbar, que suelen montar en una posición aerodinámica más agresiva. Una vez montados en la bici, adoptan una postura con una forma parecida a la V, de ahí su nombre. Estos ciclistas se sientan sobre la parte delantera del sillín, apoyados sobre las ramas púbicas. En términos generales, la postura de conducción es más baja y requiere un sillín con una forma ligeramente diferente. El modelo 1.5 incluye nuestros rieles huecos de titanio para ofrecer comodidad con un peso ligero.',
        list: [
            'Talle único: 245 x 140 mm',
            'Peso: 220 gramos',
            'Ideal para ciclistas que buscan una posición más agresiva en la bicicleta',
            ' Carcasa reforzada con fibra de carbono, el equilibrio perfecto entre resistencia y poco peso',
            'Rieles resistentes en titanio hueco',
            'Espuma ligera de PU, confort durante todo el día',
            'El diseño de la hendidura de alivio de la presión quita peso a los tejidos más sensibles',
            'Funda de microtejido impermeable'
        ],
        stock: 5,
        section: 'accesorios', 
    },
    {
        id: 20003,
        category: "accesories",
        subcategory: "asiento",
        brand: "Syncros",
        name: "Belcarra RR 2.0 Channel",
        price: 11920,
        image: './images/accesorios/asientos/belcarra-rr-2.0-channel-300x300.jpg',
        imagelg: './images/accesorios/asientos/belcarra-rr-2.0-channel.jpg',
        description: '',
        list: [
            'Ideal para Riders que buscan peformance',
            'Doble densidad Glassfiber-reinforced nylon shell',
            'Rieles de CrMo',
            'PU foam para mayor comodidad en largos entrenamientos',
            'Canal de absorción de presión diseñado para redireccionar el peso del ciclista',
            'Recubierto en material de microfibra'
        ],
        stock: 5,
        section: 'accesorios', 
    },
    {
        id: 20004,
        category: "accesories",
        subcategory: "asiento",
        brand: "Syncros",
        name: "Belcarra V 2.0 Cut Out",
        price: 10750,
        image: './images/accesorios/asientos/belcarra-2.0-cutout-300x300.jpg',
        imagelg: './images/accesorios/asientos/belcarra-2.0-cutout.jpg',
        description: 'Nuestro sillín diseñado para ofrecer lo máximo en prestaciones, el Belcarra V 1.5, forma parte de nuestro programa V-Concept, desarrollado para los ciclistas más flexibles, especialmente en la zona pélvica y lumbar, que suelen montar en una posición aerodinámica más agresiva. Una vez montados en la bici, adoptan una postura con una forma parecida a la V, de ahí su nombre. Estos ciclistas se sientan sobre la parte delantera del sillín, apoyados sobre las ramas púbicas. En términos generales, la postura de conducción es más baja y requiere un sillín con una forma ligeramente diferente.',
        list: [
            'Carcasa reforzada con fibra de carbono, el equilibrio perfecto entre resistencia y poco peso',
            'Rieles resistentes  de Cromo',
            'Espuma ligera de PU, confort durante todo el día',
            'El diseño de la hendidura de alivio de la presión quita peso a los tejidos más sensibles',
            'Funda de microtejido impermeable',
            'Peso: 230 grs'
        ],
        stock: 3,
        section: 'accesorios', 
    },
    {
        id: 20005,
        category: "accesories",
        subcategory: "asiento",
        brand: "Syncros",
        name: "RR 2.0",
        price: 10060,
        image: './images/accesorios/asientos/rr-2.0-300x300.jpg',
        imagelg: './images/accesorios/asientos/rr-2.0.jpg',
        description: 'El asiento SYNCROS RR2.0 proporciona un gran confort y prestaciones a un precio muy atractivo. La carcasa con inyección de fibra de vidrio y los raíles de cromo minimizan el peso, mientras que la cubierta de vinilo asegura la durabilidad de este sillín. Está disponible en dos anchos diferentes, así que tienes asegurado tu ajuste favorito.',
        list: [
            'RANGE OF USE: MTB de alto rendimiento',
            'BASE: Nailon reforzado con fibra de vidrio',
            'RAILS: CrMo hueco 7 x 7 mm',
            'FOAM: TPU'
        ],
        stock: 2,
        section: 'accesorios', 
    },
    {
        id: 20006,
        category: "accesories",
        subcategory: "asiento",
        brand: "Syncros",
        name: "RR 1.5 Titanio Blanco",
        price: 8240,
        image: './images/accesorios/asientos/rr-1.5-white-300x300.jpg',
        imagelg: './images/accesorios/asientos/rr-1.5-white.jpg',
        description: 'El asiento SYNCROS RR2.0 proporciona un gran confort y prestaciones a un precio muy atractivo. La carcasa con inyección de fibra de vidrio y los raíles de cromo minimizan el peso, mientras que la cubierta de vinilo asegura la durabilidad de este sillín. Está disponible en dos anchos diferentes, así que tienes asegurado tu ajuste favorito.',
        list: [
            'Base: Carbon-reinforced nylon',
            'Rieles 7x7mm CrN/Ti Alloy',
            'Foam : Super-light EVA',
            'Cobertura : Microfabric',
            'Dimension : 282x140mm',
            'Peso 230 grs'
        ],
        stock: 3,
        section: 'accesorios', 
    },
    {
        id: 20100,
        category: "accesories",
        subcategory: "caramagnola",
        brand: "Elite Flie",
        name: "Scott-Mitchelton",
        price: 2217,
        image: './images/accesorios/caramagnolas/elite-300x300.jpg',
        imagelg: './images/accesorios/caramagnolas/elite.jpg',
        description: 'Es la caramañola más ligera de 550 ml disponible en todo el mundo. Su récord de 54 gramos de peso se logra a través de su espesor variable. Más grueso en la base y más delgado en el cuerpo central, esto no solo hace posible utilizar menos material plástico, sino que también asegura un agarre firme al montar en bicicleta y una estructura ergonómica fácil de apretar para que el flujo de líquido sea abundante con la presión más ligera. Está disponible en muchas opciones de colores diferentes para una combinación perfecta con el cuadro de su bicicleta y su portacaramañola.',
        list: [
            'Modelo: Fly',
            'Capacidad: 550ml',
            'Material: Plástico (BPA Free)',
            'Es la caramañola de 550ml mas liviana del mundo',
            'Flujo de liquido extremo: La tapa ergonómica con boquilla de “Push-Pull” más ancha y la boca más ancha de FLY asegura un alto flujo de líquido, que también está garantizado por el cuerpo suave de la botella: simplemente apriete ligeramente la botella para iniciar el flujo de líquido. Este es un factor clave para obtener una hidratación simple y efectiva.',
            'Material innovador: Esta botella se fabrica con materiales plásticos innovadores, inodoros, suaves y resistentes, que es el resultado de un estudio de 3 años realizado en varios centros de investigación de universidades.',
            'Es inocuo para los alimentos de acuerdo con las disposiciones de la CE y la FDA.',
            'Sin BPA.',
            '100% reciclable.',
            'Diseño compacto. Nuevo y exclusivo diseño de carreras, desarrollado para una gran estabilidad en el embotellamiento y una fácil extracción durante el ciclismo.',
            'La forma compacta hace que sea fácil de usar con cuadros más pequeños.',
            'El diámetro estándar hace que sea compatible con la mayoría de las portacaramañolas en el mercado.',
            'Dimensiones: 180mm (Alto) x 74mm (Ancho)',
            'Peso: 54g'
        ],
        stock: 10,
        section: 'accesorios', 
    },
    {
        id: 20101,
        category: "accesories",
        subcategory: "caramagnola",
        brand: "Camelbak",
        name: "Chill Race 720ml",
        price: 2450,
        image: './images/accesorios/caramagnolas/camelbak-chillrace-720ml-300x300.jpg',
        imagelg: './images/accesorios/caramagnolas/camelbak-chillrace-650ml.jpg',
        description: '',
        list: [   
        ],
        stock: 10,
        section: 'accesorios', 
    },
    {
        id: 20200,
        category: "accesories",
        subcategory: "cuadro",
        brand: "Scott",
        name: "Cuadro Scale 940 Carbono",
        price: 198170,
        image: './images/accesorios/cuadros/scale-940-300x300.jpg',
        imagelg: './images/accesorios/cuadros/scale-940.jpg',
        description: '',
        list: [
            'Cuadro Scale 3 Carbon / IMP technology',
            'BB92 / SW DM dropouts for Boost 12x148mm',
            'SDS2 advanced Shock & Standing Damping System',
            'ICCR Cable routing'
        ],
        stock: 2,
        section: 'accesorios', 
    },
    {
        id: 20201,
        category: "accesories",
        subcategory: "cuadro",
        brand: "Scott",
        name: "Cuadro Scale 610 Carbono",
        price: 66000,
        image: './images/accesorios/cuadros/scale-610-300x300.jpg',
        imagelg: './images/accesorios/cuadros/scale-610.jpg',
        description: '',
        list: [
            'Material: carbono',
            'Rodado 26',
            'Juego de direccion Tapered Ritchey Pro Headset for Tapered or 1-1/8″ Forks',
            'Caja pedalera BB PF92 PressFit',
            'Medida descarrilador 34.9mm',
            'Medida portasilla 34.9mm',
            'Color: Black/Grey/Red',
            'Peso 1120 grs',
            'Incluye cierre de asiento y caño portasilla'
        ],
        stock: 1,
        section: 'accesorios', 
    },
    {
        id: 20300,
        category: "accesories",
        subcategory: "cubierta",
        brand: "Mitas",
        name: "Scylla TR 29x2.45",
        price: 9822,
        image: './images/accesorios/cubiertas/mitas-scylla-300x300.jpg',
        imagelg: 'images/accesorios/cubiertas/mitas-scylla.jpg',
        description: '',
        list: [
            'Tubeless',
            'Taco inter',
            'TEXTRA (banda adicional de kevlar en el borde)',
            'KEVLAR',
            '127 TPI',
            '670 gramos'
        ],
        stock: 6,
        section: 'accesorios', 
    },
    {
        id: 20301,
        category: "accesories",
        subcategory: "cubierta",
        brand: "Mitas",
        name: "Zefyros TDI 29x2.25",
        price: 8629,
        image: 'images/accesorios/cubiertas/mitas-zefyros-300x300.jpg',
        imagelg: 'images/accesorios/cubiertas/mitas-zefyros.jpg',
        description: '',
        list: [
            'Rodado 29',
            'Ancho 2.25',
            'ETRTO: 57-584',
            '127 TPI',
            '55 PSI',
            'Carga Max: 136 Kg',
            'Excelente Grip y Conducción Segura',
            'Aro de Kevlar flexible reforzados con Tecnología TSS + TEXTRA',
            'Construcción Tubeless Supra',
            'Compuesto: Carbon Race Extreme Compound Light (CRX)',
            'Tejido con hilos de polímero de alta densidad',
            'Para Terrenos Livianos y Duros',
            'Categoría: MTB/ XC/ XMC',
            'Muy Livianas',
            'Peso: 660 gr',
            'Hecho en República Checa'
        ],
        stock: 8,
        section: 'accesorios', 
    },
    {
        id: 20302,
        category: "accesories",
        subcategory: "cubierta",
        brand: "Mitas",
        name: "Cobra 26x1.9 Negra",
        price: 2340,
        image: 'images/accesorios/cubiertas/mitas-cobra-300x300.jpg',
        imagelg: 'images/accesorios/cubiertas/mitas-cobra.jpg',
        description: '',
        list: [
            'Cubierta Mitas COBRA',
            '26 X 1.90',
            'Peso 760 g',
            'Carga Maxima PSI 64'
        ],
        stock: 4,
        section: 'accesorios', 
    },
    {
        id: 20400,
        category: "accesories",
        subcategory: "inflador",
        brand: "Syncros",
        name: "Vernon",
        price: 10930,
        image: 'images/accesorios/infladores/syncros-vernon-300x300.jpg',
        imagelg: 'images/accesorios/infladores/syncros-vernon.jpg',
        description: 'La Vernon 2.0 HV es una bomba específica para bicicletas de montaña que está diseñada con un barril de gran volumen extra para entregar más aire con menos golpes. Una construcción de acero y compuesto produce un producto ligero pero duradero que siempre te llenará y nunca te fallará.',
        list: [
            'Barril de alto volumen optimizado para bicicletas de montaña',
            'Mango ergonómico compuesto con soporte de cabeza integrado',
            'Calibre de montaje superior de 2,5 «con botón de purga de aire',
            'Base de acero ancha y estable',
            'Tipo de valvula Presta / Schrader reversible, con palanca de cierre',
            'Presión máxima 40PSI / 2.8 bar',
        ],
        stock: 2,
        section: 'accesorios', 
    },
    {
        id: 20401,
        category: "accesories",
        subcategory: "inflador",
        brand: "Syncros",
        name: "Mini Pump",
        price: 3450,
        image: 'images/accesorios/infladores/boundary-300x300.jpg',
        imagelg: 'images/accesorios/infladores/boundary.jpg',
        description: 'La Vernon 2.0 HV es una bomba específica para bicicletas de montaña que está diseñada con un barril de gran volumen extra para entregar más aire con menos golpes. Una construcción de acero y compuesto produce un producto ligero pero duradero que siempre te llenará y nunca te fallará.',
        list: [
            'MATERIAL Alloy barrel and composite handle',
            'VALVE TYPE Extractable Presta with sealing lever',
            'MAXIMUM PRESSURE 120PSI / 8.3 bar',
            'WEIGHT 81g approx.',
            'SIZE One size',
            'FEATURES High Pressure construction optimized for road bikes',
            'Innovative sealing lever doubles as protective head cover protecting against water and dirt',
            'Extractable head reduces the risk of damaging valve stem during inflation',
            'DIMENSIONS 200mm',
            'AIR VOLUME PER STROKE 26.5cc'
        ],
        stock: 2,
        section: 'accesorios', 
    },
    {
        id: 20500,
        category: "accesories",
        subcategory: "manubrio",
        brand: "Syncros",
        name: "Fraser 740mm -17º",
        price: 59400,
        image: 'images/accesorios/manubrios/fraser-17-grados-300x300.jpg',
        imagelg: 'images/accesorios/manubrios/fraser-17-grados.jpg',
        description: 'El manubrio integrado más ganador de la historia,  Utilizado por Andri Frischknecht del SCOTT – SRAM TEAM. El stem tiene -17 grados de rise y está construido en carbono de una sola pieza. Esta es una edición limitada del Fraser iC SL.',
        list: [
            'MATERIAL Carbon UD, Superlight Layup',
            'UP SWEEP 6° up',
            'BACK SWEEP 9° back',
            'RISE Flat T-Bar',
            'ANGLE -17°',
            'CLAMP DIAMETERiC (integrated Cockpit)',
            'STEERER DIAMETER 1 1/8″'
        ],
        stock: 2,
        section: 'accesorios', 
    },
    {
        id: 20501,
        category: "accesories",
        subcategory: "manubrio",
        brand: "Syncros",
        name: "Fraser 740mm -25º",
        price: 59400,
        image: 'images/accesorios/manubrios/fraser-25-grados-300x300.jpg',
        imagelg: 'images/accesorios/manubrios/fraser-25-grados.jpg',
        description: 'El manubrio integrado más ganador de la historia, bajo el control de Nino Schurter nuestro Fraser iC Special Edition está diseñado de acuerdo a su geometría preferida. El stem tiene 25 grados de rise y está construido en carbono de una sola pieza. Esta es una edición limitada del Fraser iC SL.',
        list: [
            'MATERIAL Carbon UD, Superlight Layup',
            'UP SWEEP 6° up',
            'BACK SWEEP 9° back',
            'RISE Flat T-Bar',
            'ANGLE-25°',
            'CLAMP DIAMETER iC (integrated Cockpit)',
            'STEERER DIAMETER 1 1/8″',
            'WEIGHT 220g (90mm virtual extension, -25 degree)',
            'FEATURES XC World Cup level integrated carbon bar & stem',
            'One piece construction',
            'Textured grip/lever area',
            'Integrated stem -25°',
            'Flat T-Bar shape',
            'Width: 740mm',
            'Syncros Engineered Carbon Construction'
        ],
        stock: 2,
        section: 'accesorios', 
    },
    {
        id: 20502,
        category: "accesories",
        subcategory: "manubrio",
        brand: "Syncros",
        name: "Fraser 720mm",
        price: 57435,
        image: 'images/accesorios/manubrios/fraser-300x300.jpg',
        imagelg: 'images/accesorios/manubrios/fraser.jpg',
        description: 'Nuestro conjunto de manillar y potencia de cross country en una sola pieza ofrece un peso bajísimo para los riders de XC que saben lo que se traen entre manos. Hemos utilizado como punto de partida nuestro popular manillar plano y una potencia de -8° en 3 posibles opciones de extensión virtual; nuestros ingenieros especializados en carbono han conseguido un ahorro considerable de peso con las mismas prestaciones. Este es el conjunto de manillar que monta Kate Courtney en el circuito del Mundial.',
        list: [
            'Superligero – 220 g para extensión de 740 mm',
            'Manillar y potencia en una sola pieza',
            '740 mm de ancho',
            'El que monta Kate Courtney'
        ],
        stock: 1,
        section: 'accesorios', 
    },
    {
        id: 20503,
        category: "accesories",
        subcategory: "manubrio",
        brand: "Syncros",
        name: "FL 1.0 Carbon 740mm",
        price: 28376,
        image: 'images/accesorios/manubrios/fl-1.0-carbon-300x300.jpg',
        imagelg: 'images/accesorios/manubrios/fl-1.0-carbon.jpg',
        description: '',
        list: [

        ],
        stock: 2,
        section: 'accesorios', 
    },
    {
        id: 20600,
        category: "accesories",
        subcategory: "punos",
        brand: "Syncros",
        name: "Pro Black",
        price: 1973,
        image: 'images/accesorios/punos/pro-300x300.jpg',
        imagelg: 'images/accesorios/punos/pro.jpg',
        description: '',
        list: [
            'Material de agarre excepcional: poliuretano elastomérico muy duradero',
            'La textura de la superficie es antideslizante',
            '30mm de diámetro',
            'Material: Goma',
            'Peso: 80 g el par'
        ],
        stock: 5,
        section: 'accesorios', 
    },
    ];
    
    /***** VARIABLES Y SELECTORES *****/   
    let carrito = [];
    let total = 0;
    let shipping = 1500;

    let paginaActual = definirPagina(window.location.pathname);
    let baseDeDatosFiltrada = baseDeDatos.filter(itemSection => itemSection['section'] == paginaActual);

    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $gallery = document.querySelector('#gallery');
    let $modals = document.querySelector('#products-modals');
    let $botonVaciar = document.querySelector('#boton-vaciar');
    let $botonConfirmarCompra = document.querySelector('#confirmar-compra');
    let $cantProductos = document.querySelector('.cantidad-productos');
    let $listadoPrecios = document.querySelector('#listado-precios');
    
    let $shipping = document.querySelector('#shipping');
    let $weacept = document.querySelector('#weacept');
    let $payment = document.querySelector('#payment');
    let $discount = document.querySelector('#discount');
    let $purchaseDelay = document.querySelector('#purchase-delay');
    
    /***** LISTENERS *****/
    $botonVaciar.addEventListener('click', vaciarCarrito);
    $botonConfirmarCompra.addEventListener('click', confirmarCompra);

    /***** FUNCIONES *****/
    /** FUNCIONALIDAD **/
    function agregarUnidadCarrito() {
        let item = this.getAttribute('marcador');
        let contador = 0;
        for (i = 0; i < carrito.length; i++ ) {
            carrito[i] == item ? contador++ : null ; 
        };
        //Antes de agregar, analizamos si hay stock del producto
        if (contador < this.getAttribute('stock')) {
            // Anyadimos el Nodo a nuestro carrito
            carrito.push(item)
            // Calculo el total
            calcularTotal();
            // Calculo del envio
            shippingPrice();
            // Renderizamos el carrito 
            renderizarCarrito();
            // Imprimimos en consola los ID de los productos del carrito
            console.log(carrito);
        } else {
            alert('No hay mas stock del producto');
        } 
    };             
    function quitarUnidadCarrito() {
        let item = this.getAttribute('marcador');
        let itemPosition = carrito.indexOf(item);
        
        if (itemPosition > -1) {
            // Quitamos el nodo a nuesto carrito
            carrito.splice(itemPosition, 1);
            // Calculo el total
            calcularTotal();
            // Calculo del envio
            shippingPrice();
            // Renderizamos el carrito 
            renderizarCarrito();
            // Imprimimos en consola los ID de los productos del carrito
            console.log(carrito);
        } 
    };      
    function borrarItemCarrito() {
        

        // Obtenemos el producto ID que hay en el boton pulsado
        let id = this.getAttribute('marcador');

        // Borramos todos los productos
        carrito = carrito.filter(function (carritoId) {
            return carritoId !== id;
        });

        // volvemos a renderizar
        renderizarCarrito();
        
        // Calculamos de nuevo el precio
        console.log(carrito);
    }                                                                              
    function vaciarCarrito() {
        if(confirm('¿Está seguro que desea vaciar el carrito?')) {
            carrito = [];
            console.log(carrito);
        }
    
        // Renderizamos los cambios
        renderizarCarrito();
    };
    function cantidadProductos() {
        cantProductos = carrito.length;
        if(cantProductos == 0) {
            $cantProductos.classList.add('text-muted');
            localStorage.clear();
        } else {
            $cantProductos.classList.remove('text-muted');
        }
        $cantProductos.textContent = `${cantProductos}`;
    };
    function shippingPrice() {
        // Compras mayores a $7000, envio gratis
        if(total > 7000) {
            shipping = 0
        } else {
            shipping
        }

        let cartModalShippingPrice = document.createElement('li');
        cartModalShippingPrice.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'border-0', 'px-0', 'pb-0');
        cartModalShippingPrice.innerHTML = `1 x Envío a domicilio <span> $ ${Intl.NumberFormat(032).format(shipping)}</span>`;
        
        $listadoPrecios.appendChild(cartModalShippingPrice);

    }
    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;

        // Recorremos el array del carrito
        for (let item of carrito) {
            // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['price'] + shipping;
        }
        // Le damos formato el precio
        let totalDosDecimales = Intl.NumberFormat(032).format(total);
        // Renderizamos el precio en el HTML
        let totalPrice = document.createElement('li');
        totalPrice.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'border-bottom-0', 'border-right-0', 'border-left-0', 'px-0', 'mb-3');
        totalPrice.innerHTML = `
            <p class="mb-0"><strong>PRECIO TOTAL </strong><small>(IVA incluido)</small></p>
            <span><strong>$ ${Intl.NumberFormat(032).format(total)}</strong></span>`;

        $listadoPrecios.appendChild(totalPrice);
    };
    function confirmarCompra(){
        alert('¡Gracias por tu compra!')
    };
    function limpiarCarrito () {
        $carrito.textContent = '';
    }
    function limpiarListadoPrecios () {
        $listadoPrecios.innerHTML = '';
    }
    function mostrarDivs() {

        $purchaseDelay.classList.remove('d-none');
        $shipping.classList.remove('d-none');
        $payment.classList.remove('d-none'); 
        $discount.classList.remove('d-none'); 
    };
    function ocultDivs() {
        $purchaseDelay.classList.add('d-none');
        $shipping.classList.add('d-none'); 
        $payment.classList.add('d-none'); 
        $discount.classList.add('d-none'); 
    };
    function guardarStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };
    function cargarStorage() {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        carrito == null ? carrito = [] : null;
    };
    function definirPagina() {
        if (window.location.pathname == '/index.html') {
            let pagina = 'index'
            return pagina;
        } else if (window.location.pathname == '/bicicletas.html'){
            let pagina = 'bicicletas';
            return pagina;
        } else if (window.location.pathname == '/accesorios.html'){
            let pagina = 'accesorios';
            return pagina;
        } else if (window.location.pathname == '/indumentaria.html'){
            let pagina = 'indumentaria';
            return pagina;
        } 
    } 

    /** RENDERIZADO **/
    
    // Renderizado galería de productos
    function renderizarProductos() {
       
        for (const datosProducto of baseDeDatosFiltrada) {
            
            // Estructura
            const card = document.createElement('div');
            card.classList.add('card', datosProducto['subcategory'], 'col-lg-3', 'col-md-4', 'col-sm-6', 'col-12');
            
            // Imagen
            const cardImagen = document.createElement('img');
            cardImagen.classList.add('card-img-top');
            cardImagen.setAttribute('src', datosProducto['image']);
            
            // Body
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            
            // Titulo
            const cardTitulo = document.createElement('p');
            cardTitulo.classList.add('card-title');
            cardTitulo.textContent = `${datosProducto['brand'].toUpperCase()} ${datosProducto['name']}`;
            
            // Precio
            const cardPrecio = document.createElement('p');
            cardPrecio.classList.add('card-price');
            
            var precioFormateado = Intl.NumberFormat(032).format(datosProducto['price']);
            cardPrecio.textContent = `$ ${precioFormateado}`;
            
            
            // Boton Info
            const cardInfoBoton = document.createElement('button');
            cardInfoBoton.setAttribute('type', 'button');
            cardInfoBoton.classList.add('btn', 'btn-secondary');
            cardInfoBoton.setAttribute('data-toggle', 'modal');
            cardInfoBoton.setAttribute('data-target', `#modal${datosProducto['id']}`);
            cardInfoBoton.textContent = 'Mas Informacion';
            
            // Boton Agregar al Carrito
            const cardAgregarBoton = document.createElement('button');
            cardAgregarBoton.classList.add('btn', 'btn-primary', 'mt-1');
            cardAgregarBoton.setAttribute('marcador', datosProducto['id']);
            cardAgregarBoton.setAttribute('stock', datosProducto['stock']);
            cardAgregarBoton.textContent = 'Agregar al Carrito ';
            cardAgregarBoton.addEventListener('click', agregarUnidadCarrito);
            
            // Simbolo Carrito Font Awesome 
            const fontAwesomeCart = document.createElement('i');
            fontAwesomeCart.classList.add('fas', 'fa-cart-plus');
            
            // Insertamos
            $gallery.appendChild(card);
            card.appendChild(cardBody);
            cardBody.appendChild(cardImagen);
            cardBody.appendChild(cardTitulo);
            cardBody.appendChild(cardPrecio);
            cardBody.appendChild(cardInfoBoton);
            cardBody.appendChild(cardAgregarBoton);
            cardAgregarBoton.appendChild(fontAwesomeCart);
        };
    };
    // Renderizado modals de cada producto
    function renderizarItemsModals() {
        for (const datosProducto of baseDeDatosFiltrada) {
            
            // Estructura Modal 
            const itemModal = document.createElement('div');
            itemModal.id = `modal${datosProducto['id']}`;
            itemModal.classList.add('modal', 'fade');
            itemModal.setAttribute('tabindex', '-1');
            itemModal.setAttribute('role','dialog');
            itemModal.setAttribute('aria-labelledby','myHugeModalLabel');
            itemModal.setAttribute('aria-hidden', 'true');
            
            // Modal Dialog
            const itemModalDialog = document.createElement('div');
            itemModalDialog.classList.add('modal-dialog','modal-xl');
            
            // Modal Content
            const itemModalContent = document.createElement('div');
            itemModalContent.classList.add('modal-content');
            
            // Modal Container
            const itemModalContainer = document.createElement('div');
            itemModalContainer.classList.add('container');
            
            // Modal Row
            const itemModalRow = document.createElement('div');
            itemModalRow.classList.add('row');
            
            // Modal Responsive Left
            const itemModalResponsiveLeft = document.createElement('div');
            itemModalResponsiveLeft.classList.add('col-12', 'col-lg-6', 'p-4');
            
            // Modal Image
            const itemModalImage = document.createElement('img');
            itemModalImage.classList.add('w-100');
            itemModalImage.setAttribute('src', datosProducto['imagelg']);
            
            // Modal Responsive Right
            const itemModalResponsiveRight = document.createElement('div');
            itemModalResponsiveRight.classList.add( 'd-flex', 'flex-column', 'col-12', 'col-lg-6', 'p-4');
            
            // Modal Title
            const itemModalTitle = document.createElement('h3');
            itemModalTitle.classList.add('text-center');
            itemModalTitle.textContent = `${datosProducto['brand'].toUpperCase()} ${datosProducto['name']}`;
            
            // Modal Body
            const itemModalBody = document.createElement('div');
            itemModalBody.classList.add('description');
            
            // Modal Description <p>
                const itemModalDescription = document.createElement('p');
                itemModalDescription.textContent = `${datosProducto['description']}`;
                
                // Titulo Caracteristicas Principales
                const itemPrincipalCarTitle = document.createElement('h5');
                itemPrincipalCarTitle.textContent = 'Características Principales';
                
                // Lista de Caracterìsticas
                const itemListCar = document.createElement('ul');
                const itemListCarIl = document.createElement('li');
                
                // Botones
                
                const itemModalButtonsDiv = document.createElement('div');
                itemModalButtonsDiv.classList.add('container', 'd-flex', 'align-items-end','flex-grow-1');
                
                const itemModalButtonsContainer = document.createElement('div');
                itemModalButtonsContainer.classList.add('container');
                
                const itemModalButtons = document.createElement('div');
                itemModalButtons.classList.add('row', 'align-content-end', 'justify-content-center');
                
                // Boton Agregar al Carrito
                const itemModalAgregarBoton = document.createElement('button');
                itemModalAgregarBoton.classList.add('btn', 'btn-primary', 'm-2', 'col-12', 'col-xl-5', 'agregar-boton');
                itemModalAgregarBoton.setAttribute('marcador', datosProducto['id']);
                itemModalAgregarBoton.setAttribute('stock', datosProducto['stock']);
                itemModalAgregarBoton.textContent = 'Agregar al Carrito ';
                itemModalAgregarBoton.addEventListener('click', agregarUnidadCarrito);
                
                // Simbolo Carrito Font Awesome 
                const fontAwesomeCart = document.createElement('i');
                fontAwesomeCart.classList.add('fas', 'fa-cart-plus');
                
                // Boton Cerrar Modal
                const itemModalCerrarBoton = document.createElement('button');
                itemModalCerrarBoton.classList.add('btn', 'btn-secondary', 'm-2', 'col-12', 'col-xl-5');
                itemModalCerrarBoton.setAttribute('data-dismiss', 'modal');
                itemModalCerrarBoton.textContent = 'Cerrar Ventana';
                
                // Renderizamos Modal
                $modals.appendChild(itemModal);
                itemModal.appendChild(itemModalDialog);
                itemModalDialog.appendChild(itemModalContent);
                itemModalContent.appendChild(itemModalContainer);
                itemModalContainer.appendChild(itemModalRow);
                itemModalRow.appendChild(itemModalResponsiveLeft);
                itemModalResponsiveLeft.appendChild(itemModalImage);
                itemModalRow.appendChild(itemModalResponsiveRight);
                itemModalResponsiveRight.appendChild(itemModalTitle);
                itemModalResponsiveRight.appendChild(itemModalBody);
                itemModalBody.appendChild(itemModalDescription);
                itemModalBody.appendChild(itemPrincipalCarTitle);
                itemModalBody.appendChild(itemListCar);
                datosProducto.list.forEach(elem =>  {
                    let itemListCarLi = document.createElement('li');
                    itemListCarLi.textContent = elem;
                    itemListCar.appendChild(itemListCarLi)
                });
                itemModalResponsiveRight.appendChild(itemModalButtonsDiv);
                itemModalButtonsDiv.appendChild(itemModalButtonsContainer);
                itemModalButtonsContainer.appendChild(itemModalButtons);
                itemModalButtons.appendChild(itemModalAgregarBoton);
                itemModalAgregarBoton.appendChild(fontAwesomeCart);
                itemModalButtons.appendChild(itemModalCerrarBoton);
            }      
        }                  
    // Renderizado modal de Carrito
    function renderizarCarrito() {

        // Vaciamos todo el html
        limpiarCarrito();
        limpiarListadoPrecios();

        //Cantidad de Productos
        cantidadProductos();


        // Quitamos los duplicados
        let carritoSinDuplicados = [...new Set(carrito)];
        
        if (carrito.length !== 0) {
            
            // Mostramos divs ocultos
            mostrarDivs();

            // Generamos los Nodos a partir de carrito
            carritoSinDuplicados.forEach(function (item, indice) {

                // Obtenemos el item que necesitamos de la variable base de datos
                let miItem = baseDeDatos.filter(itemBaseDatos => itemBaseDatos['id'] == item);
                console.log(`Producto ${miItem[0]['brand']} ${miItem[0]['name']} (ID: ${miItem[0]['id']})`);

                // Cuenta el número de veces que se repite el producto
                let numeroUnidadesItem = carrito.reduce(((total, itemId) => itemId === item ? total += 1 : total), 0);
                console.log(`Cantidad: ${numeroUnidadesItem}`);

                
                /** Armado del HTML del Cart **/
                // Creamos Div Row para cada Item del carrito
                let cartModalRow = document.createElement('div');
                cartModalRow.classList.add('row', 'mb-5'); 
                
                // Imagen del Cart
                let cartModalImage = document.createElement('div');
                cartModalImage.classList.add('col-md-5', 'col-lg-3', 'col-xl-3');
                cartModalImage.innerHTML = `
                    <div id = "cart-product-image" class=>
                        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img class="img-fluid w-100" src= ${miItem[0]['image']} alt='${miItem[0]['brand']} ${miItem[0]['name']}'>
                        </div>
                    </div>
                `
                
                let cartModalItemAttributes = document.createElement('div');
                cartModalItemAttributes.classList.add('col-md-7', 'col-lg-9', 'col-xl-9');

                let cartModalItemAttributesDiv = document.createElement('div');
                cartModalItemAttributesDiv.classList.add('d-flex', 'justify-content-between');
                
                let cartModalItemDescription = document.createElement('div');
                cartModalItemDescription.innerHTML = `
                        <h4>${miItem[0]['brand'].toUpperCase()}</h4>
                        <h5 class='mt-1 mb-0'>${miItem[0]['name']}</h5>
                        <p class="mt-2 mb-0 text-muted text-uppercase small">Codigo Art: ${miItem[0]['id']}</p>
                        <p class="mt-2 mb-0 text-muted text-uppercase small">Tipo: ${miItem[0]['subcategory']}</p>
                `
                let cartModalItemQuantity = document.createElement('div');
                    
                let cartModalItemInputDiv = document.createElement('div');
                cartModalItemInputDiv.classList.add('def-number-input', 'number-input', 'mb-0', 'w-100', 'justify-content-center', 'align-content-start',)
                
                let cartModalItemInputDiv2 = document.createElement('div');
                cartModalItemInputDiv2.classList.add('d-flex');

                let cartModalItemInputDiv3 = document.createElement('div');

                let cartModalItemInputMinusButton = document.createElement('btn');
                cartModalItemInputMinusButton.classList.add('btn', 'btn-primary', 'mt-0', 'quantity-button');
                cartModalItemInputMinusButton.textContent ='-';
                cartModalItemInputMinusButton.setAttribute('marcador', `${miItem[0]['id']}`);
                cartModalItemInputMinusButton.setAttribute('stock', `${miItem[0]['stock']}`);
                cartModalItemInputMinusButton.addEventListener('click', quitarUnidadCarrito);
                
                let cartModalItemInputField = document.createElement('input');
                cartModalItemInputField.readOnly = true;
                cartModalItemInputField.type = 'number';
                cartModalItemInputField.classList.add('mx-1', 'mt-0', 'quantity-input');
                cartModalItemInputField.min = 1;
                cartModalItemInputField.name = 'quantity';
                cartModalItemInputField.value = `${numeroUnidadesItem}`;

                let cartModalItemInputPlusButton = document.createElement('btn');
                cartModalItemInputPlusButton.classList.add('btn', 'btn-primary', 'mt-0', 'quantity-button', 'agregar-unidad');
                cartModalItemInputPlusButton.textContent = '+';
                cartModalItemInputPlusButton.setAttribute('marcador', `${miItem[0]['id']}`);
                cartModalItemInputPlusButton.setAttribute('stock', `${miItem[0]['stock']}`);
                cartModalItemInputPlusButton.addEventListener('click', agregarUnidadCarrito);
                
                let cartModalItemStock = document.createElement('small');
                cartModalItemStock.classList.add('form-text', 'text-muted', 'text-center');
                cartModalItemStock.textContent = `(Stock, ${miItem[0]['stock']} unidades)`

                let cartModalItemFooter = document.createElement('div');
                cartModalItemFooter.classList.add('d-flex', 'mt-2', 'justify-content-between', 'align-items-center')

                let cartModalItemDeleteItem = document.createElement('a');
                cartModalItemDeleteItem.type = 'button';
                cartModalItemDeleteItem.href = '#!';
                cartModalItemDeleteItem.classList.add('card-link-secondary', 'small', 'text-uppercase', 'text-decoration-none', 'mr-3');
                cartModalItemDeleteItem.setAttribute('marcador', `${miItem[0]['id']}`);
                cartModalItemDeleteItem.innerHTML = `<i class="fas fa-trash-alt mt-2 mr-1"></i> Eliminar item`;
                cartModalItemDeleteItem.addEventListener('click', borrarItemCarrito);
                
                let cartModalItemSubtotal = document.createElement('p');
                cartModalItemSubtotal.classList.add('mb-0');
                cartModalItemSubtotal.innerHTML = `<span><strong>Subtotal: $ ${Intl.NumberFormat(032).format(miItem[0]['price']*numeroUnidadesItem)}</strong></span>`;
                
                let cartModalPriceList = document.createElement('li');
                cartModalPriceList.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'border-0', 'px-0', 'pb-0');
                cartModalPriceList.innerHTML = `${numeroUnidadesItem} x ${miItem[0]['brand']} ${miItem[0]['name']} <span>$ ${Intl.NumberFormat(032).format(miItem[0]['price']*numeroUnidadesItem)}</span>`;
                
                
                
                // Mezclamos nodos
                $carrito.appendChild(cartModalRow);
                cartModalRow.appendChild(cartModalImage);
                cartModalRow.appendChild(cartModalItemAttributes);
                cartModalItemAttributes.appendChild(cartModalItemAttributesDiv);
                cartModalItemAttributesDiv.appendChild(cartModalItemDescription);
                cartModalItemAttributesDiv.appendChild(cartModalItemQuantity); //OK
                cartModalItemQuantity.appendChild(cartModalItemInputDiv); 
                cartModalItemInputDiv.appendChild(cartModalItemInputDiv2); 
                cartModalItemInputDiv2.appendChild(cartModalItemInputMinusButton);
                cartModalItemInputDiv2.appendChild(cartModalItemInputField);
                cartModalItemInputDiv2.appendChild(cartModalItemInputPlusButton); 
                cartModalItemInputDiv.appendChild(cartModalItemInputDiv3);
                cartModalItemInputDiv3.appendChild(cartModalItemStock);
                cartModalItemAttributes.appendChild(cartModalItemFooter);
                cartModalItemFooter.appendChild(cartModalItemDeleteItem);
                cartModalItemFooter.appendChild(cartModalItemSubtotal);

                $listadoPrecios.appendChild(cartModalPriceList);
            });
            
            // Guardamos en localStorage
            guardarStorage();

            // Calculamos el costo de envio
            shippingPrice();

            // Calculamos el total
            calcularTotal();



        } else {
            $carrito.innerHTML = `
            <p> No hay productos en el carrito </p>
            `;
            
            ocultDivs();
        };
    };
                                            
    /***** INICIO DE APLICACION *****/
    cargarStorage();
    definirPagina();
    renderizarProductos();
    renderizarItemsModals();
    renderizarCarrito();

