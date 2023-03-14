import "./Card.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import profilePic from "../../assets/ITSTEATV.png";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} className="img"></img>
      <span>About Me</span>
      <p className="info">
        Itsteatv, I'm junior web developer and currently I'm learning React js.
        <br></br>
        I always like to share my <a href="https://github.com/itsteatv?tab=repositories" target={"_blank"}>projects</a> with everyone so don't forget to check out my Github 
      </p>
      <SocialMedia />
    </div>
  );
}

export default Card;
