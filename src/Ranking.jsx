import React from "react";
import { NavLink } from "react-router-dom";
import Img from "./imges/rank.png";
import Img1 from "./imges/monkey.png";
import Roadimg from "./imges/roadimg.png";

function Ranking() {
  return (
    <>
      <section id="ranking" className="d-grid align-items-center" >
        <div className="container-fluid-1 " style={{marginLeft:"190px"}}>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-5 mt-5 ml-5">
                  <img
                    src={Img}
                    className="img-fluid animated"
                    alt="Home img"
                    style={{width:"400px",height:"300px"}}
                  />
                   <br/>
                   <br/>
                   <br/>

                  <div>
                  <h2>RARITY RANKING</h2>
                  <br/>
                    <img
                      src={Img1}
                      className="img-fluid animated"
                      alt="Home img"
                    />
                  </div>
                </div>
                <div className="col-5 mt-5">
                  <h3>0/10,000</h3>
                  <h2>KUKONGS MINTED</h2>
                  <div className="mt-30">
                   <button className="button"><NavLink to="/" className="learn-more">
                      Learn More
                    </NavLink>
                    </button>
                  </div>
                  <p className="benefit-text">
                    The KuCoin Kongs Community consists of 10,000 randomly
                    generated KUCOIN Kongs living on the KuCoin Communinty chain
                    network. KUCOIN Kongs can be found with a variety of
                    different backgrounds, outfits, and facial expressions, as
                    well as several accessories like glasses, headgears, earings
                    and appendages, all of which possess varying levels of
                    rarity that determine the probability of which KuKong is
                    minted to each buyer, but no two KUCOIN Kongs are alike. 
                    <br/>
                    <br/>
                    The aim of the KucoinKong project is to raise funding and
                    instatiate a community owned graphic art collectible market
                    place, with suopport for trading of gaming inventory, and
                    support the ongoinng research and development of a
                    collective resource management and descision making system
                    from DEXENTRIC DAO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

             </section>
             {/* ---------------------------Roadmap-------------------------------------------------------------------------- */}
             <section id="roadmap" className="d-grid align-items-center">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                         <div className="row">
    <div className="col-5"><h3>ROADMAP</h3>
    
    <h4>25% Minted`1</h4>
    <p>Development of kukong display gallery with ranking and 
rerity calculator!
</p>
<h4>50% Minted`1</h4>
    <p>Launch of kucoin Kong gallery and ranking calculator


Kukong community instantiation and team administrative 
team selection
</p>
<h4>70% Minted`1</h4>
    <p>Developement and testing of Konglectible NFT market 
place for minting and trading
</p>
<h4>100% Minted`1</h4>
    <p>Deployment of Kongllectible NFT market place on mainnet
    Marketing campaings
Parteners mobilization Airdrop
Kukong holders Airdrop
Initial users minting promotions
kukongMart KCS Lp deployment
</p>
<button className="button"><NavLink to="/" className="learn-more">
                      Find Out More
                    </NavLink>
                    </button>

    </div>
        <div className="col-5 align-items-center">
                 <img src={Roadimg} className="img-fluid2" alt="Home img" />
            </div>
  </div>

</div>
</div>
</div>
            </section>
    </>
  );
}

export default Ranking;
