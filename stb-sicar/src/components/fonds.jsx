import React from "react";
// import "./Fonds.css";

export const Fond = () => {
  return (
    <div id="fonds" className="fonds-section">
      <div id="fond">
        <div className="section-title">
            <h2>NOS INVESTISSEURS</h2>
        </div>
          <div className="nos-invs">
            <img src="img/team/STB_BANK.png" alt="STB BANK" />
            <img src="img/team/Banque_Euro.png" alt="Banque Euro" />
            <img src="img/team/STB_INVEST.jpg" alt="STB Invest" />
            <img src="img/team/FOPRODI.jpg" alt="FOPRODI" />
          </div>
      </div>
      <div id="fisc">
        <div className="section-title">
          <h3>OPTIMISEZ VOTRE FISCALITE</h3>
        </div>
        <div className="l-container">
          <div className="avac">
            <div className="fond-card box">
                <p>Déduction totale sur la base d'un engagement de la STB SICAR d'employer 75% de montant déposés dans des ZDR ou agricole</p>
            </div>
            <h3>
              35% des revenus ou bénéfices imposables avec minimum d'impôt{" "}
            </h3>
          </div>
          <div className="avac">
                <div className="fond-card box">
                <p>Déduction des revenus ou bénéfices réinvestis auprès de la STB SICAR ,sur la base d'un engagement d'emploi de 65% dabs des projets définis par la règlementation</p>
            </div>
            <h3>
              100% des revenus ou bénéfices imposables sans minimum d'impôt
            </h3>
          </div>
        </div>
      </div>
      <div className="wrapper">
      <div className="card box">
        <div className="info">
          <h2>Délai</h2>
          <p>-	Les investisseurs bénéficient de l’avantage fiscal l’année de libération du fonds.</p>
          <p>-	Néanmoins l’obligation d’utilisation des montants déposés est de 2 ans à partir de l’année de libération.</p>
        </div>
      </div>
      <div className="card box">
        
        <div className="info">
          <h2>Blocage des fonds</h2>
          <p>-	Le fonds géré est bloqué auprès de la STB SICAR pendant cinq ans à partir du 1er janvier de l’année qui suit celle du dépôt des fonds.</p>
          
        </div>
      </div>
      <div className="card box">
        
        <div className="info">
          <h2>Rémunération</h2>
          <p>-	De la rémunération des fonds à des conditions très avantageuses jusqu’à leur utilisation dans des projets ayant obtenu au préalable son accord de participation.</p>
          <p>-	Du produit des intérêts des OCA/CCA souscrits.</p>
          <p>-	Des revenus du portefeuille d’investissement.</p>
          <p>-	Des dividendes distribués.</p>
        </div>
      </div>
      <div className="card box">
        
        <div className="info">
          <h2>Autre avantage</h2>
          <p>-	Est déductible du bénéfice imposable, la plus-value de cession d’actions et des parts sociales réalisées.</p>
          
        </div>
      </div>
    </div>
    </div>
  );
};