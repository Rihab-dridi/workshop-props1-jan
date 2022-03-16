

export default function Price(props) {
    console.log(props);
    const item=props.item
  return (
    <div>{item.price}</div>
  );
}
