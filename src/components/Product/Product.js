export const Product = ({product:{img,price,brand,size}}) => {
    return(
        <div className="padding-sm margin-xs">
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