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

export const useSetFilters = () => {
    const setCompanyNameDispatch = useDispatch<
        Dispatch<SetCompanyNameFilterAction>
    >();

    const setRequestNumberDispatch = useDispatch<
        Dispatch<SetRequestNumberFilterAction>
    >();

    return (companyName: string, requestNumber: string) => {
        setCompanyNameDispatch(buildSetCompanyNameFilterAction(companyName));
        setRequestNumberDispatch(
            buildSetRequestNumberFilterAction(requestNumber)
        );
    };
};

export const useSetRequests = () => {
    const dispatch = useDispatch<Dispatch<SetRequestsAction>>();

    return (requests: Array<Request>) =>
        dispatch(buildSetRequestsAction(requests));
};
