import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";

const Spotify = () => {
  return (
    <MacWindow id="spotify" dimensions={{ width: "40vw", height: "63vh", x: 900, y: 200 }} windowTitle="Spotify">
      <div className="spotify-window">
        <iframe
          data-testid={"embed-iframe"}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdpQPPZq3F7n?utm_source=generator&theme=0&si=9bd8ca2606734868"
          frameBorder={0}
          allowfullscreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
