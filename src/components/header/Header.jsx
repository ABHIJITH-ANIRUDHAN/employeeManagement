import { Container, Navbar } from "react-bootstrap"

const Header = () => {
  return (
    <header>
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/"><i className="fa-sharp fa-solid fa-users"></i> Employee Management</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header