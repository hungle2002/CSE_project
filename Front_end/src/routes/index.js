import Home from "../pages/Home";
import Sercurity from "../pages/Sercurity";
import Statistic from "../pages/Statistic";
import Mode from "../pages/Mode";
import Setting from "../pages/Setting";
import config from "../config";
const puplicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    title: "Farm information",
  },
  {
    path: config.routes.sercurity,
    component: Sercurity,
    title: "Farm sercurity",
  },
  {
    path: config.routes.statistic,
    component: Statistic,
    title: "Farm statistic",
  },
  {
    path: config.routes.mode,
    component: Mode,
    title: "Farm mode",
  },
  {
    path: config.routes.setting,
    component: Setting,
    title: "Farm setting",
  },
];

const privateRoutes = [];

export { puplicRoutes, privateRoutes };
