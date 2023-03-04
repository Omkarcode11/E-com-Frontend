import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Rajdhani Garments
                </h6>
                <p>
                  We are providing you best Clothe in best Price we have also monthly sale to more info Contact us link
                  below
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <Link to="/category/search/all"> All</Link>
                </p>
                <p>
                  <Link to="/category/search/1" className="text-reset">
                    Men
                  </Link>
                </p>
                <p>
                  <Link to="/category/search/2" className="text-reset">
                    Women
                  </Link>
                </p>
                <p>
                  <Link to="/category/search/3" className="text-reset">
                    Kids
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="https://www.instagram.com/_omkar_sonawane/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-reset"
                  >
                    Instagram
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/omkar.sonawne.98/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-reset"
                  >
                    FaceBook
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/omkar.sonawne.98/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-reset"
                  >
                    Address
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/_omkar_sonawane/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-reset"
                  >
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Malegaon Camp near Akatmka Chauk
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  omkarsonawaneomakr2@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> +918208747270
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> +919850170205
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="/">
            Rajdhani.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
