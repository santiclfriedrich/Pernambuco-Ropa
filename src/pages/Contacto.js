import Container from '@mui/material/Container';
import './Contacto.css'

const ContactPage = () => {
    return(
        <Container className='container-general'> 
        <h1 style={{textAlign: 'center'}}>Contacto</h1>

        <div className='contact-text'>
          <p>
            <strong>Consultas</strong>
          </p>
          <p>
            INFO@PERNAMBUCO.COM
          </p>
          <p>
            <strong>Venta Mayorista</strong>
          </p>
          <p>
            ESTEBAN@PERNAMBUCO.COM
          </p>
          <p>
            <strong>Venta Online</strong>
          </p>
          <p>
            VENTAONLINE@PERNAMBUCO.COM
          </p>
          <div className='contact-info'>
          <p>
            <strong>Pernambuco - Palermo 2027 - CP 1414</strong>
          </p>
          <p>
            <strong>Buenos Aires, Argentina</strong>
          </p>
          <p>
            <strong>Lunes a Sábados de 9 a 18hs</strong>
          </p>
          </div>
        </div>
      </Container>
    )
}

export default ContactPage;