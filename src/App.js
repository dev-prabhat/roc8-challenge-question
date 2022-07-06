import { Product } from "./components/Product/Product";
import { Aside } from "./components/Aside/Aside"
import { useFilter } from "./Context/Filter-Context";
import "./style.css"

function App() {
  const { FileredState } = useFilter()

  return (
    <main className="grid__wrapper">
      <Aside/>
      <section className="product__container">
        {
          FileredState().map(product => (
            <Product key={product.id} product={product}/>
          ))
        }
      </section>
    </main>
  );
}

export default App;
