import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";
export const  GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory)) return;


        setCategories( [...categories, newCategory] );
    }

    return (
    <>
        <h1>GiftExpert</h1>
        <AddCategory 
            onNewCategory = { (event) => onAddCategory(event) }
        />
            { categories.map( (category) => (
                <GiftGrid key={ category } category = { category }/>
            )) 
            }
    </>
)}