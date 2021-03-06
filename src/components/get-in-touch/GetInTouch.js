import React from "react";

export const GetInTouch = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider my-4" />
            <p className="text-muted mb-5">
              Ready to start your next project with me? Give me a call or send
              me an email and I will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0 d-flex flex-column justify-content-center">
            <i className="fas fa-phone fa-3x mb-3 text-muted" />
            <a href="tel:07864324015">Tel: 07864324015</a>
          </div>
          <div className="col-lg-4 mr-auto text-center mb-5 mb-lg-0 d-flex flex-column justify-content-center">
            <i className="fas fa-envelope fa-3x mb-3 text-muted" />
            <a className="d-block" href="mailto:ls.interiors.contact@gmail.com">
              ls.interiors.contact@gmail.com
            </a>
          </div>
          <div className="col-lg-4 mr-auto text-center d-flex flex-column justify-content-center">
            <i className="fab fa-facebook fa-3x mb-3 text-muted" />
            <a
              className="d-block"
              href="https://www.facebook.com/LS-Interiors-1591384234508819/"
              target="_blank"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
