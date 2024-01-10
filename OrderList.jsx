import './OrderList.css'
export default function OrderList({item}){
    return(
        <div className="row">
            <div className="name">{item.name}</div>
            <div className="quantity">Quantity {item.quantity}</div>
            <div className="price">Price {item.price}</div>
            <div className="tCost">Total cost {item.price*item.quantity}</div>
        </div>
    )
}