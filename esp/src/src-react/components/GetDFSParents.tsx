import * as React from "react";
import { DaliService } from "@hpcc-js/comms";
import { scopedLogger } from "@hpcc-js/util";

const logger = scopedLogger("src-react/components/GetDFSParents.tsx");

const daliService = new DaliService({ baseUrl: "" });


interface GetDFSParentsProps {

}

export const GetDFSParents: React.FunctionComponent<GetDFSParentsProps> = ({

}) => {

    const [dfsParents, setDfsParents] = React.useState<string>("");

    React.useEffect(() => {
        daliService.GetDFSParents({FileName:""}).then(( response ) => {
            setDfsParents(response.Result);
        }).catch(err => logger.error(err));
    }, []);

    return <div>
        {dfsParents}
    </div>;

}; 