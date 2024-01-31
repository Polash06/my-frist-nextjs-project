import React from 'react';

const Layout = ({ Children }) => {
    return (
        <div>
             <h2>header</h2>
                { Children}
           <h2>footer</h2>
        </div>
    );
};

export default Layout;