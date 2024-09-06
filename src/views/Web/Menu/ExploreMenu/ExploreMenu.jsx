import React, { Component, useContext } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../../assets/web/images/assets'
import { StoreContext } from '../../../../context/StoreContext'
import { Tab, Tabs, TabsHeader } from '@material-tailwind/react'
const ExploreMenu = ({ category, setCategory }) => {
    const { categoriesList } = useContext(StoreContext)

    return (
        <div className='explore-menu' id='explore-menu'>
            <div>
                <Tabs value="" className='w-full pb-4 overflow-x-auto'>
                    <TabsHeader>
                        <Tab value="" onClick={() => setCategory("")}>
                            All
                        </Tab>
                        {categoriesList.map(({ categoryName, id }) => (
                            <Tab className='z-10' key={id} value={categoryName} onClick={() => setCategory(categoryName)}>
                                {categoryName}
                            </Tab>
                        ))}
                    </TabsHeader>
                </Tabs>
            </div>
            <hr />
        </div>
    )
}


export default ExploreMenu;