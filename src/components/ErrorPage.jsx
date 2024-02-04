import { useRouteError, Link } from "react-router-dom";
import Footer from "./Footer";
import NavbarLanus from "./NavbarLanus";
import { Row, Col } from 'react-bootstrap'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error contenedor-general">
      <NavbarLanus />

      <Row className="row-e">
        <Col>
          <h1>Error (404): Página no encontrada.</h1>
          <Link to={`/`} className="volver">Volver al inicio</Link>

        </Col>
      </Row>

      <Footer />
    </div>
  );
}