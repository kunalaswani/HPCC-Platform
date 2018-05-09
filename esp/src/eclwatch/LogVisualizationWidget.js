/*##############################################################################
#    HPCC SYSTEMS software Copyright (C) 2012 HPCC Systems®.
#
#    Licensed under the Apache License, Version 2.0 (the "License");
#    you may not use this file except in compliance with the License.
#    You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS,
#    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#    See the License for the specific language governing permissions and
#    limitations under the License.
############################################################################## */
define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/i18n",
    "dojo/i18n!./nls/hpcc",
    "dojo/_base/array",
    "dojo/on",
    "dojo/dom-class",
    "dojo/topic",

    "dijit/registry",
    "dijit/form/ToggleButton",
    "dijit/ToolbarSeparator",

    "dgrid/tree",
    "dgrid/extensions/ColumnHider",

    //"hpcc/GridDetailsWidget",
    "src/WsELK",
    "src/ESPWorkunit",
    "hpcc/DelayLoadWidget",
    "hpcc/_TabContainerWidget",
    "src/ESPUtil",
    "src/Utility",

    "dojo/text!../templates/LogVisualizationWidget.html"

], function (declare, lang, i18n, nlsHPCC, arrayUtil, on, domClass, topic,
                registry, ToggleButton, ToolbarSeparator,
                tree, ColumnHider,
                GridDetailsWidget, WsELK, ESPWorkunit, DelayLoadWidget, _TabContainerWidget, ESPUtil, Utility,
                template) {
    return declare("LogVisualizationWidget", [_TabContainerWidget], {
        i18n: nlsHPCC,

        //gridTitle: nlsHPCC.PrimaryMonitoring,
        //idProperty: "__hpcc_id",

        init: function (params) {
            var context = this;
            if (this.inherited(arguments))
                return;
            // this._refreshActionState();
            // this.refreshGrid();
            // this.startTimer();

            // topic.subscribe("hpcc/monitoring_component_update", function (topic) {
            //     context.refreshGrid();
            // });

            WsELK.GetConfigDetails({
                request: {}
            }).then(function (URL) {
                if (lang.exists("GetConfigDetailsResponse", response)) {
                    context.kibanaIP = response.GetConfigDetailsResponse.KibanaAddress;
                    context.kibanaPort = response.GetConfigDetailsResponse.KibanaPort;
                    context.kibanaURI = response.GetConfigDetailsResponse.KibanaURI;
                    URLSearchParams: dojoConfig.urlInfo.pathname = "context.kibanaIP" + ":" + "context.kibanaPort" + "context.kibanaURI";
                    style: "border: 0; width: 100%; height: 100%"
                }
            });
        },

        // createGrid: function (domID) {
        //     this.store.mayHaveChildren = function (item) {
        //         if (item.StatusReports && item.StatusReports.StatusReport && item.StatusReports.StatusReport.length) {
        //             return true;
        //         }
        //         return false;
        //     };

        //     this.store.getChildren = function (parent, options) {
        //        var retVal =  this.query({__hpcc_parentName: parent.__hpcc_id}, options);
        //        return retVal;
        //     };

        //     var retVal = new declare([ESPUtil.Grid(false, true)])({
        //         store: this.store,
        //         sort: [{ attribute: "StatusID", descending: true },{ attribute: "Status", descending: true }],
        //         columns: {
        //             StatusID: {label: "", width: 0, sortable: false, hidden: true},
        //             ComponentType: tree({
        //                 label: "Name", sortable: true, width:200,
        //                 formatter: function (Name, row) {
        //                     switch (row.Status) {
        //                         case "Normal":
        //                             return Utility.getImageHTML("normal.png") + Name;
        //                         case "Warning":
        //                             return Utility.getImageHTML("warning.png") + Name;
        //                         case "Error":
        //                             return Utility.getImageHTML("error.png") + Name;
        //                     }
        //                     return "";
        //                 }
        //             }),
        //             StatusDetails: {label: "Details", sortable: false},
        //             URL: {label: "URL", width: 200, sortable: false,
        //                 formatter: function (Name, row) {
        //                     if (Name) {
        //                         return "<a href=http://"+Name+" target='_blank'>" + Name + "</a>";
        //                     } else {
        //                         return "";
        //                     }
        //                 }},
        //             EndPoint: {label: "IP", sortable: true, width:140},
        //             TimeReportedStr: {label: "Time Reported", width:140, sortable: true},
        //             Status: { label: this.i18n.Severity, width: 130, sortable: false,
        //                 renderCell: function (object, value, node, options) {
        //                     switch (value) {
        //                         case "Error":
        //                             domClass.add(node, "ErrorCell");
        //                             break;
        //                         case "Warning":
        //                             domClass.add(node, "WarningCell");
        //                             break;
        //                         case "Normal":
        //                             domClass.add(node, "NormalCell");
        //                             break;
        //                     }
        //                     node.innerText = value;
        //                 }
        //             }
        //         }
        //     }, domID);

        //     return retVal;
        // },

        // refreshGrid: function () {
        //     var context = this;

        //     },

        // startTimer: function () {
        //     WsELK.MonitorComponentStatus({request: {}})
        // }
    });
});
