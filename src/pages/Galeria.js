import Container from '@mui/material/Container';
import './Galeria.css'

const GalleryPage = () => {
    return(
        <Container className='container-general'> 
        <h1 style={{textAlign: 'center'}}>Galeria</h1>

        <p style={{textAlign: 'center'}}>Santiago Friedrich</p>
        <div className='portfolio'>
          <div className='galeria'>
            <div className='galeria_img'>
              <img src="galeria1.jpg"
              className="img-galeria1"
              />
            </div>
            <div className='galeria_img'>
              <img src="galeria2.jpg"
              className="img-galeria2"
              />
            </div>
            <p style={{textAlign: 'center'}}>Esteban Floj</p>
            <div className='galeria_img'>
              <img src="galeria3.jpg"
              className="img-galeria3"
              />
            </div>
            <div className='galeria_img'>
              <img src="galeria4.jpg"
              className="img-galeria4"
              />
            </div>
            <div className='galeria_img'>
              <img src="galeria5.jpg"
              className="img-galeria5"
              />
            </div>
          </div>
        </div>
      </Container>
    )
}

export default GalleryPage;