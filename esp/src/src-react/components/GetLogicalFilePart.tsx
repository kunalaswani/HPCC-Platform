import * as React from "react";
import { DaliService } from "@hpcc-js/comms";
import { scopedLogger } from "@hpcc-js/util";

const logger = scopedLogger("src-react/components/GetLogicalFilePart.tsx");

const daliService = new DaliService({ baseUrl: "" });


interface GetLogicalFilePartProps {

}

export const GetLogicalFilePart: React.FunctionComponent<GetLogicalFilePartProps> = ({

}) => {

    const [LogicalFilePart, setLogicalFilePart] = React.useState<string>("");
    const [partNumber, setPartNumber] = React.useState<number>();

    React.useEffect(() => {
        daliService.GetLogicalFilePart({FileName:""}).then(( response ) => {
            setLogicalFilePart(response.Result);
        }).catch(err => logger.error(err));
    }, []);

    return <div>
        {LogicalFilePart}
    </div>;

}; 