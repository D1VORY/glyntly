import React from 'react'


export default function Modal({ isOpened, closeModal, children }){
    return (
        <div className={`modal  ${isOpened ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={closeModal}></div>

            <div className="modal-content">
                {children}
            </div>
            
            <button className="modal-close is-large" aria-label="close" onClick={closeModal}  />
        </div>
    )
}