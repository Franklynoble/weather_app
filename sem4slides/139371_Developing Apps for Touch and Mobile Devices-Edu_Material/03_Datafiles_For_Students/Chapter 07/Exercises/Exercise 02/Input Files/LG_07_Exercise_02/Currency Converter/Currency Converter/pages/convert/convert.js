// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var type;

    WinJS.UI.Pages.define("/pages/convert/convert.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            type = options.Type;
            //var tile = document.getElementById("contitle");
            if (type == 0) {
                document.getElementById("contitle").innerText = "US Dollar to Euro Conversion";
            } else if (type == 1) {
                document.getElementById("contitle").innerText = "US Dollar to Indian Rupee";
            } else if (type == 2) {
                document.getElementById("contitle").innerText = "Euro to US Dollar Conversion";
            } else if (type == 3) {
                document.getElementById("contitle").innerText = "Euro to Indian Rupee Conversion";
            } else if (type == 4) {
                document.getElementById("contitle").innerText = "Indian Rupee to US Dollar Conversion";
            } else if (type == 5) {
                document.getElementById("contitle").innerText = "US Dollar to Euro Conversion";
            }
            document.getElementById("btnConvert").addEventListener("click", onConvert, false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });

    function onConvert() {
        var num, res, msg;
        num = document.getElementById("txtNum").value;
        if (num.length != 0) {
            if (type == 0) {
                res = num + " US Dollar = " + (num * 0.8) + " Euro";
            } else if (type == 1) {
                res = num + " US Dollar = " + (num * 61.48) + " Indian Rupee";
            } else if (type == 2) {
                res = num + " Euro = " + (num * 1.24) + " US Dollar";
            } else if (type == 3) {
                res = num + " Euro = " + (num * 76.47) + " Indian Rupee";
            } else if (type == 4) {
                res = num + " Indian Rupee = " + (num * 0.016) + " US Dollar";
            } else if (type == 5) {
                res = num + " Indian Rupee = " + (num * 0.013) + " Euro";
            }
            var msg = Windows.UI.Popups.MessageDialog(res);
            msg.showAsync();
        } else {
            var msg = Windows.UI.Popups.MessageDialog("Please enter a value.", "ERROR");
            msg.showAsync();
        }
    }
})();
