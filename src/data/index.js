import Slide1 from '../assets/img/carousel/slide1.jpg';
import Slide4 from '../assets/img/carousel/slide4.jpg';

/** Main Carousel Data */
export const mainCarouselData = [
  {
    id: 1,
    title: 'Asegura tú inversión con Remate seguro',
    desc: 'Garantizamos hasta un 15% de retorno por tu inversión',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689974575/Projects/unne/img/hero/remate3.jpg',
  },
  {
    id: 2,
    title: '¡Encuentra tu financiamiento ideal!',
    desc: 'En Alianza con los Bancos más importantes del país',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689975271/Projects/unne/img/hero/financiamiento2.jpg',
  },
  {
    id: 3,
    title: '¡Simplifica tus trámites legales con nuestros abogados inmobiliarios!',
    desc: 'Nos encargamos de todo el proceso de la postventa de tu propiedad',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689975597/Projects/unne/img/hero/tramite2.jpg',
  },
  {
    id: 4,
    title: '¡Deja la venta de tu propiedad en mano de expertos!',
    desc: 'Somos la corredora más grande del país, con más de 6000 publicaciones activas',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689974937/Projects/unne/img/hero/venta.jpg',
  },
];
export const mainCarouselLeaseData = [
  {
    id: 1,
    title: 'Arrienda tu propiedad sin complicaciones',
    desc: 'Contamos con mas de 300 corredores de propiedades en todo el territorio nacional',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690907896/Projects/unne/img/Quiero%20arrendar/QUIERO_ARRENDAR__Arrienda_tu_propiedad_sin_complicaciones_ieiurk.webp',
  },
];

export const mainCarouselSellingData = [
  {
    id: 1,
    title: 'Vende fácil y rápido',
    desc: 'Somos la corredora de propiedades más grande del país',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684191353/Projects/unne/img/hero/webp/slide1_rln2k2.webp',
  },
];

export const mainCarouselLegalServicesData = [
  {
    id: 1,
    title: '¡No pierdas una venta por un trámite legal!',
    desc: 'Nuestros abogados inmobiliarios te acompañan en todo el proceso de venta',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690837248/Projects/unne/img/Eres%20corredor/ERES_CORREDOR___SERVICIOS_LEGALES_rhfldh.webp',
  },
];

/** Tabs search by Property Data */
export const webServicesTabs = ['venta', 'arriendo ', 'arriendo_temporal'];

/* Imagenes de banco - Data */
export const BankData = [
  {
    id: 1,
    title: 'Banco Estado',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689962901/Projects/unne/img/alianzas/BancoEstado.webp',
    href: '',
  },
  {
    id: 2,
    title: 'Accion Panal',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689962901/Projects/unne/img/alianzas/accionPanal.webp',
    href: '',
  },
  {
    id: 3,
    title: 'Info Check',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689963093/Projects/unne/img/alianzas/InfoCheck.webp',
    href: 'https://www.bci.cl/personas',
  },
  {
    id: 4,
    title: 'Goohaus',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689963276/Projects/unne/img/alianzas/Goohaus.webp',
    href: '',
  },
  {
    id: 5,
    title: 'Banco TrueCapital',
    img: 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1680029041/unne-media/bancos/TrueCapital_yuwaip.png',
    href: 'https://www.truecapital.cl/',
  },
];
/** porque unne - Arrendar Data */
export const whyUnneLeaseData = [
  {
    id: 1,
    title: '¿Por qué Unne?',
    benefits: [
      {
        id: 1,
        name: 'Te acompañamos en toda la gestión.',
        icon: 'before:content-["1"]',
      },
      {
        id: 2,
        name: 'Tu propiedad en manos del arrendatario correcto.',
        icon: 'before:content-["2"]',
      },
      {
        id: 3,
        name: 'Publicamos en los portales mas reconocidos de Chile.',
        icon: 'before:content-["3"]',
      },
      {
        id: 4,
        name: 'Asesoria Legal.',
        icon: 'before:content-["4"]',
      },
      {
        id: 5,
        name: 'Agenda tu sesión de fotos y video profesional de manera gratuita.',
        icon: 'before:content-["5"]',
      },
    ],
  },
];

