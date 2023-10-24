import { useState } from "react";
import BookingModal from "../BuyItem/BookingModal";
import ItemCard from "./ItemCard"

const ItemsList = (props: any) => {
    const [selectedItem, setSelectedItem] = useState<any>();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3">
            {props.itemsLists.map((item: any, index: number) => (
                <div 
                    key={index} 
                    onClick={() => {
                        setSelectedItem(item);
                        (window as any).my_modal_4.showModal();
                        }}
                >
                    <ItemCard item={item} />
                </div>
            ))}

            <dialog id="my_modal_4" className="modal">
                <BookingModal selectedItem={selectedItem} />
            </dialog>
        </div>
    )
};

export default ItemsList