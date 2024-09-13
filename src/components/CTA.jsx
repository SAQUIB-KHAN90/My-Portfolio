import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <>
      <section className="cta">
        <p className="cta-text">
          Have a project in mind? <br className="sm:block hidden" />
          Let’s build something together!
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
        <div className="social-links-wrapper">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={social.iconUrl}
                alt={social.name}
                className="social-icon"
              />
              {social.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default CTA;
