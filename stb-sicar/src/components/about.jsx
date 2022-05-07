import {useQuery,gql} from '@apollo/client'
const CONNAITREQUERY = gql`
query ConnaitreQuery {
  connaitre {
    data {
      attributes {
        paragraph
        intervention
        investissement
      }
    }
  }
}

`
export const About = () => {
  const {loading,error,data}=useQuery(CONNAITREQUERY)
  
  if(loading) return <p>loading...</p>
  if(error) return <p>Erorr ...</p>
const connaitreData=data.connaitre.data.attributes
  return (
    <div id="about">
      <div className="container">
      <div className='section-title'>
          <h2>Présentation STB SICAR</h2>
        </div>
  
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/1.jpeg" className="img-responsive" alt="" />{" "}
          </div>
         
          <div className="col-xs-12 col-md-6">
         
            <div className="about-text">
            
              <p>{connaitreData.paragraph }</p>
              <h3>Principes d’investissement</h3> 
              <div className="list-style">
                <div className="col-lg-12 col-sm-6 col-xs-12">
                  <ul>
                    { connaitreData.investissement.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      }
                  </ul>
                </div>
                <h3>Modes d’intervention</h3> 
                <div className="col-lg-12 col-sm-6 col-xs-12">
                  <ul>
                    {connaitreData.intervention.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