export const whyUnneLeaseNewData = [
  {
    id: 1,
    title: 'Equipo de Profesionales',
    text: 'Contamos con más de 300 corredores de propiedades especializados en todo el territorio nacional, con la asesoría de abogados inmobiliarios que te ayudaran desde la elaboración de contrato hasta recibir pago del arriendo.',
    icon:'RiUserSearchFill'
  },
  {
    id: 2,
    title: 'Vende en tiempo récord',
    text: 'Utilizamos un sistema inteligente que permite cruzar bases de datos de búsquedas y consultas para optimizar los tiempos de respuesta y conseguir tu arrendatario ideal en poco tiempo.',
    icon:'BsBarChartFill'
  },
  {
    id: 3,
    title: 'Mayor Alcance',
    text: 'Sincronizamos nuestras publicaciones en los 39 portales inmobiliarios más importantes del país, lo que te brindara una mayor visualización de tu propiedad.',
    icon:'GiMoneyStack'
  },
];

/* Informacion del circulo en quiero-arrendar.js */
export const CircleArrendarData = [
  {
    id: 1,
    text: 'Llena el formulario',
    position: 'lg:top-0 lg:right-[19rem] md:max-lg:left-2/4 md:-top-8',
  },
  {
    id: 2,
    text: 'Te asignamos a tu objetivo',
    position: 'lg:right-full md:max-lg:top-10 md:max-lg:left-[24rem]',
  },
  {
    id: 3,
    text: 'Evaluacion Comercial',
    position:
      'lg:right-[19rem] lg:bottom-0 md:max-lg:top-[9rem] md:max-lg:left-[28rem] ',
  },
  {
    id: 4,
    text: 'Definicion de estrategias',
    position:
      'lg:bottom-0 lg:left-[19rem] md:max-lg:left-2/4 md:max-lg:-bottom-8 ',
  },
  {
    id: 5,
    text: 'Gestion Comercial',
    position: 'lg:left-full md:max-lg:bottom-10 md:max-lg:left-[24rem]',
  },
  {
    id: 6,
    text: '¡Arrendamos y recibe tu arriendo!',
    position:
      'lg:top-0 lg:left-[19rem] md:max-lg:bottom-[9rem] md:max-lg:left-[28rem] ',
  },
];

/* Informacion del circulo en quiero-vender.js */
export const CircleVenderData = [
  {
    id: 1,
    text: 'Llena el formulario',
    position: 'lg:top-0 lg:right-[19rem] md:max-lg:left-2/4 md:-top-8',
  },
  {
    id: 2,
    text: 'Te asignamos a tu Ejecutivo',
    position: 'lg:right-full md:max-lg:top-10 md:max-lg:left-[24rem]',
  },
  {
    id: 3,
    text: 'Evaluación Comercial',
    position:
      'lg:right-[19rem] lg:bottom-0 md:max-lg:top-[9rem] md:max-lg:left-[28rem]',
  },
  {
    id: 4,
    text: 'Definicion de estrategias',
    position:
      'lg:bottom-0 lg:left-[19rem] md:max-lg:left-2/4 md:max-lg:-bottom-8',
  },
  {
    id: 5,
    text: 'Gestión Comercial y legal',
    position: 'lg:left-full md:max-lg:bottom-10 md:max-lg:left-[24rem]',
  },
  {
    id: 6,
    text: 'vende y recibe tu pago!',
    position:
      'lg:top-0 lg:left-[19rem] md:max-lg:bottom-[9rem] md:max-lg:left-[28rem]',
  },
];

/** Main Carousel - Vender Data */
export const mainCarouselSellData = [
  {
    id: 1,
    title: 'Vende fácil y rápido',
    desc: '',
    img: Slide1,
  },
  {
    id: 2,
    title: 'Vende fácil y rápido',
    desc: '',
    img: Slide4,
  },
];

