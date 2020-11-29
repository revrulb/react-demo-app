import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
    SetCompanyNameFilterAction,
    buildSetCompanyNameFilterAction,
    SetRequestNumberFilterAction,
    buildSetRequestNumberFilterAction,
    SetRequestsAction,
    buildSetRequestsAction
} from "State";
import { Request } from "Models";

export const useSetCompanyNameInFilters = () => {
    const dispatch = useDispatch<Dispatch<SetCompanyNameFilterAction>>();

    return (companyName: string) =>
        dispatch(buildSetCompanyNameFilterAction(companyName));
};

export const useSetRequestNumberInFilters = () => {
    const dispatch = useDispatch<Dispatch<SetRequestNumberFilterAction>>();

    return (requestNumber: string) =>
        dispatch(buildSetRequestNumberFilterAction(requestNumber));
};

export const useSetRequests = () => {
    const dispatch = useDispatch<Dispatch<SetRequestsAction>>();

    return (requests: Array<Request>) =>
        dispatch(buildSetRequestsAction(requests));
};
