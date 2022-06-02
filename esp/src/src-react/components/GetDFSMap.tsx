import * as React from "react";
import { DaliService } from "@hpcc-js/comms";
import { scopedLogger } from "@hpcc-js/util";

const logger = scopedLogger("src-react/components/GetDFSMap.tsx");

const daliService = new DaliService({ baseUrl: "" });


interface GetDFSMapProps {

}

export const GetDFSMap: React.FunctionComponent<GetDFSMapProps> = ({

}) => {

    const [dfsMap, setDfsMap] = React.useState<string>("");

    React.useEffect(() => {
        daliService.GetDFSMap({FileName:""}).then(( response ) => {
            setDfsMap(response.Result);
        }).catch(err => logger.error(err));
    }, []);

    return <div>
        {dfsMap}
    </div>;

}; 