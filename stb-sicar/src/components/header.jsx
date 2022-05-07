//import gql
import {useQuery,gql} from '@apollo/client'
//get query
const ABOUTQUERY = gql`

query AboutQuery {
  aboutUs {
    data {
      attributes {
        title
        paragraph
      }
    }
  }
}
`
export const Header = () => {
  const {loading,error,data}=useQuery(ABOUTQUERY)
  
  if(loading) return <p>loading...</p>
  if(error) return <p>Erorr ...</p>
const aboutData=data.aboutUs.data.attributes

  return (
    <header id='header'>
      <div className='intro'>
      <video src="./assets/stb1.mp4" autoPlay muted loop />
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  { aboutData.title}
                  <span></span>
                </h1>
                <p>{aboutData.paragraph }</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
