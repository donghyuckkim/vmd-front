import React, {useEffect, useState} from 'react';


const DataRendering = () => {

    const serverData = async (url) => {
        const res = fetch(url);
        const initialData = await res.json();
        return initialData;
    }

}

export default DataRendering;