/** porque unne - vender Data */
export const whyUnneSellData = [
  {
    id: 1,
    title: '¿Por qué Unne?',
    benefits: [
      {
        id: 1,
        name: 'Te asesoramos de principio a fin.',
        icon: 'before:content-["1"]',
      },
      {
        id: 1,
        name: 'Tenemos la base  de clientes compradores más grande del país.',
        icon: 'before:content-["2"]',
      },
      {
        id: 1,
        name: 'Publicamos en 43 portales inmobiliarios Servicios legales.',
        icon: 'before:content-["3"]',
      },
      {
        id: 1,
        name: 'Servicios legales.',
        icon: 'before:content-["4"]',
      },
      {
        id: 1,
        name: 'Agenda tu sesión de fotos y video profesional de manera gratuita.',
        icon: 'before:content-["5"]',
      },
    ],
  },
];
/** porque unne - vender Data */
export const whyUnneSellNewData = [
  {
    id: 1,
    title: 'Equipo de Profesionales',
    text: 'Contamos con más de 250 corredores de propiedades especializados en todo el territorio nacional, con el respaldo de un equipo legal que se encarga de toda la gestión de la postventa para tu seguridad y tranquilidad.',
    icon:'customEquipo',
  },
  {
    id: 2,
    title: 'Vende en tiempo récord',
    text: 'Utilizamos un sistema inteligente que permite cruzar bases de datos de búsquedas y consultas para optimizar los tiempos de respuesta y conseguir tu cliente ideal en poco tiempo.',
    icon:'customMayor',
  },
  {
    id: 3,
    title: 'Mayor Alcance',
    text: 'Sincronizamos nuestras publicaciones en los 39 portales inmobiliarios más importantes del país, lo que te brindara una mayor visualización de tu propiedad.',
    icon:'customVende',
  },
];

/** Objetives Auction page icons,title,desc */
export const ObjetivesAuctionData = [
  {
    id: 1,
    icon: 'A',
    title: 'Defenición de objetivos y necesidades',
    desc: 'Establecemos el capital que dispones para tu inversión mediante una reunión de trabajo',
  },
  {
    id: 2,
    icon: 'B',
    title: 'Nos encargamos de todo el proceso',
    desc: 'Legal, pago de servicios básicos e impuestos sobre la renta, reparaciones o remodelaciòn de la propiedad',
  },
  {
    id: 3,
    icon: 'C',
    title: 'Buscamos la mejor propiedad en remate para ti',
    desc: 'Se realiza el remate y se adjudica el inmueble para posteriormente pactar la rentabilidad que generara.',
  },

  {
    id: 4,
    icon: 'D',
    title: 'El dinero retorna con la rentabilidad pactada',
    desc: 'Obtén las ganancias esperadas por tu inversión',
  },
];

/** New Property Qualities */
export const NewPropertyQualities = [
  {
    id: 1,
    title: 'Descubre',
    desc: 'Encuentra el activo que calce mejor con tu perfil financiero.',
  },
  {
    id: 2,
    title: 'Simula',
    desc: 'Elige el activo inmobiliario que mas te guste y simula tu inversión de manera personalizada para proceder con la reserva de la propiedad.',
  },
  {
    id: 3,
    title: 'Relajate',
    desc: 'Gestionamos el crédito hipotecario, promesa de compra y escrituración por ti.',
  },
  {
    id: 4,
    title: 'Gana por tu inversion',
    desc: 'Administramos el arriendo de tu propiedad para que comiences a ganar por tu inversión.',
  },
];

/* Asociate.js Data */
export const AssociateData = [
  {
    id: 1,
    title: 'Asóciate a la red lider de corredores en Chile',
    children: [
      {
        id: 1,
        name: 'Mas de 30 cursos mensuales en el área legal y comercial',
        status: '',
      },
      {
        id: 2,
        name: 'Adelanta tu comisión con nuestro Pronto Pago',
        status: 'Nuevo',
      },
      {
        id: 3,
        name: 'Sesiones de Coaching comercial',
        status: 'Nuevo',
      },
      {
        id: 4,
        name: 'Alianzas con bancos y mutuarias',
        status: 'Nuevo',
      },
      {
        id: 5,
        name: 'Alianza con Assetplan, para aumentar tu cartera',
        status: 'Nuevo',
      },
      {
        id: 6,
        name: 'Servicios Legales',
        status: '',
      },
      {
        id: 7,
        name: 'Cuentas con un Vendeid para que las consultas te lleguen directamente',
        status: '',
      },
      {
        id: 8,
        name: 'Sistema de canje inteligente',
        status: '',
      },
      {
        id: 9,
        name: 'Conserva el 100% de tu comisión',
        status: '',
      },
    ],
  },
];

