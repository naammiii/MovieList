
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import List from '../components/List'

export default function Profile() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User Information</h5>
                <div className="card-text">
                  <p><strong>Name:</strong> John Doe</p>
                  <p><strong>Email:</strong> johndoe@example.com</p>
                  <p><strong>Phone:</strong> 123-456-7890</p>
                </div>
                <hr />
                <p className="text-center">Thank you for visiting!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <List />
    </>
  )
}