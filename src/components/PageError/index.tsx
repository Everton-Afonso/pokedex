import { Link } from "react-router-dom";

import bannerPageErrorDesk from "../assets/img/banner-page-error-desk.png";
import bannerPageErrorTablet from "../assets/img/banner-page-error-tablet.png";
import bannerPageErrorMobile from "../assets/img/banner-page-error-mobile.png";

import "./styles.scss";

const PageError = () => {
  return (
    <section className="page-error__container">
      <div className="page-error__img">
        <h1>404</h1>
        <picture className="home-error">
          <source media="(min-width: 1026px)" srcSet={bannerPageErrorDesk} />
          <source media="(min-width: 768px)" srcSet={bannerPageErrorTablet} />

          <img src={bannerPageErrorMobile} alt="Banner Page error" />
        </picture>
      </div>

      <div className="page-error__info">
        <p>
          The rocket team <span>has won this time.</span>
        </p>
        <Link className="btn-pokemon" to="/">
          Return
        </Link>
      </div>
    </section>
  );
};

export default PageError;
