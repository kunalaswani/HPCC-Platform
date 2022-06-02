import * as React from "react";
import { DaliService } from "@hpcc-js/comms";
import { scopedLogger } from "@hpcc-js/util";

const logger = scopedLogger("src-react/components/GetLogicalFile.tsx");

const daliService = new DaliService({ baseUrl: "" });


interface GetLogicalFileProps {

}

export const GetLogicalFile: React.FunctionComponent<GetLogicalFileProps> = ({

}) => {

    const [LogicalFile, setLogicalFile] = React.useState<string>("");

    React.useEffect(() => {
        daliService.GetLogicalFile({FileName:""}).then(( response ) => {
            setLogicalFile(response.Result);
        }).catch(err => logger.error(err));
    }, []);

    return <div>
        {LogicalFile}
    </div>;

}; 