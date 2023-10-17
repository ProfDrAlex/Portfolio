// routesConfig.js
import Home from '../../pages/Home/Home';
import Lebenslauf from '../../pages/Lebenslauf/Lebenslauf';
import FAQ from '../../pages/FAQ/FAQ';
import Kontakt from '../../pages/Contact/Kontakt';

export const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/lebenslauf', name: 'Lebenslauf', component: Lebenslauf },
    { path: '/faq', name: 'FAQ', component: FAQ },
    { path: '/kontakt', name: 'Kontakt', component: Kontakt },
];
