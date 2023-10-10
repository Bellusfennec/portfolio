import Container from "../container";

const Portfolio = () => {
  return (
    <section id="page-1" className="section__full">
      <Container>
        <h2 className="title">
          <span>Моё портфолио</span>
        </h2>
        <div className="portfolio">
          <div className="portfolio_item">
            <div className="portfolio_gallery">
              <a target="_blank" href="">
                <img src="" alt="" />
              </a>
            </div>
          </div>
          <div className="portfolio_item">
            <div className="portfolio_gallery">
              <a target="_blank" href="">
                <img src="" alt="" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
