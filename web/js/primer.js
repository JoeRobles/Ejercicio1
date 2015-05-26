$('div#nploid_mainbundle_primer_allelesRecorded').parent('div').remove();

var $collectionHolder;
var $addAlleleLink = $('<a />').attr('href', '#').addClass('addeallele_link').text('Add an Allele');
var $newLinkLi = $('<li />').append($addAlleleLink);

$(document).ready(function() {
    $('ul.allelesRecorded input').addClass('alleleInput');
    updateWeightRange();
    $('.alleleInput').keyup(function(){
        updateWeightRange();
    });
    $collectionHolder = $('ul.allelesRecorded');
    $collectionHolder.addClass('list-unstyled list-group').find('div').each(function() {
        $(this).find('label').remove();
        addAlleleFormDeleteLink($(this));
    });
    $collectionHolder.append($newLinkLi).data('index', $collectionHolder.find(':input').length);

    $addAlleleLink.on('click', function(e) {
        e.preventDefault();
        addAlleleForm($collectionHolder, $newLinkLi);
    });
    
    function addAlleleForm($collectionHolder, $newLinkLi) {
        var prototype = $collectionHolder.data('prototype');
        var index = $collectionHolder.data('index');
        var newForm = prototype.replace(/__name__/g, index);
        $collectionHolder.data('index', index + 1);
        var $newFormLi = $('<li />').append(newForm);
        $newLinkLi.before($newFormLi);
        addAlleleFormDeleteLink($newFormLi);
        $('ul.allelesRecorded:last-child input').addClass('alleleInput').focus();
        
        $('.alleleInput').keyup(function(){
            updateWeightRange();
        });
    }
    
    function addAlleleFormDeleteLink($alleleFormLi) {
        var $removeFormA = $('<a />').attr('href', '#').addClass('glyphicon glyphicon-remove');
        $alleleFormLi.append($removeFormA);

        $removeFormA.on('click', function(e) {
            e.preventDefault();
            $alleleFormLi.remove();
            updateWeightRange();
        });
    }
    
    function updateWeightRange() {
        var alleles = new Array();
        $('.alleleInput').length;
        $('.alleleInput').each(function(){
            alleles.push($(this).val());
        });
        $('#nploid_mainbundle_primer_weightRange').val(Math.min.apply(Math, alleles) + ' - ' + Math.max.apply(Math, alleles));
    }
});
