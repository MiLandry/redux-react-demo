import React from 'react';

const FilterLink = ({onClick, text}) => (
    <a
        href='#'
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
    >
        {text}
    </a>
);

FilterLink.propTypes = {
    onClick: React.PropTypes.func
};


export default FilterLink;