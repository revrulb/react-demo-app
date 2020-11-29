import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import state from "State";
import { App } from "Components";

export const Index: React.FC = () => {
    return (
        <Provider store={state}>
            <App />
        </Provider>
    );
};

render(<Index />, document.getElementById("root"));
