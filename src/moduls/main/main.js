import React from "react";
import SearchPanel from "../../components/searchPanel";
import FilterTypeWord from "../../components/filterTypeWord";

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

        </main>
    );
}

export default Main;