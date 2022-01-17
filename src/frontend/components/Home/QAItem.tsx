import React from "react";
import './HomePage.css'

const QAItem: React.FC = (props) => {
    return (
        <a className="qa-btn">{props.children}</a>
    )
}

export default QAItem;

