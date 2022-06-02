import * as React from "react";
import { DaliService } from "@hpcc-js/comms";
import { scopedLogger } from "@hpcc-js/util";

const logger = scopedLogger("src-react/components/GetDFSCSV.tsx");

const daliService = new DaliService({ baseUrl: "" });


interface GetDFSCSVProps {

}

export const GetDFSCSV: React.FunctionComponent<GetDFSCSVProps> = ({

}) => {

    const [dfsCsv, setDfsCsv] = React.useState<string>("");

    React.useEffect(() => {
        daliService.GetDFSCSV({LogicalNameMask:""}).then(( response ) => {
            setDfsCsv(response.Result);
        }).catch(err => logger.error(err));
    }, []);

    return <div>
        {dfsCsv}
    </div>;

}; 