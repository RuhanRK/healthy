import React from "react";
import { ListGroup } from "react-bootstrap";

const AutoCompleteBox = ({ suggestions, suggestionSelected }) => {
    if (suggestions.length > 0) {
        return (
            <ListGroup className="shadow p-3 bg-white rounded">
                {suggestions.map(item => (
                    <ListGroup.Item
                        key={item}
                        onClick={() => suggestionSelected(item)}
                    >
                        {item}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        );
    }
    return null;
};

export default AutoCompleteBox;
