import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./pages/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import Modeler from "./pages/Modeler/Modeler";
import OptionalPage from "./pages/OptionalPage/OptionalPage";
import SITE_PATHS from "./enums/site-paths";

export default () => (
  <div>
    <Navigation />
    <hr />
    <Switch>
      <Route exact path={SITE_PATHS.HOME} component={HomePage} />
      <Route path={SITE_PATHS.MODELER} component={Modeler} />
      <Route path={SITE_PATHS.OPTIONAL_PAGE} component={OptionalPage} />
      {/* Could also include the below, but it wasn't in the requirements:
       *   <Route component={404}/>
       */}
    </Switch>
  </div>
);
