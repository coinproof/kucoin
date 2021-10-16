import React from "react";
import { NavLink } from "react-router-dom";
import Pie from "./imges/pie.png";
import Benefit from "./imges/benefits.png";
import Img1 from "./imges/img1.jpg";
import Pie2 from "./imges/pie2.png";
import Img2 from "./imges/img2.jpg";


const Home = () => {
    return (
        <>
        <section id="top-header">
        <div className="container-fluid" >
        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center flex-column">
                                <div className="but">            <li className="nav-button">
                                            <NavLink className="nav-link" to="/contract">Kukongs:0 KCS:0</NavLink>
                                        </li></div>
                                            
                                </div>
                                </div>
                                </div>
                                </div>
        </section>
        {/* ---------------header--------------------------------------------------------------------------------------------------------------------- */}
           <section id="header" className="d-flex align-items-center" style={{marginLeft:"190px"}}>
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex align-items-center flex-column">
                                <h1>
                                    BRINGING ORIGINAL<br /> AVATAR NFTS TO THE <br />
                                     <strong className="brand-name">KUCOIN COMMUNITY</strong></h1>
                                
                                <div className="mt-10">
                                    <NavLink to="/" className="btn-get-started">GET A KONG NOW</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={Img1} className="img-fluid animated" alt="Home img" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About section------------------------------------------------------------------------------------------- */}
            <section id="body" className="d-flex align-items-center">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
    <div className="col-3"><img src={Img2} className="img-fluid animated" alt="Home img" /></div>
    <div className="col-7"><h2>ABOUT KUCOIN KONGS</h2>
    <p className="about-text">The KuCoin Kongs Community consists of 10,000 randomly generated KUCOIN 
Kongs living on the KuCoin Communinty chain network. KUCOIN Kongs can be found 
with a variety of different backgrounds, outfits, and facial expressions, as well as 
several accessories like glasses, headgears, earings and appendages, all of which 
possess varying levels of rarity that determine the probability of which KuKong is 
minted to each buyer, but no two KUCOIN Kongs are alike. The aim of the 
KucoinKong project is to raise funding and instatiate a community owned graphic art 
collectible market place, with suopport for trading of gaming inventory, and support 
the ongoinng research and development of a collective resource management and 
descision making system from DEXENTRIC DAO.</p>
<div className="mt-30">
                                    <NavLink to="/" className="learn-more">Learn More</NavLink>
                                </div>
    </div>
  </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Benefit section-------------------------------------------------------------------------------- */}
            <section id="body2" className="d-flex align-items-center">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div class="row">
        <div class="col">
        <img src={Benefit} className="img-fluid animated" alt="Home img" />
    </div>
    <div className="col">
      <h2>BENEFITS</h2>
      <h3>Unlimited Earnings</h3>
      <p className="benefit-text"> Owners of Kucoinkong NFTs will be 
rewarded with a share of 50% of 
transaction fees charge to users of the 
Konglectible market place, paid 

to them in directly to their wallet addresses 
on the Kucoin Network in kukongmart tokens 
($kkmt)</p>
<h3 style={{marginTop:"110px"}}>Earn Royalties from KuKong Sales</h3>
      <p className="benefit-text"> If you decide to sell your Kukong for any reason, you can still benefit 
from a 2% royalty fee paid to you any time that Kukong is resold on the 
Konglectible marketplace</p>
    </div>
    <div className="col">
     <h3 className="about-2">KuKong token Airdrop</h3>
     <p className="benefit-text">20% of the total supply of the Kukongmart 
tokens will be airdroped to all owners of 
Kucoinkongs. Each owner will recieve an airdrop 
amount of KuKongMart Tokens ($KKMT) that 
depends on both the number of KuKongs they 
own, and the average rarity score attributed to 
their entire colllection</p>

<h3>DexentricDAO Voting authorization</h3>
      <p className="benefit-text"> As an additional Incentive for owning KucoinKong NFTs, owners of 
kukongs will be eligble for automatic aqusition of voting reputation at 
completion and deployment of dexentricDAO s collective descision 
making system currently in its development phase, to be utilized for 
management of all shared resouces on the blockchain</p>      
    </div>
    </div>
    
  
                        </div>
                    </div>
                </div>
            </section>
            {/* Tokenomics----------------------------------------------------------------------------------------------- */}
            <section id="tokenomics" className="d-grid align-items-center">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                         <div className="row">
    <div className="col-5"><h3>TOKENOMICS</h3>
    <img src={Pie} className="img-fluid" alt="Home img" />
    <h4>KucoinKong nft collection
sales distribution</h4>
    <p>10%-- Dexentric DAO Foundation

15%-- Graphics and development team contribution
reward

7.5%-- Marketing and promotion reserve

2.5%-- contract maintainance

15%--- Kukong Owners Airdrop

20%-- KukongMart Marketplace prototype budget

30% -- KukongMart Token liuidity on Kuswap


</p>
    </div>
        <div className="col-5">
                 <img src={Pie2} className="img-fluid2" alt="Home img" />
            <h4>KuKongMart Token Proposed
Allocation</h4>
        <p>5% Dexentric Foundation
5% Development Team
5% Marketing
5% Graphics Team
15% Kukong Owners Airdrop
5% Binance Smartchain Liquidity sale
5% Project Administration
15% Ongoing Partnerships and Centralized
Exchange Reserve
15% Kuswap Liquidity

10% Farming Allocation

15% Community Promotion Reserve
10%Pancake swap Bsc Liquidity</p></div>
  </div>

</div>
</div>
</div>
            </section>
        </>
    )
};

export default Home;