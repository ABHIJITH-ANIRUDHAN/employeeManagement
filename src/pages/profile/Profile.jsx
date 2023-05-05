import { Card, Row } from 'react-bootstrap'
import './Profile.css'
const Profile = () => {
  return (
    <div className="container">
      <Card className='shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
              <div className="col">
                <div className="profile_img d-flex justify-content-center">
                <img className="rounded" width={'250px'} height={'250px'} src="https://i.postimg.cc/tRh1bP0J/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg" alt=""  />
                </div>
              </div>
            </Row>
            <div className="text-center mt-3">
              <h3>Newton</h3>
              <h4><i className="fa-solid fa-envelope"></i> :<span> newton@gmail.com</span></h4>
              <h4><i className="fa-solid fa-mobile"></i> :<span> 8157032518</span></h4>
              <h4><i className="fa-solid fa-venus-mars"></i> :<span> Male</span></h4>
              <h4><i className="fa-solid fa-location-dot"></i> :<span> London</span></h4>
              <h4><i className="fa-solid fa-chart-line"></i> :<span>Active </span></h4>
            </div>
          </Card.Body>
      </Card>
    </div>
  )
}

export default Profile