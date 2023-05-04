import { Button, Form } from 'react-bootstrap'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import HomeTable from '../../components/home-table/HomeTable'
const Home = () => {
  const navigate=useNavigate()
  const adduser=()=>{
    //navigate to register page
    navigate('/register')
  }
  return (
    <>
    <div className="container mt-5">
      <div className="first_div">
        <div className="search_Add d-flex justify-content-between">
          <div className="search col-lg-4">
            <Form className="d-flex">
              <Form.Control type="text" palceholder="Search Here" className='me-2'/>
              <Button variant='primary'>Search</Button>
            </Form>
          </div>
          <div className="add_btn">
            <Button onClick={adduser} variant="success"><i className="fa-solid fa-user-plus"></i> ADD</Button>
          </div>
        </div>
      </div>
      <div className="second_div">
         <HomeTable/>
      </div>
    </div>
    </>
  )
}

export default Home
