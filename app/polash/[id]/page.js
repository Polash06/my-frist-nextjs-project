import React from 'react';

const daynamecpage = ({params ,searchParams}) => {
    // console.log(searchParams)
    return (
        <div>
            <h1> daynamic page : {params.id}</h1>
            <h2> search by = {searchParams.catagore}</h2>
        </div>
    );
};

export default daynamecpage;