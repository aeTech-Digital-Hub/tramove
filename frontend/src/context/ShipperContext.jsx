import { useContext, createContext } from "react";



const ShipperContext = createContext()
export const useShipperContext = () => useContext(ShipperContext)

const ShipperContextProvider = (props) => {
    const [token, setToken]


    const contextValues = {
        token,
        setToken
    }

    return(
        <ShipperContext.Provider value={contextValues}>
            {props.children}
        </ShipperContext.Provider>
    )
}

export default ShipperContextProvider;