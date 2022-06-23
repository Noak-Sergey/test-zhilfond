import { useState } from "react";
import { Modal } from "../common/modal/Modal";
import "./Item.scss";

export type ItemType = {
    "albumId": number
    "id": number
    "title": string
    "url": string
    "thumbnailUrl": string
}

type ItemPropsType = {
    item: ItemType
}

export const Item = (props: ItemPropsType) => {

    const [show, setShow] = useState(false)


    return (
        <div className="item">
            <span>{props.item.albumId}</span>
            <div >
                <img src={props.item.thumbnailUrl} alt="Photo" className="itemImg" />
            </div>
            <Modal onClose={() => setShow(false)} show={show} url={props.item.url} />
            <button className="button" onClick={() => setShow(true)}>DELETE</button>
            <button className="button" >CHANGE</button>
        </div>
    )
}