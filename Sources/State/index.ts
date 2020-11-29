import { createStore } from "redux";
import { Filters, Request } from "Models";

const store = createStore((state: any, action) => ({
    ...state,
    type: action.type
}));

export interface StateModel {
    requests: Array<Request>;
    filters: Filters;
}

export default store;
