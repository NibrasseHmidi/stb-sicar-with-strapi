export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className=' section-title'>
          <h2 style={{color:"#1f386e"}}>Nos partenaires</h2>
          <p>
            
          </p>
        </div>
 
        <div id='column' style={{display:'flex'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} >
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                     
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
