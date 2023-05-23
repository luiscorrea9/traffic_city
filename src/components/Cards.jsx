import React from 'react'
const Cards = (props) => {
    const style = {
        'display': 'flex',
        'margin': '20px 0px',
        'width': '20rem',
        'padding': '4rem',
        
}
       

return (
    <div className="card text-center bg-white mx-auto px-5 border border-dark shadow'" style={style}>
      <img src={props.image} width="100px" className="align-self-center mt-2 text-light" alt={props.content} />
      <div className="card-body">
        <h5 className="card-title text-dark"><strong>{props.message}</strong></h5>
        {props.description && <p className="card-text text-dark">{props.description}</p>}
        <a href={props.path} className="btn btn-primary">More Info</a>
      </div>
    </div>
  );
  
}


export default Cards