/* Imagenes de los portales - Data */
export const PortalData = [
  {
    id: 1,
    title: 'Portal Inmobiliario',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690916855/Projects/unne/img/portales/portal_in_1_alfly5.webp',
    href: 'https://www.portalinmobiliario.com/',
  },
  {
    id: 2,
    title: 'Yapo',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690912561/Projects/unne/img/portales/yapo_t81kzz.png',
    href: 'https://new.yapo.cl/',
  },
  {
    id: 3,
    title: 'Enlace Inmobiliario',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690912562/Projects/unne/img/portales/enlace_inmobiliario_io3jab.png',
    href: 'https://www.enlaceinmobiliario.cl/',
  },
  {
    id: 4,
    title: 'Toc toc',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690912561/Projects/unne/img/portales/toctoc_wjieec.png',
    href: 'https://www.toctoc.com/',
  },
  {
    id: 5,
    title: 'Zoom Inmobiliario',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690912562/Projects/unne/img/portales/zoom_srnwgd.png',
    href: 'https://www.zoominmobiliario.com/',
  },
  {
    id: 6,
    title: 'Portal Terreno',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690912562/Projects/unne/img/portales/portal_terreno_r8qswq.png',
    href: 'https://www.portalterreno.com/cl/',
  },
  {
    id: 7,
    title: 'Doomos',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690912562/Projects/unne/img/portales/doomos_rt0slv.png',
    href: 'https://www.doomos.cl/',
  },
  {
    id: 8,
    title: 'Propiv',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690912562/Projects/unne/img/portales/propiv_di2vat.png',
    href: 'https://propiv.com/',
  },
  {
    id: 9,
    title: 'ICasas',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690912561/Projects/unne/img/portales/iCasas_w1okpp.png',
    href: 'https://www.icasas.cl/',
  },
  {
    id: 10,
    title: 'Chile Propiedades',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690915721/Projects/unne/img/portales/chilepropiedades_edrxrr.png',
    href: 'https://chilepropiedades.cl/',
  },
];

/* Asociate.js Data */
export const AssociateCardData = [
  {
    id: 1,
    title: 'Contrata nuestros servicios legales',
    desc: 'Contamos con abogados especialistas en asesorias inmobiliarias que te guiaran en todo el proceso de la venta o arriendo de tu propiedad.',
    icon: 'AiTwotoneGold',
    href: '/eres-corredor/servicios-legales',
    children: [
      {
        id: 1,
        name: 'Adelanta tu comision con pronto pago',
      },
      {
        id: 2,
        name: 'Alianzas con bancos y mutuarias',
      },
      {
        id: 3,
        name: 'Banco de canje avanzado',
      },
    ],
  },
  {
    id: 2,
    title: 'Academia Unne',
    desc: 'Tenemos un programa dirigido por especialista del área del corretaje, que te brindara los conocimientos necesarios para ser un profesional',
    icon: 'BiBookOpen',
    href: '/eres-corredor/academia-unne',
    children: [
      {
        id: 1,
        name: 'Capacitaciones comerciales',
      },
      {
        id: 2,
        name: 'Capacitaciones legales',
      },
      {
        id: 3,
        name: 'Capacitaciones de sistema',
      },
    ],
  },
  {
    id: 3,
    title: 'Cuentas con el respaldo de un Vendeid',
    desc: 'Contacto directo con los clientes interesados en tu propiedad ¡sin intermediarios!. De esta forma podrás minimizar los tiempos de espera',
    icon: 'AiOutlineShareAlt',
    href: '',
    children: [],
  },
  {
    id: 4,
    title: 'Oportunidades de Inversión',
    desc: 'Tus clientes contaran con productos de inversión de remate seguro y unidades nuevas',
    icon: 'BsFillHouseAddFill',
    href: '/soy-inversionista/unidades-en-remate',
    children: [],
  },
];

/** Main Carousel Data */
export const CarouselLegalServicesData = [
  {
    id: 1,
    title: 'Enfócate en vender, alivia tu carga con Servicios Legales Unne',
    desc: 'No pierdas una venta por no tener la asesoría necesaria y entrega un servicio profesional.',
    img: Slide1,
  },
  {
    id: 2,
    title: 'Enfócate en vender, alivia tu carga con Servicios Legales Unne',
    desc: 'No pierdas una venta por no tener la asesoría necesaria y entrega un servicio profesional.',
    img: Slide4,
  },
];

