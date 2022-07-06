import { createContext, useReducer, useContext } from "react";
import { Products } from "../Data";

const FilterContext = createContext() 

const FilterProvider = ({children}) =>{
    const initialState = {
        brands:[],
        gender:"",
        byPrice:"",
        size:"",
        products:[...Products]
    }
    const [state,dispatch] = useReducer(filterReducer,initialState)

    function filterReducer(state,action){
        switch(action.type){
            case"FILTER_BY_GENDER":
                return{
                   ...state,gender:action.payload
                }
            case "SORT_BY_PRICE":
                return{
                    ...state,byPrice:action.payload
                }
            case "ADD_BRAND":
                return{
                    ...state,brands:[...state.brands,action.payload]
                }
            case "REMOVE_BRAND":
               return{
                 ...state,brands:state.brands.filter(brand => brand !== action.payload)
               }
            case "APPEND_SIZE":
                return{
                    ...state,size:action.payload
                }
            case "REMOVE_SIZE":
                return{
                    ...state,sizes:state.sizes.filter(size => size !== action.payload)
                }
            case "CLEAR_ALL":
                return{
                    brands:[],
                    gender:"",
                    byPrice:"",
                    products:[...Products],
                    size:""
                }
            default:
                return{...state}
        }
    }

    const FileredState = () => {
        const {byPrice,products,brands,gender,size} = state
        let fileredProducts = [...products]

        if(byPrice){
            fileredProducts = fileredProducts.sort((a,b) => byPrice === "High-to-Low" ? b.price - a.price : a.price - b.price)
        }
        if(gender){
            fileredProducts = fileredProducts.filter(product => product.gender === gender)
        }

        if(brands.length > 0){
            fileredProducts = fileredProducts.filter(product => brands.includes(product.brand))
        }

        if(size){
            fileredProducts = fileredProducts.filter(product => product.size ===  size)
        }
         
        return fileredProducts
    }

    return(
        <FilterContext.Provider value={{state,dispatch,FileredState}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)

export {FilterProvider,useFilter}