import React, { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

export const Responsabilite = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id='responsabilite' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>RESPONSABILITÉ SOCIALE</h2>
          <h1>Notre politique interne</h1>
          <p>
            Nous permettons à nos collaborateurs de grandir au sein de STB SICAR,
        aussi bien professionnellement que personnellement. Nous veillons à
        l’égalité entre tous et à l’accomplissement de chacun.
          </p>
        </div>
        <h3>En Bref</h3>
        <div className='row'>
          <div className="Bref">
            <div data-aos="fade-up" className="circle one">
          <p>Renforcer nos engagements pour l'égalité femmes-hommes</p>
        </div>
        <div data-aos="fade-up" className="circle two">
          <p>
            Accompagner nos collaborateurs pour faire évoluer leurs compétences
          </p>
        </div>
        <div data-aos="fade-up" className="circle three">
          <p>
            Offrir à nos collaborateurs une qualité de vie au travail optimale
          </p>
        </div>
        </div>
        </div>
        <div className='section-title'>
        <h1>Pour nos participations</h1>
      <p>
        Nous sommes conscients de la nécessité de prendre en considération les
        critères environnementaux, sociaux et de qualité de gouvernance (ESG)
        dans la politique d’investissement. Ainsi, nous avons établi une charte
        ESG.
      </p>
      <p>
        Nous sommes également très attachés à la qualité de l’approche et à la
        politique mise en œuvre par nos participations en ce qui concerne le
        respect de l’environnement et la gestion des ressources humaines. Pour
        ce faire, un questionnaire a été envoyé aux sociétés financées. Il
        s’appuie sur un socle commun comprenant des indicateurs quantitatifs
        portant sur les 3 grands thèmes ESG prioritaires de la STB SICAR.{" "}
      </p>
        </div>
      <div className="Bref">
        <div data-aos="fade-up" className="circle four">
          <p>Gouvernance</p>
        </div>
        <div data-aos="fade-up" className="circle five">
          <p>Volet social</p>
        </div>
        <div data-aos="fade-up" className="circle six">
          <p>Environnement</p>
        </div>
      </div>
      
      <p>Ce questionnaire sera envoyé annuellement.</p>
      </div>
    </div>
  )
}