/** porque unne - vender Data */
export const LegalServicesData = [
  {
    id: 1,
    title: 'Profesionales',
    desc: 'Contamos con un equipo de profesionales que te guiaran y apoyaran en todo el proceso legal.',
    color: 'bg-[#FDDC97]',
  },
  {
    id: 2,
    title: 'Gestión',
    desc: 'Nuestro equipo gestionara cada paso del proceso del credito hipotecario hasta el retiro del pago del vale vista.',
    color: 'bg-[#F7B092]',
  },
  {
    id: 3,
    title: 'Cero Filas',
    desc: 'Firma programada en notaria, para que tu tiempo lo utilices en otras cosas importantes.',
    color: 'bg-[#D6D5D5]',
  },
];

/** porque unne - vender Data */
export const TradingProcessData = [
  {
    id: 1,
    title: 'Proceso de Compraventa de inmuebles',
    doc: 'Sin documentación',
    uf: '6,8',
    process: [
      'Redacción de promesa e instrucciones notariales.',
      'Coordinación bancaria.',
      'Revisión de escritura publica de compraventa redactada por banco.',
      'Redacción de instrucciones notariales de compraventa.',
      'Coordinación notarial.',
      'Monitorieo en CBR respectivo.',
      'Orientacion legal en horario hábil.',
    ],
  },
];

/** porque unne - vender Data */
export const MoreServicesData = [
  {
    id: 1,
    title: 'Nuestros Servicios',
    process: [
      'Proceso de Compraventa de inmuebles',
      'Proceso de Compraventa de inmuebles al Contado',
      'Redacción de Promesa de compraventa e instrucciones notariales',
      'Revision de promesa de compraventa',
      'Informe de Estudio de Títulos',
      'Solución de reparos',
      'Redacción de poder especial de venta o compraventa',
      'Redacción escrituras de cancelación, transacción, renuncia de gananciales, etc.',
      'Redacción escritura publica de Compraventa',
      'Revisión escritura publica Compraventa redactada por banco',
      'Redacción instrucciones notariales de Compraventa',
      'Redacción contrato de arrendamiento estándar',
      'Redacción carta de termino de contrato de arrendamiento',
    ],
  },
  {
    id: 2,
    title: 'Juicios',
    process: [
      'Cobro de honorarios correspondientes a la comisión del corredor',
      'Terminación de contratos de arrendamiento por no pagos de las rentas ',
      'Restitución de inmuebles por abandono del arrendatario',
      'Precario',
      'Incumplimientos de contrato de promesa',
      'Conflictos a la Ley No 19.537 de Copropiedad Inmobiliaria',
      'Representación en segunda instancia',
    ],
  },
];


/** Plans card data */
export const plansCardData = [
  {
    id: 1,
    title: 'Plan Inteligente',
    commission: '25%',
    benefits: [
      '5% del valor del arriendo mensual',
      'Publicación en 30 portales inmobiliarios',
      'Ofertas formales con garantía Asesoría legal',
      'Acta de entrega con respaldo fotográfico',
      'Verificación de pago de servicios y GGCC',
      'Gestión de reparaciones y mantención',
    ],
  },
  {
    id: 2,
    title: 'Plan con garantía',
    commission: '50%',
    benefits: [
      '7,5% del valor del arriendo mensual',
      '6 meses de arriendo en caso de no pago',
      'Publicación en 30 portales inmobiliarios',
      'Ofertas formales con garantía Asesoría legal',
      'Acta de entrega con respaldo fotográfico',
      'Verificación de pago de servicios y GGCC',
      'Gestión de reparaciones y mantención',
    ],
  },
];


/** Company Qualities */
export const companyQualities = [
  {
    id: 1,
    title: 'Especialistas',
    desc: 'Te brindamos la mejor atención de la mano de especialistas del corretaje inmobiliario y profesionales del area legal.',
  },
  {
    id: 2,
    title: 'Rapidez',
    desc: 'Arrendamos tu propiedad en tiempo record, para que no tengas perdidas por tu inversión.',
  },
  {
    id: 3,
    title: 'Tranquilidad',
    desc: 'Desde el primer paso, nos encargamos de gestionar tu propiedad de inversión, para que ocupes tu tiempo en lo que te gusta.',
  },
];


/** Property Managment steps */
export const propertyManagmentData = [
  {
    id: 1,
    span: 'Escoge tu plan',
    desc: 'Administración Inteligente o con Garantía',
  },
  {
    id: 2,
    span: 'Disfruta de los beneficios',
    desc: 'y la tranquilidad, que nosotros nos encargamos del resto',
  },
  {
    id: 3,
    span: 'Comienza a recibir tu arriendo',
    desc: 'sin falta los primeros 5 dias del mes',
  },
];