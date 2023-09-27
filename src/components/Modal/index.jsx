import React, { useState,useRef, useEffect } from "react";
import "./styles.css";
function Modal({isOpen, hasCloseButton = false, onClose,children}){
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const modalRef = useRef(null);
    const handleClose = () =>{
        if(onClose){
            onClose();
        }
        setIsModalOpen(false);
    }
    useEffect(()=>{
        setIsModalOpen(isOpen);
    },[isOpen])
    useEffect(()=>{
        const modalElement = modalRef.current;
        if(modalElement){
            if(isModalOpen){
                modalElement.showModal();
            }else{
                modalElement.close();
            }
        }
    },[isModalOpen])
    
    return <dialog ref={modalRef} className="modal"> 
    {hasCloseButton && <button className="modal-close-button float-right mr-2 text-2xl" onClick={handleClose}> X </button>}
    {children} 
    </dialog>
}
export default Modal;