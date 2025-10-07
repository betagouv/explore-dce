import { HomePage }                   from '@src/pages/HomePage';
import { NotFound }                   from '@src/pages/NotFound';
import { Route }                      from '@src/types/navigation';
import { Accessibilite }              from '@src/pages/Accessibilite';

export const ROUTES: Route[] = [
  { // page d'acceuil
    id:        0,
    path:      '/',
    name:      '',
    navigation_name: '',
    description: null,
    is_active: true,
    condition: true,
    isPrivate: false,
    element:   <HomePage />,
  },
  { // page d'accessibilité
    id:        1,
    path:      '/accessibilite',
    name:      'Accessibilité',
    navigation_name: 'accessibilite',
    description: null,
    is_active: true,
    condition: true,
    isPrivate: false,
    element:   <Accessibilite />,
  },
  { // pages non trouvées
    id:        2,
    path:      '*',
    name:      '',
    navigation_name: '',
    description: null,
    is_active: true,
    condition: true,
    isPrivate: false,
    element:   <NotFound />,
  },
];

export default ROUTES;
