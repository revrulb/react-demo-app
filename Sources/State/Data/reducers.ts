import { Reducer } from "redux";
import { StateModel } from "State";
import { SetRequestsAction, SetFiltersAction } from "./actions";

export const setRequests: Reducer<StateModel, SetRequestsAction> = (
    state,
    action
) => {
    return { ...state!, requests: action.requests };
};

export const setFilters: Reducer<StateModel, SetFiltersAction> = (
    state,
    action
) => {
    const { companyName, requestNumber } = action;

    return {
        ...state!,
        filters: { requestNumber, sourceCompanyName: companyName }
    };
};
