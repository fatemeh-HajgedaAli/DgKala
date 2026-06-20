import { bestSellingData } from "../../../data/bestSelling.data";

export default function BestSellingItems() {
  return (
    <>
      <div className="">
        {bestSellingData.map((product) => (
          <div className="" key={product.id}>
            <img src={product.image} alt={product.title} className="" />
            <div className="">
              <span className="">{product.id}</span>
              <p className="">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
