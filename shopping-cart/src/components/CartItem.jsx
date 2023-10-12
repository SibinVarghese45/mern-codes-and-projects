const CartItem = ({item, itemIndex}) => {
  return <div>
    <div>
      <div>
        <img src={item.page} alt="" />
      </div>

    <div>
      <h1>{item.title}</h1>
      <h1>{item.description}</h1>
      <div>
        <p>{item.price}</p>
      </div>
      <button>Delete</button>
    </div>

    </div>
  </div>;
};

export default CartItem;
