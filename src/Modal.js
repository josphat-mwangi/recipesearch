import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import './Modal.css'

const Modal = props => {

    if(!props.show){
        return null
    }
    return (
        <div className="madol " onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">
                        {props.title}
                    </h4>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={props.image} alt={props.title}/>
                        </div>
                        <div className="col-md-8">
                            <div className="ingredient">
                                <p> {props.ingredients} </p> 
                                <p>  <strong>Calories: </strong> {props.calories} </p>
                               
                            </div>
                        </div>
                    </div>
                    
                    

                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline-primary btn-lg" onClick={props.onClose}>
                        close
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Modal
