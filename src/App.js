import "./App.css";
import Description from "./components/Description";
import Image from "./components/image";
import Price from "./components/Price";

function App() {
  // step1: declare the fake  data we need
  let product = {
    name: "casque",
    description: "Gamer",
    price: 150,
    imageUrl:
      "https://freepikpsd.com/file/2019/10/casque-gamer-png-6-Transparent-Images.png",
  };

   product.name="ecouteur"
  //step 2 :(in the parent component ) send the data we need to the component that needs it
  //  const props={item:product, person:student}
  // step3: (in the child component) receive the data sent by the parent component => we have access to the data we need

  //step: 
  const alertHandler=(name)=>{
    alert(` do you want to buy ${name} `)
  }
  const student = {};
  const instructor = [];
  return (
    <div className="App">
      <h1> worshop props </h1>
      <Image item={product} person={student} />
      <div className="desrp" >
        <Description item={product} alertFunction={alertHandler}  />
        <Price item={product} />
      </div>

      {/* <main>
        <img src={product.imageUrl} style={{ width: "300px" }} />
        <h1> {product.name} </h1>
        <p>{product.description} </p>
        <p> {product.price} </p>
      </main> */}
    </div>
  );
}

export default App;
