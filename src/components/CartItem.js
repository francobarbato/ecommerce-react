

const CartItem = ({item}) => {

    const {image, description, itemCount, name, cost} = item

    return(
    <div>
        {/* <button onClick={removeCart}>Borrar todos</button> */}
        <img src={image} alt="" className="img"/>
        <p>Nombre: {name}</p>
        <p>Precio: {cost}</p>
        <p>Cantidad seleccionada: {itemCount}</p>
        <p>Descripcion: {description}</p>
        <hr/>
    </div>
    )
}

export default CartItem;