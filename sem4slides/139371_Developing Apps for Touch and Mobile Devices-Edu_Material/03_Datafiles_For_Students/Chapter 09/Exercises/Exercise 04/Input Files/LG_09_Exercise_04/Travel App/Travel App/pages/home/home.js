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

            devicesList.push({ imageUrl: "img/icon_newyork.jpg", name: "New York" }, { imageUrl: "img/icon_newjersey.jpg", name: "New Jersey" }, { imageUrl: "img/icon_california.jpg", name: "California" }, { imageUrl: "img/icon_mauritius.jpg", name: "Mauritius" }, { imageUrl: "img/icon_shanghai.jpg", name: "Shanghai" });

            document.getElementById("list").addEventListener("iteminvoked", itemInvokedHandler, false);
            //.oniteminvoked = itemInvokedHandler;
        }
    });

    function itemInvokedHandler(eventObject) {
        eventObject.detail.itemPromise.done(function (invokedItem) {
            WinJS.Navigation.navigate("/pages/page" + (invokedItem.index + 1) + "/page" + (invokedItem.index + 1) + ".html");
        });
    }
})();
