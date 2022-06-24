import { useState } from "react";
import { ModalChange } from "../common/modalChange/ModalChange";
import { ModalDelete } from "../common/modalDelete/ModalDelete";
import "./Item.scss";

export type ItemType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
    onDelete: () => void
    changeTitle: (id: number, newValue: string, albumId: number) => void
}

type ItemPropsType = {
    item: ItemType
}

export const Item = (props: ItemPropsType) => {

    const [showModal, setShowModal] = useState(false)
    const [showModalDel, setShowModalDel] = useState(false)


    return (
        <div className="item">
            <span>{props.item.albumId}</span>
            <div >
                <img src={props.item.thumbnailUrl} alt="Picture" className="itemImg" />
            </div>
            <ModalChange 
                    onClose={() => setShowModal(false)} 
                    show={showModal} 
                    url={props.item.url} 
                    albumId={props.item.albumId}
                    id={props.item.id}
                    title={props.item.title}
                    thumbnailUrl={props.item.thumbnailUrl}
                    changeTitle={props.item.changeTitle}/>
                    

            <ModalDelete 
                    onDelete={props.item.onDelete} 
                    onClose={() => setShowModalDel(false)} 
                    show={showModalDel} 
                    url={props.item.url} />

            <button className="button" onClick={() => setShowModalDel(true)}>DELETE</button>
            <button className="button" onClick={() => setShowModal(true)}>CHANGE</button>
        </div>
    )
}