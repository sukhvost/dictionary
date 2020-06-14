import React from "react";

import './addPanel.css';

const AddPanel = () => {
    return(
        <div className={'main-add-word-wrap'}>
            <div className={'word-ang'}>
                <input type={'text'} placeholder={'word'}/>
            </div>
            <div className={'word-trans'}>
                <input type={'text'} placeholder={'translate'}/>
                <button className={'add-btn'}>Add</button>
            </div>
        </div>
    );
}

export default AddPanel;