import { useCartContext } from './CartContext'

const Cart = () => {
  const { items: cart } = useCartContext()

  if (cart.length) {
    <div>
      {cart.map((item) => <p key={item.id}>{item.name}</p>)}
    </div>
  }

  return (
    <span>No tienes productos en el carrito.</span>
  )
}

export default Cart