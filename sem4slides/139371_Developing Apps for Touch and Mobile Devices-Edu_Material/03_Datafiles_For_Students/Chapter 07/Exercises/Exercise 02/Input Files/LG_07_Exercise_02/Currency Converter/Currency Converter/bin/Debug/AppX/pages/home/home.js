(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var devicesList = new WinJS.Binding.List();

            list.winControl.itemDataSource = devicesList.dataSource;
            list.winControl.itemTemplate = template;

            devicesList.push({ imageUrl: "img/icon1.png", name: "US Dollar to Euro" }, { imageUrl: "img/icon2.png", name: "US Dollar to Indian Rupee" }, { imageUrl: "img/icon3.png", name: "Euro to US Dollar" }, { imageUrl: "img/icon4.png", name: "Euro to Indian Rupee" }, { imageUrl: "img/icon5.png", name: "Indian Rupee to US Dollar" }, { imageUrl: "img/icon6.png", name: "Indian Rupee to Euro" });

            document.getElementById("list").addEventListener("iteminvoked", itemInvokedHandler, false);
        }
    });

    function itemInvokedHandler(eventObject) {
        eventObject.detail.itemPromise.done(function (invokedItem) {
            var sel = invokedItem.index;
            var obj = { Type: sel };
            WinJS.Navigation.navigate("/pages/convert/convert.html", obj);
        });
    }
})();
