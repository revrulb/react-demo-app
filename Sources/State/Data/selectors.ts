import { StateModel } from "State";
import { stringUtils } from "Utils";

export const getCurrentFilters = (state: StateModel) => state.filters;

export const getAllRequests = (state: StateModel) => state.requests;

export const getRequestsByFilters = (state: StateModel) =>
    state.requests.filter(
        (x) =>
            stringUtils.includes(
                x.source.name,
                state.filters.sourceCompanyName
            ) && stringUtils.includes(x.number, state.filters.requestNumber)
    );
