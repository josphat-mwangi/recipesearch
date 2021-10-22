import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import style from './recipe.module.css';
import Modal from './Modal'


const Recipe = ({title, calories, image, ingredients}) => {
    const [show, setShow] = useState(false)
    return(
        <div className={style.card} >
            <h3 className={style.card_title}>{title}</h3>
            <img src={image} className={style.img} alt={title}/>
            <div className="card-body">

                <button type="button" className={style.btn} className="btn-dark btn-lg" onClick={() => setShow(true)}>Know More</button>
                <Modal onClose={() => setShow(false)} show={show}

                    title={title} calories={calories} ingredients={ingredients} image={image}
                />
            
            </div>
        </div>
    )
}

export default Recipe;

 