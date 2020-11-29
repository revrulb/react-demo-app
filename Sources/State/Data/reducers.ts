import { Reducer } from "redux";
import { StateModel } from "State";
import {
    SetRequestsAction,
    SetCompanyNameFilterAction,
    SetRequestNumberFilterAction
} from "./actions";

export const setRequests: Reducer<StateModel, SetRequestsAction> = (
    state,
    action
) => {
    return { ...state!, requests: action.requests };
};

export const setCompanyNameFilter: Reducer<
    StateModel,
    SetCompanyNameFilterAction
> = (state, action) => {
    return {
        ...state!,
        filters: { ...state!.filters, sourceCompanyName: action.companyName }
    };
};

export const setRequestNumberFilter: Reducer<
    StateModel,
    SetRequestNumberFilterAction
> = (state, action) => {
    return {
        ...state!,
        filters: { ...state!.filters, requestNumber: action.requestNumber }
    };
};
