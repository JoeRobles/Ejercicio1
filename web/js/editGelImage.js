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
            function removeRepeated(){
                $right.find('option').each(function(index, option){
                    $left.find('option[value="' + option.value + '"]').remove();
                });
            }
            var elems = $right.find('option'), count = elems.length;
            elems.each(function(i){
                if ($(this).attr('selected') == null) {
                    $(this).remove();
                }
                if (!--count) removeRepeated();
            });            
        }
    });
});