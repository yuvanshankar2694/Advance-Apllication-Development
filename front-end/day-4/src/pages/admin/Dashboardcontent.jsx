import Dashboard from '../../components/Dashboard'
// import { Bar } from 'react-chartjs-2'
const Dashboardcontent = () => {
  return (
    <>
      <Dashboard />

      <div className="content">
        <h2 className="text-center">Welcome to the Admin Dashboard!</h2>
        <div className="row">
          <div className="col-4 mt-5">
            <div className="card-body shadow rounded-5">
              <div className="card-body">
                <h5 className="card-title text-center">PROFIT</h5>
                <p className="fs-4 text-center">$12,628</p>
              </div>
            </div>
          </div>
          <div className="col-4 mt-5">
            <div className="card-body shadow rounded-5">
              <h5 className="card-title text-center">SALES</h5>
              <p className="fs-4 text-center">$4,679</p>
            </div>
          </div>
          <div className="col-4 mt-5">
            <div className="card-body shadow rounded-5">
              <div className="card-body">
                <h5 className="card-title text-center">CLASSES</h5>
                <p className="text-center fs-4">40+</p>
              </div>
            </div>
          </div>
        </div>{' '}
        <br /> <br /> <br />
        <br />
        <br />
        <div className="row">
          <div className="col-7">
            <div className="card-body">
              <h5 className="text-center">Total Revenue</h5>
              
            </div>
          </div>
          <div className="col-5 shadow rounded-5">
            <div className="card-body">
              <h3 className="text-center">Profile Report</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboardcontent
