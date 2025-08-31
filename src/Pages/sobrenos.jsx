function sobrenos() {
  return (
    <main>
      <div className="container-fluid py-4" style={{ maxWidth: "1300px" }}>
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-center">
              <strong>Apresentação da iniciativa</strong>
            </h2>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/9q98OHu-eO8?si=KjQPh3hmi5e9GDnt"
                title="Apresentação_Pitch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-center">
              <strong>Navegação do Site</strong>
            </h2>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/AZmNPcJnd1g?si=FbYwnMRhTMH_L93O"
                title="Site_Pitch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default sobrenos;