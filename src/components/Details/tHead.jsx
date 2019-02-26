import React from "react";

const THead = ({ renderSortIcon, handleClick, name }) => {
    return (
        <th onClick={() => handleClick(name)}>
            {name}
            {renderSortIcon(name)}
        </th>
    );
};

export default THead;
