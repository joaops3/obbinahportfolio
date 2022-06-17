import profile from "../images/Profile.png";

const Banner = () => {
  return (
    <main className="container main py-3 ">
      <div className="col-12 offset-md-1">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 logo">
            <img
              style={{ borderRadius: "15px" }}
              src={profile}
              alt="ProfileArt"
              width={"100%"}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-6">
            <h3 className="pt-4" style={{fontWeight: "600"}}>Obbinah</h3>
            <p className="texto text">Character artist</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
