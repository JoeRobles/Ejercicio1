var primerss = $('#nploid_mainbundle_gelimage_primers');
var primersa = primerss.data('primers').split(',');
primerss.find('option').each(function(){
    if (primersa.indexOf($(this).text()) === -1) {
        $(this).remove();
    }
});
$(document).on('ready', function() {
    $('#multiselect').multiselect({
        right: '#nploid_mainbundle_gelimage_samples',
        startUp: function($left, $right){
            $right.find('option').each(function(){
                $(this).remove();
            });            
        }
    });
    if (window.FileReader) {
        function handleFileSelectenrollmentuploaded(evt) {
            $('#prev-nploid_mainbundle_gelimage_file').html('');
            var files = evt.target.files;
            var f = files[0];
            var reader = new FileReader();
            reader.onload = (function(theFile) {
                return function(e) {
                    var img = $('<img />').attr({src: e.target.result, title: theFile.name, alt: theFile.name, "data-original-title": theFile.name});
                    $('#prev-nploid_mainbundle_gelimage_file').append(img);
                    $("[rel='tooltip']").tooltip();
                };
            })(f);
            reader.readAsDataURL(f);
        }
        document.getElementById('nploid_mainbundle_gelimage_file').addEventListener('change', handleFileSelectenrollmentuploaded, false);
    } else {
        $(body).append('<p>Whoops! Your browser must support HTML5 FileReader for this tool to work.</p>');
    }
    
});
