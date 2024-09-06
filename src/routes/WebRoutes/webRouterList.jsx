import Home from "../../views/Web/Home/Home";
import Menu from "../../views/Web/Menu/Menu";
import Gallery from "../../views/Web/Gallery/Gallery";
import Facilities from "../../views/Web/Facilities/Facilities";
import ContactUs from "../../views/Web/ContactUs/ContactUs";


export const webRouterList = [
    { path: '', Component: Home },
    { path: 'menu', Component: Menu },
    { path: 'gallery', Component: Gallery },
    { path: 'facilities', Component: Facilities },
    { path: 'contact', Component: ContactUs },
];
