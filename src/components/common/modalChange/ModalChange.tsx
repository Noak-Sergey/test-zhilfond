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
    changeTitle:(id: number, newValue: string, albumId: number) => void
}

export const ModalChange: React.FC<ModalChangePropsType> = (props) => {

    if (!props.show) {
        return null
    }

    const onTitleChangeHandler = (newValue: string) => {
        props.changeTitle(props.id, newValue, props.albumId)
    }

    const stopOnClick = (e: any) => e.stopPropagation() 

    const showOrHide = props.title === '' ? 'show' : 'hide'

    return (
        //Привязал событие onClick за пределами модального окна
        <div className="modal" onClick={props.onClose}>   
            <div className="modal_content" onClick={stopOnClick}>
                <img alt="picture" src={props.url} />
                <button onClick={props.onClose} className="button">Close</button>
                <button onClick={()=>props.changeTitle} className="button">Save</button>
            </div>
            <div className="modal_info" onClick={stopOnClick}>
                    <p>albumId: {props.albumId}</p>
                    <p>id: {props.id}</p>
                    <p>title: <EditableSpan value={props.title} onChange={onTitleChangeHandler}/></p>                   
                    <span className={showOrHide}>title is required</span>
                    <p>url: {props.url}</p>
                    <p>thumbnailUrl: {props.thumbnailUrl}</p>
            </div>
        </div>
    )
}