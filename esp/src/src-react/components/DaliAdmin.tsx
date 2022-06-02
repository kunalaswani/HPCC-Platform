import * as React from "react";
import { Pivot, PivotItem } from "@fluentui/react";
import { SizeMe } from "react-sizeme";
import { pushUrl } from "../util/history";
import { pivotItemStyle } from "../layouts/pivot";
import { GetDFSCSV } from "./GetDFSCSV";
import { GetDFSMap } from "./GetDFSMap";
import { GetDFSParents } from "./GetDFSParents";
import { GetLogicalFile } from "./GetLogicalFile";
import { GetLogicalFilePart } from "./GetLogicalFilePart";
import { GetProtectedList } from "./GetProtectedList";
import { GetValue } from "./GetValue";
import nlsHPCC from "src/nlsHPCC";

interface DaliAdminProps {
    filter?: object;
    tab?: string;
    name?: string;
    baseDn?: string;
}

export const DaliAdmin: React.FunctionComponent<DaliAdminProps> = ({
    filter,
    tab = "GetDFSCSV",
    name,
    baseDn
}) => {

    return <>
    <SizeMe monitorHeight>{({ size }) =>
        <Pivot overflowBehavior="menu" style={{ height: "100%" }} selectedKey={tab} onLinkClick={evt => pushUrl(`/wsdali/${tab}/${evt.props.itemKey}`)}>
            <PivotItem headerText={nlsHPCC.GetDFSCSV} style={pivotItemStyle(size)} >
                <GetDFSCSV />
            </PivotItem>
            <PivotItem headerText={nlsHPCC.GetDFSMap} style={pivotItemStyle(size)} >
                <GetDFSMap />
            </PivotItem>
            <PivotItem headerText={nlsHPCC.GetDFSParents} style={pivotItemStyle(size)} >
                <GetDFSParents />
            </PivotItem>
            <PivotItem headerText={nlsHPCC.GetLogicalFile} style={pivotItemStyle(size)} >
                <GetLogicalFile />
            </PivotItem>
            <PivotItem headerText={nlsHPCC.GetLogicalFilePart} style={pivotItemStyle(size)} >
                <GetLogicalFilePart />
            </PivotItem>
            <PivotItem headerText={nlsHPCC.GetProtectedList} style={pivotItemStyle(size)} >
                <GetProtectedList />
            </PivotItem>
            <PivotItem headerText={nlsHPCC.GetValue} style={pivotItemStyle(size)} >
                <GetValue  />
            </PivotItem>
        </Pivot>
    }</SizeMe>;
    </>;

};