import React from "react";
import { useRequiredRequests } from "Hooks";
import { RequestsTapeContainer } from "Views";
import { RequestItem } from "Components";

export const RequestsTape: React.FC = () => {
    const requiredRequests = useRequiredRequests();

    return (
        <RequestsTapeContainer>
            {requiredRequests.map((x) => (
                <RequestItem request={x} key={x.number} />
            ))}
        </RequestsTapeContainer>
    );
};
