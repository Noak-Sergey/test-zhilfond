import React from "react";
import  "./Modal.scss"

type ModalChangePropsType = {
    show: boolean
    onClose: () => void
    url: string
}

export const ModalChange: React.FC<ModalChangePropsType> = (props) => {

    if (!props.show) {
        return null
    }

    const stopOnClick = (e: any) => e.stopPropagation() 

    return (
        //Привязал событие onClick за пределами модального окна
        <div className="modal" onClick={props.onClose}>   
            <div className="modal_content" onClick={stopOnClick}>
                <img alt="picture" src={props.url} />
                <div className="modal_footer">
                    <button onClick={props.onClose} className="button">Close</button>
                    <button onClick={props.onClose} className="button">Save</button>
                </div>
            </div>
        </div>
    )
}