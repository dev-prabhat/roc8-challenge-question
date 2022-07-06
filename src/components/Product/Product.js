import ProductCSS from "./product.module.css"

export const Product = ({product:{img,price,brand,size}}) => {
    return(
        <div className={ProductCSS.product__card}>
             <div className="width-2xl height-2xl">
              <img
                className="img-responsive"
                src={img}
                alt="black_jacket"
              />
            </div>
            <p className="text-md">Price:{price}</p>
            <p className="text-sm">Brand:{brand}</p>
            <p className="text-sm">Available in Size: {size}</p>
        </div>
    )
}