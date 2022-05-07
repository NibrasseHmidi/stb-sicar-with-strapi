export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>UN ÉTAT D'ESPRIT</h2>
          <p>
          Nous plaçons la confiance comme valeur fondamentale d’un partenariat gagnant
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <img alt='' src={d.img}/>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
        <div style={{margin:10}}  className='section-title '>
        <p>
        Notre valeur ajoutée
          </p>
          </div>
           <div className='row'>
        <div className="col-md-8 col-md-offset-2">
                  <img width="210"  alt='' src="img/services/val2.png"/>
                  <div className='service-desc'>
                  
                    <p >L’accompagnement des participations est une pierre angulaire du positionnement de la STB SICAR et un marqueur fort de sa stratégie. Notre expérience montre qu’en apportant des ressources et des compétences complémentaires à celles des équipes dirigeantes, nous pouvons contribuer significativement à la création de valeur stratégique de l’entreprise, tant sur le plan économique que social.</p>
                  </div>
                </div>
               
                </div>
         
      </div>
    </div>
  )
}
