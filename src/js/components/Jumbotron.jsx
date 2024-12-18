import React from "react";

function Jumbotron(){
    return (
    <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="jumbotron  col-11 bg-secondary p-10 text-dark bg-opacity-10 p-4" >
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at, perspiciatis accusantium hic similique tempore odio, inventore voluptatibus optio officia, culpa dignissimos atque laboriosam sint minima saepe facere alias error odit doloremque dolorum? </p>
        
        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
    </div>
    )
}

export default Jumbotron
