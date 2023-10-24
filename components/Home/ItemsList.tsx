import ItemCard from "./ItemCard"

const ItemsList = (props: any) => {
    return (
        <div>
            {props.itemsLists.map((item: any, index: number) => (
                <div key={index}>
                    <ItemCard item={item} />
                </div>
            ))}
        </div>
    )
}

export default ItemsList