export const navigationData = [
  {
    id: 1,
    name: 'Inicio',
    href: '/',
    children: [
      {
        id: 1,
        name: 'Unne',
        href: '/',
      },
      {
        id: 2,
        name: '¿Quiénes somos?',
        href: '/quienes-somos',
      },
    ],
  },
  {
    id: 2,
    name: 'Soy Propietario',
    children: [
      {
        id: 1,
        name: 'Quiero vender',
        href: '/soy-propietario/quiero-vender',
      },
      {
        id: 2,
        name: 'Quiero arrendar',
        href: '/soy-propietario/quiero-arrendar',
      },
    ],
  },
  {
    id: 3,
    name: 'Servicios',
    children: [
      {
        id: 1,
        name: 'Compra instantanea',
        href: '/servicios/compra-instantanea',
      },
      {
        id: 2,
        name: 'Renovación total',
        href: '/servicios/renovacion-total',
      },
      {
        id: 3,
        name: 'Capitalizarme',
        href: '/servicios/capitalizarme',
      },
      {
        id: 4,
        name: 'Unidades en remate',
        href: '/servicios/unidades-en-remate',
      },
    ],
  },
  {
    id: 5,
    name: '¿Eres corredor?',
    children: [
      {
        id: 1,
        name: 'Asociate',
        href: '/eres-corredor/asociate',
      },
      // {
      //   id: 2,
      //   name: 'Servicios legales',
      //   href: '/eres-corredor/servicios-legales',
      // },
      {
        id: 3,
        name: 'Academia Unne',
        href: '/eres-corredor/academia-unne',
      },
    ],
  },
  {
    id: 6,
    name: 'Mi cuenta',
    href: 'https://unnecorredores.cl/intranet.asp',
  },
];
