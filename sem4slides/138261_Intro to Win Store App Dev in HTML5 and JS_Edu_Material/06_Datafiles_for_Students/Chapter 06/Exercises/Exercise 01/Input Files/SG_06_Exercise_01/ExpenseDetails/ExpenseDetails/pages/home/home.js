function bttnAdd_click(eventInfo) {
    if (tbAmount.value == "" || taDescription.textContent == "" || cboxPaymentMode.selectedIndex == 0) {

        var strMessage = "Fields cannot be left blank.";
        var msg = new Windows.UI.Popups.MessageDialog(strMessage);
        msg.showAsync();
    }
    else {
        var strMessage = "Expense added successfully.";
        var msg = new Windows.UI.Popups.MessageDialog(strMessage);
        msg.showAsync();
    }
}
function checkKeyStroke(args) {
    if (args.keyCode < 48 || args.keyCode > 57)
        return false;

}
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            bttnAdd.onclick = bttnAdd_click;
            tbAmount.onkeypress = checkKeyStroke;
            taDescription.onkeypress = function (args) {
                return (taDescription.value.length < 120);
            }
        }
    });
})();
