import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
    SetFiltersAction,
    buildSetFiltersAction,
    SetRequestsAction,
    buildSetRequestsAction
} from "State";
import { Request } from "Models";

export const useSetFilters = () => {
    const setFiltersDispatch = useDispatch<Dispatch<SetFiltersAction>>();

    return (companyName: string, requestNumber: string) => {
        setFiltersDispatch(buildSetFiltersAction(companyName, requestNumber));
    };
};

export const useSetRequests = () => {
    const dispatch = useDispatch<Dispatch<SetRequestsAction>>();

    return (requests: Array<Request>) =>
        dispatch(buildSetRequestsAction(requests));
};
