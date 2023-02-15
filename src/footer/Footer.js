import "./footer.css";

const Footer = () => {
  return (
    <div class="container-fluid">
      {" "}
      <output class="bg-white shadow-sm" style={{ display: "block" }}>
        <footer class="section-footer border-top">
          <div class="container-fluid">
            <section class="footer-top padding-y">
              <div class="row">
                <aside class="col-md-4">
                  <article class="mr-3">
                    {" "}
                    <img
                      src="https://i.imgur.com/S5Zdt8L.png"
                      class="logo-footer"
                      alt=""
                    />
                    <p class="mt-3 description">
                      Some short text about company like You might remember the
                      Dell computer commercials in which a youth reports this
                      exciting news to his friends.
                    </p>
                    <div>
                      {" "}
                      <a
                        class="btn btn-icon btn-light"
                        title="Facebook"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>{" "}
                      <a
                        class="btn btn-icon btn-light"
                        title="Instagram"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>{" "}
                      <a
                        class="btn btn-icon btn-light"
                        title="Youtube"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i class="fab fa-youtube"></i>
                      </a>{" "}
                      <a
                        class="btn btn-icon btn-light"
                        title="Twitter"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>{" "}
                    </div>
                  </article>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">About</h6>
                  <ul class="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        About us
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Services
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Terms & Condition
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Our Blogs
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">Services</h6>
                  <ul class="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Help center
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Money refund
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Terms and Policy
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Open dispute
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">For users</h6>
                  <ul class="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        {" "}
                        User Login{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        {" "}
                        User register{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        {" "}
                        Account Setting{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        {" "}
                        My Orders{" "}
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-2 col-md-2">
                  <h6 class="title">Our app</h6>{" "}
                  <a href="#" class="d-block mb-2" data-abc="true">
                    <img
                      class="img-responsive"
                      src="https://i.imgur.com/nkZP7fe.png"
                      height="40"
                      alt=""
                    />
                  </a>{" "}
                  <a href="#" class="d-block mb-2" data-abc="true">
                    <img
                      class="img-responsive"
                      src="https://i.imgur.com/47q2YGt.png"
                      height="40"
                      width="123"
                      alt=""
                    />
                  </a>
                </aside>
              </div>
            </section>
            <section class="footer-copyright border-top">
              <p class="float-left text-muted">
                {" "}
                &copy; 2019 Talkdesk All rights resetved{" "}
              </p>
              <p target="_blank" class="float-right text-muted">
                {" "}
                <a href="#" data-abc="true">
                  Privacy &amp; Cookies
                </a>{" "}
                &nbsp; &nbsp;{" "}
                <a href="#" data-abc="true">
                  Accessibility
                </a>{" "}
              </p>
            </section>
          </div>
        </footer>
      </output>{" "}
    </div>
  );
};

export default Footer;
