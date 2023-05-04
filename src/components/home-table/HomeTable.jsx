import { Card, Dropdown, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function HomeTable() {
  return (
    <>
      <div className="container mt-5">
        <Row>
          <div className="col">
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>Full Namee</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Staus</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Newton</td>
                    <td>newton@gmail.com</td>
                    <td>M</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Active
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td><img className="rounded" width={'50px'} height={'50px'} src="https://i.postimg.cc/tRh1bP0J/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg" alt="" /></td>
                  <td><Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis-vertical fa-4"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <Link to={'/profile/1'} className="text-decoration-none"></Link>
                            <i className="fa-solid fa-eye text-success me-2 fs-5"><span className="fs-5 text-dark">View</span></i>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                          <Link to={'/edit/1'} className="text-decoration-none"></Link>
                            <i className="fa-solid fa-eye text-primary me-2 fs-5">
                                <span className="fs-5 text-dark">Edit</span></i>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                          <Link to={'/profile/1'} className="text-decoration-none"></Link>
                            <i className="fa-solid fa-trash text-danger me-2 fs-5"><span className="fs-5 text-dark">Delete</span></i>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown></td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
}

export default HomeTable;
