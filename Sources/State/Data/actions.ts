import { Action } from "redux";
import { Request } from "Models";

export interface SetRequestsAction extends Action<"set_requests"> {
    requests: Array<Request>;
}

export interface SetFiltersAction extends Action<"set_filters"> {
    requestNumber: string;
    companyName: string;
}

export type PossibleActions = SetRequestsAction | SetFiltersAction;

export const buildSetRequestsAction = (
    requests: Array<Request>
): SetRequestsAction => {
    return { type: "set_requests", requests };
};

export const buildSetFiltersAction = (
    companyName: string,
    requestNumber: string
): SetFiltersAction => {
    return {
        type: "set_filters",
        companyName,
        requestNumber
    };
};
