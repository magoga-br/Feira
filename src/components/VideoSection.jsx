// src/components/VideoSection.jsx
import React from "react";

function VideoSection() {
  return (
    <div className="hero3 text-center text-white">
      <div className="container py-5">
        <h2 className="video-title mb-4">
          <i className="bi bi-camera-video-fill"></i> Nosso Pitch Vídeo
        </h2>
        <p className="video-text mb-4">
          Confira o vídeo oficial do nosso projeto, onde apresentamos a nova funcionalidade e a aplicação do React na plataforma Feira, desenvolvida no Sprint 5.
        </p>
        <a
          href="https://www.youtube.com/watch?v=ki0R1xxwcfE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn3"
        >
          Assista ao Vídeo no YouTube
        </a>
      </div>
    </div>
  );
}

export default VideoSection;
