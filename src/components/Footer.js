import "../components/styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <h2> Check out our socials!</h2>
      </div>
      <a href="https://www.facebook.com">
        <img
          className="footer-logos"
          src={require("../components/images/Facebook_icon.svg.webp")}
          alt="facebooklogo"
        />
      </a>
      <a href="https://www.instagram.com">
        <img
          className="footer-logos"
          src={require("../components/images/Instagram_logo_2016.svg.webp")}
          alt="instagramlogo"
        />
      </a>
      <a href="https://www.twitter.com">
        <img
          className="footer-logos"
          src={require("../components/images/Twitter-logo.svg.png")}
          alt="twitterlogo"
        />
      </a>
      <p className="copyright">© 2022 TasteTheWaste</p>
    </div>
  );
};

export default Footer;
