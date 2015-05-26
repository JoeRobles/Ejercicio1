$(document).ready(function () {
    $.getJSON('/sample/api/massiveall', function(data){
        var container = document.getElementById('massive');
        var exampleConsole = $('#massiveconsole');
        var load = document.getElementById('load');
        var save = document.getElementById('save');
        var autosave = document.getElementById('autosave');
        var autosaveNotification;
        var hot;

        hot = new Handsontable(container, {
            data: data,
            minSpareRows: 1,
            rowHeaders: true,
            colHeaders: ['Id', 'Accession Number', 'Status'],
            columns: [
                { data: 'sample_id' },
                { data: 'accession_number' },
                { data: 'sample_status' },
            ],
            contextMenu: true,
            afterChange: function (change, source) {
                if (source === 'loadData') {
                    return; //don't save this change
                }
                if (!autosave.checked) {
                    return;
                }
                clearTimeout(autosaveNotification);
                $.ajax({
                    dataType: "json",
                    url: '/sample/api/savemassive',
                    data: { data: JSON.stringify(change) }
                }).done(function (data) {
                    exampleConsole.html('Autosaved (' + change.length + ' ' + 'cell' + (change.length > 1 ? 's' : '') + ')');
                    autosaveNotification = setTimeout(function () {
                        exampleConsole.html('Changes will be autosaved');
                    }, 1000);
                });
            }
        });

        Handsontable.Dom.addEvent(load, 'click', function () {
            $.getJSON('/sample/api/massiveall', '', function(res) {
                hot.loadData(res);
                exampleConsole.html('Data loaded');
            });
        });
//
        Handsontable.Dom.addEvent(save, 'click', function () {
            // save all cell's data
            $.ajax({
                dataType: "json",
                url: '/sample/api/savemassive',
                data: { data: JSON.stringify(hot.getData()) },
            }).done(function (res) {
                var response = JSON.parse(res.response);

                if (response.result === 'ok') {
                    exampleConsole.html('Data saved');
                } else {
                    exampleConsole.html('Save error');
                }
            });
        });

        Handsontable.Dom.addEvent(autosave, 'click', function () {
            if (autosave.checked) {
                exampleConsole.html('Changes will be autosaved');
            } else {
                exampleConsole.html('Changes will not be autosaved');
            }
        });
    });
});
//$(document).ready(function () {
//    $.getJSON('/sample/api/massiveall', function(data){
//        var $container = $("#massive");
//        var $console = $("#massive_console");
//        var $parent = $container.parent();
//        var autosaveNotification;
//        $container.handsontable({
//            data: data,
//            minSpareRows: 1,
//            rowHeaders: true,
//            colHeaders: ['Id', 'Accession Number', 'Status'],
//            columns: [
//                { data: 'sample_id' },
//                { data: 'accession_number' },
//                { data: 'sample_status' },
//            ],
//            contextMenu: true,
//
//            afterChange: function (change, source) {
//                if (source === 'loadData') {
//                    return; //don't save this change
//                }
////                if ($parent.find('input[name=autosave]').is(':checked')) {
//                    clearTimeout(autosaveNotification);
//                    $.ajax({
//                        url: "json/save.json",
//                        dataType: "json",
//                        type: "POST",
//                        data: JSON.stringify({data: change}), //contains changed cells' data
//                        complete: function (data) {
//                            $console.text('Autosaved (' + change.length + ' ' +
//                                'cell' + (change.length > 1 ? 's' : '') + ')');
//                            autosaveNotification = setTimeout(function () {
//                                $console.text('Changes will be autosaved');
//                            }, 1000);
//                        }
//                    });
////                }
//            }
//        });
//        var handsontable = $container.data('handsontable');
//
//        $parent.find('button[name=load]').click(function () {
//            $.ajax({
//                url: "json/load.json",
//                dataType: 'json',
//                type: 'GET',
//                success: function (res) {
//                    handsontable.loadData(res.data);
//                    $console.text('Data loaded');
//                }
//            });
//        });
//
//        $parent.find('button[name=save]').click(function () {
//            $.ajax({
//                url: "json/save.json",
//                data: JSON.stringify({"data": handsontable.getData()}), //returns all cells' data
//                dataType: 'json',
//                type: 'POST',
//                success: function (res) {
//                    if (res.result === 'ok') {
//                        $console.text('Data saved');
//                    } else {
//                        $console.text('Save error');
//                    }
//                },
//                error: function () {
//                    $console.text(
//                        'Save error. POST method is not allowed on GitHub Pages. ' +
//                        'Run this example on your own server to see the success message.'
//                    );
//                }
//            });
//        });
//    });
//});