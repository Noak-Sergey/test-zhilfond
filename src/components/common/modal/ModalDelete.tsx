import React from "react";
import  "./Modal.scss"

type ModalDeletePropsType = {
    show: boolean
    onClose: () => void
    url: string
    onDelete: () => void
}

export const ModalDelete: React.FC<ModalDeletePropsType> = (props) => {

    if (!props.show) {
        return null
    }

    const stopOnClick = (e: any) => e.stopPropagation() 

    return (
        //Привязал событие onClick за пределами модального окна
        <div className="modal" onClick={props.onClose}>   
            <div className="modal_content" onClick={stopOnClick}>
                <p>Вы действительно хотите удалить данный контент?</p>
                <img alt="waiting" src={props.url} />
                <div className="modal_footer">
                    <button onClick={props.onClose} className="button">Close</button>
                    <button onClick={props.onDelete} className="button">Delete</button>
                </div>
            </div>
        </div>
    )
}