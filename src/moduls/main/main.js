import React from "react";
import SearchPanel from "../../components/searchPanel";
import FilterTypeWord from "../../components/filterTypeWord";
import DescriptionPlace from "../../components/descriptionPlace";
import ItemWord from "../../components/itemWord";
import AddPanel from "../../components/addPanel";

import './main.css'

const Main = () => {

    const searchPanelData = {type: 'search', placeholder: 'search word'}

    const typeWord = [
        {type: 'All'},
        {type: 'Learned'},
        {type: 'Important'},
        {type: 'v'},
        {type: 'noun'},
        {type: 'a'},
        {type: 'cj'},
        {type: 'pron'},
        {type: 'prep'},
        {type: 'num'}
    ];

    const descriptionPlaceData = [{name: 'word'}, {name: 'translate'}];

    const classesDescription = {classItem: 'description_item', classBlock: 'main-description-wrap'}

    return (
        <main className={'main-app'}>
            <div className={'main-input-wrap'}>
                <div className={'main-search-panel'}>
                    <SearchPanel datas={searchPanelData}/>
                </div>
                <div className={'main-type-word'}>
                    <FilterTypeWord types={typeWord}/>
                </div>
            </div>
            <DescriptionPlace names={descriptionPlaceData} classes={classesDescription}/>
            <ItemWord/>
            <AddPanel/>

        </main>
    );
}

export default Main;