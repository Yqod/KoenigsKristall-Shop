function Home() {
  return (
    <div className="homeMain">
      <div className="heroSection">
        <div className="heroOverlay">
          <h1 className="heroTitle">Tauche ein in die Welt der Kristalle</h1>
          <p className="heroSubtitle">Entdecke dich selbst</p>
        </div>
      </div>
      <div className="homeInfo">
       <div className="homeContainer1">
        <p className="homeInfoP1">Persönliche Kristallberatung</p>
        <img src="images/berater.png" alt="Beratung"></img>
       </div>
       <div className="homeContainer2">
        <p className="homeInfoP2">Kristall Shop</p>
        <img src="images/shopLogo.png" alt="Shop"></img>
       </div>
       <div className="homeContainer3">
        <p className="homeInfoP3">Kristallbibliothek</p>
        <img src="images/bibliothek.png" alt="Bibliothek"></img>
       </div>
      </div>
    </div>
  );
}
export default Home;