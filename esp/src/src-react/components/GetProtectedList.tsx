import * as React from "react";
import { DaliService } from "@hpcc-js/comms";
import { scopedLogger } from "@hpcc-js/util";

const logger = scopedLogger("src-react/components/GetProtectedList.tsx");

const daliService = new DaliService({ baseUrl: "" });


interface GetProtectedListProps {

}

export const GetProtectedList: React.FunctionComponent<GetProtectedListProps> = ({

}) => {

    const [protectedList, setProtectedList] = React.useState<string>("");

    React.useEffect(() => {
        daliService.GetProtectedList({FileName:"", CallerId:""}).then(( response ) => {
            setProtectedList(response.Result);
        }).catch(err => logger.error(err));
    }, []);

    return <div>
        {protectedList}
    </div>;

}; 