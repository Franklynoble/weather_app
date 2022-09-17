// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());

            // Defined the event list used for data binding.
            var eventItems = new WinJS.Binding.List();
            //Retrieve the reference of the Event table.
            var eventTable = MyEventDiaryClient.getTable('Event');
            //Insert data into the Event table.
            var insertEvent = function (eventItem) {
                if (tbTitle.value != "" && tbLocation != "" && taDescription.value != ""){
                    eventTable.insert(eventItem).done(function (eventItem) {
                        eventItems.push(eventItem);
                        tbTitle.value = "";
                        var date = new Date();
                        dtpickerDate.winControl.current = date;
                        tbLocation.value = "";
                        taDescription.value = "";
                    });
                }
                else {
                    var msg = new Windows.UI.Popups.MessageDialog("Fields cannot be left blank.");
                    msg.showAsync();
                    return;
                }
            };

            bttnAdd.addEventListener("click", function () {
                insertEvent({
                    title: tbTitle.value,
                    date: dtpickerDate.winControl.current.toDateString(),
                    location: tbLocation.value,
                    description: taDescription.value
                });
            });
            var refreshEventItems = function () {
                // This code refreshes the entries in the list by querying the Event table;
               eventTable.read().done(function (results) {
                    eventItems = new WinJS.Binding.List(results);
                    listItems.winControl.itemDataSource = eventItems.dataSource;
                    tbTitle.value = "";
                    var date = new Date();
                    dtpickerDate.winControl.current = date;
                    tbLocation.value = "";
                    taDescription.value = "";
                });
            };
            refreshEventItems();
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();