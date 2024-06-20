import { createContext, useEffect, useState } from "react"
import { fetchDataFromApi } from '../utils/api'
import { useTranslation } from "react-i18next";
//created a Context Variable so as to use all values provided by Context.Provider globally all over the site through this variable
export const Context = createContext();

export const ApiContext = (props) => {
    const[loading, setLoading] = useState(false);
    const[searchResults, setSearchResults] = useState("");
    const[selectedCategory, setSelectedCategory] = useState("New");
    const[mobileMenu, setMobileMenu] = useState(false);
    const[t, i18n] = useTranslation("global");

    useEffect(()=>{
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]); 

    const fetchSelectedCategoryData = async(query) =>{
        setLoading(true);
        try {
            const { contents } = await fetchDataFromApi(`search/?q=${query}`);
            setSearchResults(contents)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }


    //Using create Context and context Provider, it is a beautiful way of allowing the following values to use globally inside the application. Our whole application will render through the props.children inside the Context.Provider. Hence Context.Provider or the APIContext component will become parent of all the components. And the values provided by the Context.Provider can be used in any of the component which actually will be the child of the Context.Provider by using useContext hook.
    

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