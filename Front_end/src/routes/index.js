import Home from "../pages/Home";
import Sercurity from "../pages/Sercurity";
import Statistic from "../pages/Statistic";
import Mode from "../pages/Mode";
import Setting from "../pages/Setting";
import routes from "../config/routes";
const puplicRoutes = [
  {
    path: routes.home,
    component: Home,
    title: "Farm information",
  },
  {
    path: routes.sercurity,
    component: Sercurity,
    title: "Farm sercurity",
  },
  {
    path: routes.statistic,
    component: Statistic,
    title: "Farm statistic",
  },
  {
    path: routes.mode,
    component: Mode,
    title: "Farm mode",
  },
  {
    path: routes.setting,
    component: Setting,
    title: "Farm setting",
  },
];

const privateRoutes = [];

export { puplicRoutes, privateRoutes };
