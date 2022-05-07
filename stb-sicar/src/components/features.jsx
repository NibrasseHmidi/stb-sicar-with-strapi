export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Nos chiffres clés</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <p>{d.title}</p>
                  
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
