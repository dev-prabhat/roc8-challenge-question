import { useFilter } from "../../Context/Filter-Context"
import AsideCSS from "./aside.module.css"

const Brands = ["HRX","Roadster","WRONG","The Dry","Van Heusen"]
const Genders = ["Men","Women"]
const Sort = ["High-to-Low","Low-to-High"]
const Sizes = ["S","M","L","XL"]
export const Aside = () => {
    const {state:{byPrice,brands,gender,size},dispatch} = useFilter()

    const brandFilter = (brandName) => {
        let brandIndex = brands.findIndex(brand => brand === brandName)
        if(brandIndex === -1) dispatch({type:"ADD_BRAND",payload:brandName})
        else dispatch({type:"REMOVE_BRAND",payload:brandName})
    }
    return(
        <aside className={AsideCSS.side__bar}>
            <div className={AsideCSS.d__flex}>
                <h3>Filter</h3> 
                <button onClick={()=>dispatch({type:"CLEAR_ALL"})} className="btn btn-secondary">
                    Clear All
                </button>
            </div>
           
            <div className="margin-xs">
                <h4 className="head-md">Sort by Price</h4>
                <ul className="styled-list list-style-none d-inline_block">
                    {
                        Sort.map(sortValue => (
                           <li key={sortValue}>
                                <input 
                                    id={sortValue}
                                    type="radio"
                                    value={sortValue}
                                    checked={byPrice===sortValue ? true : false }
                                    onChange={()=>dispatch({type:"SORT_BY_PRICE",payload:sortValue})}
                                />
                                <label className={AsideCSS.label__css} htmlFor={sortValue}>{sortValue}</label>
                           </li>
                        ))
                    }
                </ul>
                
            </div>
            <div className="margin-xs">
                <h4 className="head-md">Filter by Gender</h4>
                <ul className="styled-list list-style-none d-inline_block">
                {
                   Genders.map(Gender => (
                   <li key={Gender}>
                        <input 
                            id={Gender}
                            type="radio"
                            checked={gender === Gender}
                            onChange={()=>dispatch({type:"FILTER_BY_GENDER",payload:Gender})}/>  
                        <label className={AsideCSS.label__css} htmlFor={Gender}>{Gender}</label>
                   </li>
                   )) 
                }
                </ul>
            </div>
            <div className="margin-xs">
                <h4 className="head-md">Filter by Brand</h4>
                <ul className="styled-list list-style-none d-inline_block">
                {
                    Brands.map(brand => (
                       <li key={brand}>
                        <input 
                            id={brand}
                            type="checkbox"
                            checked={brands.includes(brand)}
                            onChange={()=>brandFilter(brand)}
                            />
                         <label className={AsideCSS.label__css} htmlFor={brand}>{brand}</label>
                       </li>
                    ))
                }
                </ul>
                
            </div>
            <div className="margin-xs">
                <h4 className="head-md">Filter By Size</h4>
                <ul className="styled-list list-style-none d-inline_block">
                {
                    Sizes.map(sizeValue => (
                        <li key={sizeValue}>
                             <input
                              id={sizeValue}
                              type="radio"
                              checked={size === sizeValue}
                              onChange={()=>dispatch({type:"APPEND_SIZE",payload:sizeValue})}
                            />
                            <label className={AsideCSS.label__css} htmlFor={sizeValue}>{sizeValue}</label>
                        </li>
                    ))
                }
                </ul>
            </div>
        </aside>
    )
}