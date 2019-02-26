import React from "react";

const THead = ({ renderSortIcon, handleClick, name }) => {
    return (
        <th onClick={() => handleClick(name)}>
            Name
            {renderSortIcon(name)}
        </th>
    );
};

export default THead;
