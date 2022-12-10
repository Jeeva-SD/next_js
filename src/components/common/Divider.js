import React from 'react';

const Divider = ({ type }) => {
    return (
        <>
            {type === 1 ?
                <span>
                    <span className="vr mx-2"></span>
                </span>
                :
                <>
                    <hr style={{ color: '#b7b7b7' }} />
                </>}
        </>
    );
};

export default Divider;