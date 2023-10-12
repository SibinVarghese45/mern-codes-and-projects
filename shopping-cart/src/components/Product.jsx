import { useDispatch, useSelector } from "react-redux";

const Product = ({post}) => {

  const {cart} = useSelector((state)  => state)
  const dispatch = useDispatch();

  function addToCart(){
    dispatch(add(post));
    toast.success("Item added to Cart")
  }

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.success("item removed")
  }

  return <div>
    <div>
      <p>{post.title}</p>
    </div>

    <div>
      <p>{post.description}</p>
    </div>

    <div>
      <img src={post.image} alt="" />
    </div>

    <div>
      <p>{post.price}</p>
    </div>

    
    {
      cart.some((p) => p.id === post.id)?
      <button
      onClick={removeFromCart}>Remove Item</button>:
      <button onClick={addToCart}>Add to cart</button>
    }

  </div>
};

export default Product;
