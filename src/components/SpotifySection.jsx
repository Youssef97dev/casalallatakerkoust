import React from "react";

const SpotifySection = () => {
  return (
    <section className="pt-16 text-center">
      <div className="max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-[25px] leading-[32.5px] font-canela text-casa_black">
          Discover our music
        </h2>
      </div>

      <div className="flex justify-center px-4">
        <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-5xl">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/5Qgw5WwwBuGvLiQ3WmkgXH?utm_source=generator"
            width="100%"
            height="200%"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
