import { createStore, Reducer } from "redux";
import { Filters, Request } from "Models";
import { PossibleActions } from "./Data/actions";
import * as reducers from "./Data/reducers";

const initialState: StateModel = {
    filters: { requestNumber: "", sourceCompanyName: "" },
    requests: []
};

const rootReducer: Reducer<StateModel, PossibleActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "set_company_name_filter":
            return reducers.setCompanyNameFilter(state, action);
        case "set_request_number_filter":
            return reducers.setRequestNumberFilter(state, action);
        case "set_requests":
            return reducers.setRequests(state, action);
        default:
            return state!;
    }
};

const store = createStore(rootReducer);

export interface StateModel {
    requests: Array<Request>;
    filters: Filters;
}

export * from "./Data/actions";
export * from "./Data/selectors";
export default store;
