import * as ESPRequest from "./ESPRequest";

export function Add(params) {
    return ESPRequest.send("WsDali", "Add", params);
}
export function Count(params) {
    return ESPRequest.send("WsDali", "Count", params);
}
export function DFSCheck(params) {
    return ESPRequest.send("WsDali", "DFSCheck", params);
}
export function DFSExists(params) {
    return ESPRequest.send("WsDali", "DFSExists", params);
}
export function DFSLS(params) {
    return ESPRequest.send("WsDali", "DFSLS", params);
}
export function Delete(params) {
    return ESPRequest.send("WsDali", "Delete", params);
}
export function GetDFSCSV(params) {
    return ESPRequest.send("WsDali", "GetDFSCSV", params);
}
export function GetDFSMap(params) {
    return ESPRequest.send("WsDali", "GetDFSMap", params);
}
export function GetDFSParents(params) {
    return ESPRequest.send("WsDali", "GetDFSParents", params);
}
export function GetLogicalFile(params) {
    return ESPRequest.send("WsDali", "GetLogicalFile", params);
}
export function GetLogicalFilePart(params) {
    return ESPRequest.send("WsDali", "GetLogicalFilePart", params);
}
export function GetProtectedList(params) {
    return ESPRequest.send("WsDali", "GetProtectedList", params);
}
export function GetValue(params) {
    return ESPRequest.send("WsDali", "GetValue", params);
}
export function Import(params) {
    return ESPRequest.send("WsDali", "Import", params);
}
export function Ping(params) {
    return ESPRequest.send("WsDali", "Ping", params);
}
export function SetLogicalFilePartAttr(params) {
    return ESPRequest.send("WsDali", "SetLogicalFilePartAttr", params);
}
export function SetProtected(params) {
    return ESPRequest.send("WsDali", "SetProtected", params);
}
export function SetUnprotected(params) {
    return ESPRequest.send("WsDali", "SetUnprotected", params);
}
export function SetValue(params) {
    return ESPRequest.send("WsDali", "SetValue", params);
}
export function parseBuildString(build) {
    const retVal = {
        orig: build,
        prefix: "",
        postfix: "",
        version: ""
    };
    if (!build) {
        return retVal;
    }
    retVal.orig = build;
    retVal.prefix = "";
    retVal.postfix = "";
    let verArray = build.split("[");
    if (verArray.length > 1) {
        retVal.postfix = verArray[1].split("]")[0];
    }
    verArray = verArray[0].split("_");
    if (verArray.length > 1) {
        retVal.prefix = verArray[0];
        verArray.splice(0, 1);
    }
    retVal.version = verArray.join("_");
    return retVal;
}