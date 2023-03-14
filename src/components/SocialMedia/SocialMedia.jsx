import "./SocialMedia.css";
import Instagram from "../Svg/Instagram";
import Github from "../Svg/Github";
import Discord from "../Svg/Discord";

function SocialMedia() {
  return (
    <div className="social-links">

      <div id="instagram" className="social-btn">
        <Instagram />
        <span> <a href="https://www.instagram.com/itsteatv/" target={"_blank"} className="link">itsteatv</a> </span>
      </div>

      <div id="discord" className="social-btn">
        <Discord />
        <span> <a className="link-discord">itsteatv#7410</a> </span>
      </div>

      <div id="github" className="social-btn">
          <Github />
        <span> <a href="https://github.com/itsteatv" target={"_blank"} className="link">itsteatv</a> </span>
      </div>
    </div>
  );
}

export default SocialMedia;
