import * as React from "react";
import { DaliService } from "@hpcc-js/comms";
import { scopedLogger } from "@hpcc-js/util";

const logger = scopedLogger("src-react/components/GetDFSCSV.tsx");

const daliService = new DaliService({ baseUrl: "" });


interface GetDFSCSVProps {

}

export const GetDFSCSV: React.FunctionComponent<GetDFSCSVProps> = ({

}) => {

    const [_dfsCsv, setDfsCsv] = React.useState<any[]>([]);

    React.useEffect(() => {
        daliService.GetDFSCSV({}).then(({ GetDFSCSVResponse }) => {
            setDfsCsv(GetDFSCSVResponse.TpGroup.map(n => {
                return {
                    logicalNameMask
                };
            }));
        }).catch(err => logger.error(err));
    }, []);

    return <>
        GetDFSCSV content
    </>;

}; 