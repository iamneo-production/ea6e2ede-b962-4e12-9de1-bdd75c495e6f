import "./Benefits.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function Benefits() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      description={item.description}
    />
  ));

  return (
    <div className="benefits-container">
      <h1 className="benefits-h1">Still looking for reasons you need to buy health insurance?</h1>
      <h1 className="benefits-h2">Here are 5 reasons you need to buy health insurance</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}