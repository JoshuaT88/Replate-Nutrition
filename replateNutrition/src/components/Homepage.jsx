import image from '../assets/react.svg'

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

      <div className="appInsightContainer">
        <div className="profileInsights">
          <span className="insightTitle"><i className="fa-solid fa-user-group" /> Recent Profiles</span>
          <div className="profileDetails">
             <div className="user-avatar">
                <img src={image} alt="User" />
            </div>
            <div className="detailsContainer">
              <span className="detailTitle">Test</span>
              <p className="detailType">Human</p>
            </div>
          </div>
          <div className="profileDetails">
             <div className="user-avatar">
                  <img src={image} alt="User" />
            </div>
            <span className="detailTitle">Test again</span>
            <p className="detailType">Pet</p>
          </div>
        </div>

        <div className="quickTips">
          <span className="insightTitle"><i className="fa-solid fa-person-circle-question" /> Quick Tips</span>
          <div className="tipsDetails">
            <ul className="tipsList">
              <li className="tipsItem">test testestestestestestestestestestes</li>
              <li className="tipsItem">test testestestestestestestestestestes</li>
              <li className="tipsItem">test testestestestestestestestestestes</li>
              <li className="tipsItem">test testestestestestestestestestestes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}