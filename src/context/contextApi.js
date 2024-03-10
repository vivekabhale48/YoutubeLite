import { createContext, useEffect, useState } from "react"
import { fetchDataFromApi } from '../utils/api'
import { useTranslation } from "react-i18next";
export const Context = createContext();

export const ApiContext = (props) => {
    const[loading, setLoading] = useState(false);
    const[searchResults, setSearchResults] = useState(true);
    const[selectedCategory, setSelectedCategory] = useState("New");
    const[mobileMenu, setMobileMenu] = useState(true);
    const[t, i18n] = useTranslation("global");

    useEffect(()=>{
        console.log("hii");
        fetchSelectedCategoryData(selectedCategory);
    }, []); 

    const fetchSelectedCategoryData = async(query) =>{
        setLoading(true);
        try {
            // const { contents } = await fetchDataFromApi(`search/?q=${query}`);
            // console.log(contents);
            // setSearchResults(contents)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }


    //Using create Context and context Provider, it is a beautiful way of allowing the following values to use globally inside the application. Our whole application will render through the props.children inside the Context.Provider. Hence Context.Provider or the APIContext component will become parent of all the components.

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu,
            t,
            i18n
        }}>
            {props.children}
        </Context.Provider>
    )
}