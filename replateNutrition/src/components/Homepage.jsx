export default function Homepage() {
  return (
    <div className="homepage">
      <div className="card-grid">
        <div className="card">
          <div className="cardTop">
            <span className="cardTitle">ACTIVE PROFILES</span>
            <div className="iconWrapper blue">
              <i className="fa-solid fa-user-group" />
            </div>
          </div>
          <div className="cardCounter">2</div>
        </div>

        <div className="card">
          <div className="cardTop">
            <span className="cardTitle">SHOPPING ITEMS</span>
            <div className="iconWrapper purple">
              <i className="fa-solid fa-cart-shopping" />
            </div>
          </div>
          <div className="cardCounter">1</div>
        </div>

        <div className="card">
          <div className="cardTop">
            <span className="cardTitle">TODAY'S MEALS</span>
            <div className="iconWrapper orange">
              <i className="fa-solid fa-calendar" />
            </div>
          </div>
          <div className="cardCounter">3</div>
        </div>
      </div>
    </div>
  );
}