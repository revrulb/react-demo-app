import { Action } from "redux";
import { Request } from "Models";

export interface SetRequestsAction extends Action<"set_requests"> {
    requests: Array<Request>;
}

export interface SetRequestNumberFilterAction
    extends Action<"set_request_number_filter"> {
    requestNumber: string;
}

export interface SetCompanyNameFilterAction
    extends Action<"set_company_name_filter"> {
    companyName: string;
}

export type PossibleActions =
    | SetRequestsAction
    | SetRequestNumberFilterAction
    | SetCompanyNameFilterAction;

export const buildSetRequestsAction = (
    requests: Array<Request>
): SetRequestsAction => {
    return { type: "set_requests", requests };
};

export const buildSetRequestNumberFilterAction = (
    requestNumber: string
): SetRequestNumberFilterAction => {
    return { type: "set_request_number_filter", requestNumber };
};

export const buildSetCompanyNameFilterAction = (
    companyName: string
): SetCompanyNameFilterAction => {
    return { type: "set_company_name_filter", companyName };
};
