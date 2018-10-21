// export a navigation component (use react-router-dom)
import React from "react";
import { Link } from "react-router-dom";
import SITE_PATHS from "../../enums/site-paths";
import styles from "./navigation.module.scss";

const Navigation = () => (
  <nav>
    <ul className={styles.headerNav}>
      <li>
        <Link to={SITE_PATHS.HOME}>Home</Link>
      </li>
      <li>
        <Link to={SITE_PATHS.MODELER}>Modeler</Link>
      </li>
      <li>
        <Link to={SITE_PATHS.OPTIONAL_PAGE}>Optional Page</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
