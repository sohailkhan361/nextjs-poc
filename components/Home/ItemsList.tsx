import ItemCard from "./ItemCard"

const ItemsList = (props: any) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3">
            {props.itemsLists.map((item: any, index: number) => (
                <div key={index}>
                    <ItemCard item={item} />
                </div>
            ))}
        </div>
    )
}

export default ItemsList