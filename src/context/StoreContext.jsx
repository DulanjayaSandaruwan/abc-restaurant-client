
import { createContext, useEffect, useState } from "react"
import { food_list } from "../assets/web/images/assets";
import { getAllCategories, getAllItems } from "../services/Common/CommonService";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [token, setToken] = useState(JSON.parse(localStorage.getItem('user')))

    const refreshToken = () => {
        setToken(JSON.parse(localStorage.getItem('user')))
    }

    const resetToken = () => {
        console.log("reset")
        console.log(token)
        localStorage.removeItem('user');
        refreshToken()
    }

    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const deleteFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: 0 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = itemsList.find((product) => product.id === item);
                totalAmount += (itemInfo.unitPrice * cartItem[item]) / 100 * (100 - (itemInfo.discountPercentage > 0 ? itemInfo.discountPercentage : 1));
            }
        }
        return totalAmount;
    }

    const resetCart = () => {
        setCartItem({})
    }

    const [categoriesList, setCategoriesList] = useState([])
    const [rerenderCategory, setRerenderCategory] = useState(false)

    useEffect(() => {
        getAllCategories()
            .then(response => {
                setCategoriesList(response.content)
            })
            .then((error) => {
                console.log(error)
            })
    }, [rerenderCategory])

    const [itemsList, setItemsList] = useState([])
    const [rerenderItems, setRerenderItems] = useState(false)

    useEffect(() => {
        getAllItems()
            .then(response => {
                setItemsList(response.content.filter(item => item.status == 'ACTIVE'))
            })
            .then((error) => {
                console.log(error)
            })
    }, [rerenderItems])

    // set review session
    const [reviewsOpen, setReviewsOpen] = useState(false);
    const [id, setId] = useState();
    const handleReviewsOpen = (id) => {
        setId(id);
        setReviewsOpen(true);
    }
    const handleReviewsClose = () => setReviewsOpen(false);

    const contextValue = {
        token,
        resetToken,
        refreshToken,
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        deleteFromCart,
        removeFromCart,
        getTotalCartAmount,
        resetCart,
        reviewsOpen,
        id,
        handleReviewsOpen,
        handleReviewsClose,
        categoriesList,
        setRerenderCategory,
        itemsList,
        setRerenderItems,
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreContextProvider;