import React from 'react';
import mapType from './helpers';

const Icon = ({ type }) => {
    return (
        <div>
            <img src={mapType(type)} alt='' />
        </div>
    );
}

export default Icon;