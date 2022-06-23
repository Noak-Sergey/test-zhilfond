import React from "react";
import  "./Modal.scss"

type ModalPropsType = {
    show: boolean
    onClose: () => void
    url: string
}

export const Modal: React.FC<ModalPropsType> = (props) => {

    if (!props.show) {
        return null
    }

    const stopOnClick = (e: any) => e.stopPropagation() 

    return (
        //Привязал событие onClick за пределами модального окна
        <div className="modal" onClick={props.onClose}>   
            <div className="modal_content" onClick={stopOnClick}>
                <img alt="waiting" src={props.url} />
                <div className="modal_footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}