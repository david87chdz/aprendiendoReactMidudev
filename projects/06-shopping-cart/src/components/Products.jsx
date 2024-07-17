import "./Products.css";
import { AddToCartIcon } from "./icons.jsx";

// eslint-disable-next-line react/prop-types
export function Products({products}) {
  console.log(products);
  return (
    <main className="products">
      {products.slice(0,10)
      .map((product) => (
        <li key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <strong>{product.title}</strong> - ${product.price}
          </div>
          <div>
            <button>
              <AddToCartIcon />
            </button>
          </div>
        </li>
      ))}
    </main>
  );
}
