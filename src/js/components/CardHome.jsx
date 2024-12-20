import React from "react";

function CardHome() {
  return (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
             <div className="card mx-auto h-100" style={{ height: "400px",width: "100%" }} >
                <img src="src/img/rigo-baby.jpg" className="card-img-top img-fluid" alt="rigo-baby" style={{ height: "100%", objectFit: "cover" }} />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Card title</h5>
                         <p className="card-text d-flex justify-content-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, sapiente.</p>
                        <div className="btn d-flex justify-content-center">
                          <a href="" className="btn btn-primary">Find Out More!</a>
                        </div> 
                    </div>
             </div>
          </div>
  
     



  );
}

export default CardHome;
