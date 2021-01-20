import React, {useState} from 'react'


export default function Modal({ isOpened, closeModal, children }){
    return (
        <div class={`modal  ${isOpened ? 'is-active' : ''}`}>
            <div class="modal-background" onClick={closeModal}></div>

            <div class="modal-content">
                {children}
            </div>
            
            <button class="modal-close is-large" aria-label="close" onClick={closeModal}  />
        </div>
    )
}