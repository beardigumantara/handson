import React from 'react';

const Seacrh = ({getData, getSearch}) => {
    return (
        <>
            <input type="search" name='searchbox' onChange={getSearch}/>
            <input type="submit" value="SEARCH" onClick={getData}/>
        </>
    );
};

export default Seacrh;