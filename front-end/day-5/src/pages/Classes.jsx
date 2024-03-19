// import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import img1 from '../assets/images/yogaclassmain.jpg'
import grpimg from '../assets/images/YogaGroup.jpg'
import begimg from '../assets/images/YogaBeginners.jpg'
import pregimg from '../assets/images/Yogapregnant.jpg'
import copimg from '../assets/images/Yogacouples.jpg'
import bikimg from '../assets/images/YogaBikram.jpg'
import bareimg from '../assets/images/YogaBaree.jpg'
import '../assets/css/Classes.css'

const Classes = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="text-center">
        <img src={img1} alt="" /> <br />
        <div className="container mt-3">
          <p className="disabled">YOGA CLASSES</p>
          <h2 className="class-h2 mt-2">Choose Your Level & Focus</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <img
                src={grpimg}
                alt=""
                className="img-fluid rounded"
                data-toggle="tooltip"
                title="Image 1"
                style={{ width: '250px', height: '250px' }}
              />
            </div>
            <div className="col">
              <img
                src={begimg}
                alt=""
                className="img-fluid rounded"
                data-toggle="tooltip"
                title="Image 2"
                style={{ maxWidth: '250px', height: '250px' }}
              />
            </div>
            <div className="col">
              <img
                src={pregimg}
                alt=""
                className="img-fluid rounded"
                data-toggle="tooltip"
                title="Image 3"
                style={{ maxWidth: '250px', height: '250px' }}
              />
            </div>
            <div className="col">
              <img
                src={copimg}
                alt=""
                className="img-fluid rounded"
                data-toggle="tooltip"
                title="Image 4"
                style={{ maxWidth: '250px', height: '250px' }}
              />
            </div>
            <div className="col">
              <img
                src={bikimg}
                alt=""
                className="img-fluid rounded"
                data-toggle="tooltip"
                title="Image 5"
                style={{ width: '250px', height: '250px' }}
              />
            </div>
            <div className="col">
              <img
                src={bareimg}
                alt=""
                className="img-fluid rounded"
                data-toggle="tooltip"
                title="Image 6"
                style={{ maxWidth: '250px', height: '250px' }}
              />
            </div> 
          </div>
        </div>
      </div> <br />
      <Footer />
    </>
  )
}

export default Classes