import React from "react";
//ASSETS
import homepageBackground from "../../assets/img/homepageBackground.png";
import tvImg from "../../assets/img/tv.png";
import tvVideo from "../../assets/videos/video-tv.m4v";
import mobileImg from "../../assets/img/mobile.jpg";
import tvVideo2 from "../../assets/videos/video-devices.m4v";

const Homepage = () => {
  return (
    <div>
      <div className="homepage__backgroundCover">
        <img src={homepageBackground} alt="background-film-cover" />
      </div>
      <div className="homepage__articles">
        <div className="homepage__text">
          <h1>Retrouver les plus grands films.</h1>{" "}
          <h2>
            Plus de 8000 films a retrouver et a partager en famille sur votre
            Smart TV, Playstation, XBox, Tablette ou ordinateur
          </h2>
        </div>

        <div className="homepage__mediaContainer">
          {" "}
          <div className="homepage__imgContainer">
            <img src={tvImg} alt="tv with video" />{" "}
            <video autoPlay loop playsInline muted>
              <source src={tvVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="homepage__articles">
        <div className="homepage__mediaContainer">
          {" "}
          <div className="homepage__imgContainer">
            <img src={mobileImg} alt="tv with video" />
          </div>
        </div>
        <div className="homepage__text">
          <h1>Ajouter vos favoris.</h1>
          <h2>
            {" "}
            Une fois votre compte crée Vous pouvez ajouter ou supprimer des
            films a volonté a vos favoris afin de toujours retrouver vos
            meilleurs experiences cinématographiques.
          </h2>
        </div>
      </div>
      <div className="homepage__articles">
        <div className="homepage__text">
          <h1>Donner votre avis</h1>
          <h2>
            Partager avec une communauté de passionés vos commentaires a propos
            des films qui vous ont emus, decus, surpris, envoutés...
          </h2>
        </div>
        <div className="homepage__mediaContainer">
          {" "}
          <div className="homepage__imgContainer">
            <img src={tvImg} alt="tv with video" />{" "}
            <video autoPlay loop playsInline muted>
              <source src={tvVideo2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
