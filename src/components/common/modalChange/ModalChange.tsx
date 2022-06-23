import React from "react";
import { EditableSpan } from "../editableSpan/EditableSpan";
import  "./ModalChange.scss"

type ModalChangePropsType = {
    show: boolean
    onClose: () => void
    url: string
    albumId: number
    id: number
    title: string
    thumbnailUrl: string
}

export const ModalChange: React.FC<ModalChangePropsType> = (props) => {

    if (!props.show) {
        return null
    }

    // const changeTitle = (title: string) => {
    //     props.changeTitle(props.id, title)
    // }

    const stopOnClick = (e: any) => e.stopPropagation() 

    return (
        //Привязал событие onClick за пределами модального окна
        <div className="modal" onClick={props.onClose}>   
            <div className="modal_content" onClick={stopOnClick}>
                <img alt="picture" src={props.url} />
                <button onClick={props.onClose} className="button">Close</button>
                <button onClick={props.onClose} className="button">Save</button>
            </div>
            <div className="modal_info" onClick={stopOnClick}>
                    <p>albumId: {props.albumId}</p>
                    <p>id: {props.id}</p>
                    <p>title: <EditableSpan value={props.title} onChange={()=>{}}/></p>                   
                    <span className="hide">title is required</span>
                    <p>url: {props.url}</p>
                    <p>thumbnailUrl: {props.thumbnailUrl}</p>
            </div>
        </div>
    )
}