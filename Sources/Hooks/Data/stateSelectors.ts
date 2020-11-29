import { Filters, Request } from "Models";
import { useSelector } from "react-redux";
import {
    StateModel,
    getAllRequests,
    getCurrentFilters,
    getRequestsByFilters
} from "State";

export const useFilters = () => {
    return useSelector<StateModel, Filters>(getCurrentFilters);
};

export const useAllRequests = () => {
    return useSelector<StateModel, Array<Request>>(getAllRequests);
};

export const useRequiredRequests = () => {
    return useSelector<StateModel, Array<Request>>(getRequestsByFilters);
};
