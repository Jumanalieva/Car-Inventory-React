import Home from '../pages/Home';
import Vehicles from '../pages/Vehicles';
import Services from '../pages/Services';
import AboutUs from '../pages/About.tsx';
import Contact from '../pages/Contact.tsx';

interface RouteType {
  path: string,
  component:  React.ComponentType<any>;
  name: string 
}

const routes: RouteType[] = [
    {
      path: "/",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/dashboard",
      component: Contact,
      name: "Contact",
    },
    {
      path: "/services",
      component: Services,
      name: "Services",
    },
    {
      path: "/vehicles",
      component: Vehicles,
      name: "Vehicles",
    },
    {
      path: "/aboutus",
      component: AboutUs,
      name: "AboutUs",
    }
];

export default routes