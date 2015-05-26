var $modal = '<div class="modal-dialog">\n\
    <div class="modal-content">\n\
        <div class="modal-header">\n\
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n\
            <h4 class="modal-title">{{ title }}</h4>\n\
        </div>\n\
        <div class="modal-body">\n\
            <p>{{ body }}</p>\n\
        </div>\n\
        <div class="modal-footer">\n\
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>\n\
            <button type="button" class="btn btn-danger delete-remove">{{ ok }}</button>\n\
        </div>\n\
    </div>\n\
</div>';

var delay = '2000';

$("[rel='tooltip']").tooltip();

$('a').on('click', function() {
    $(this).blur();
});

if ($('span#fosuserbundle-errors').text() !== '') {
    $('#flash_message').message('danger',$('span#fosuserbundle-errors').text(), '#flash_title', false);
}
    
$('button.entity-submit-delete').on('click', function(e){
    e.preventDefault();
    var $this = this;
    var data = {
        title: 'Delete record',
        body: '¿Are you sure to delete this record?',
        ok: 'Delete'
    };
    modal = $.mustache($modal, data);
    $('#nploidModal').html(modal).modal();

    $(document).on('click', 'button.delete-remove', function(){
        $($this).parent().parent().parent().submit();
        $(this).parent().find('button').attr('data-dismiss', 'modal').trigger('click');
    });
});
//$('.datetimepicker').datetimepicker();