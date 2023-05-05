import { Button, Card, Form, Row } from 'react-bootstrap'
import './Edit.css'
import Select from 'react-select'
const Edit = () => {
  const options=[
    {value:'Active',label:'Active'},
    {value:'InActive',label:'InActive'},
  ]
  return (
    <>
    <div className="container mt-5">
      <h2 className='text-center mt-3'>Update Employee Details</h2>
      <Card className="shadow mt-3 p-3">
          <div className="text-center">
            <img className="rounded" width={'50px'} height={'50px'} src="https://i.postimg.cc/tRh1bP0J/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg" alt=""  />
          </div>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                <Form.Label> First Name </Form.Label>
                <Form.Control type="text" name="fname" placeholder='First Name'></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                <Form.Label> Last Name </Form.Label>
                <Form.Control type="text" name="lname" placeholder='Last Name'></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmail">
                <Form.Label> Email Address </Form.Label>
                <Form.Control type="text" name="email" placeholder='Email Address'></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" name="email" placeholder='Mobile'></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                <Form.Label>Select Gender</Form.Label>
                <Form.Check type={"radio"} label={"Male"} name={"gender"} value={"Male"}></Form.Check>
               <Form.Check type={"radio"} label={"Female"} name={"gender"} value={"Female"}></Form.Check>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                <Form.Label>Select Employee Status</Form.Label>
                <Select options={options}></Select>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formProfilePicture">
                <Form.Label>Choose Profile Picture</Form.Label>
                <Form.Control type="file" name="user_profile"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                <Form.Label> Location </Form.Label>
                <Form.Control type="text" name="location_name" placeholder='Location'></Form.Control>
              </Form.Group>
              <Button varient="primary" type="submit">Submit</Button>
            </Row>
          </Form>
      </Card>
    </div>
    </>
  )
}

export default Edit