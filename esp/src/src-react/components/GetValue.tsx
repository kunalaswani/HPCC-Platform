import * as React from "react";
import { DaliService } from "@hpcc-js/comms";
import { scopedLogger } from "@hpcc-js/util";

const logger = scopedLogger("src-react/components/GetValue.tsx");

const daliService = new DaliService({ baseUrl: "" });


interface GetValueProps {

}

export const GetValue: React.FunctionComponent<GetValueProps> = ({

}) => {

    const [getValue, setGetValue] = React.useState<string>("");

    React.useEffect(() => {
        daliService.GetValue({Path:""}).then(( response ) => {
            setGetValue(response.Result);
        }).catch(err => logger.error(err));
    }, []);

    return <div>
        {getValue}
    </div>;

}; 