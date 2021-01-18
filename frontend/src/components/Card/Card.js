import React, {useState} from 'react'
import styles from './card.module.scss'

function Card({id, title, picture, price, ...props }){
    return(
        <div className={`card ${styles.mycard}`}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={picture} alt={title}/>
                </figure>
            </div>

            <div className="card-content">
                <p className="title has-text-centered">
                    {title}
                </p>
                <p className="title has-text-centered">
                    {price}
                </p>
            </div>
        </div>
    )
}

export default Card;