$("[rel='tooltip']").tooltip();
$(document).on('ready', function(){
    var canvas = document.getElementById('grid');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        background.onload = function() {
            canvas.width = background.width;
            canvas.height = background.height;
            ctx.drawImage(background, 0, 0);
        };
        var rect = canvas.getBoundingClientRect();
        DistGrid.init(ctx, rect, canvas, canvas.width, canvas.height);
        DistGrid.code = document.getElementById("code");
        $('canvas#grid').mousemove(function(e) {
            var pos = DistGrid.findPos(this);
            var x = e.pageX - pos.x;
            var y = e.pageY - pos.y;
            DistGrid.coo = [x,y];
        });
        
        $('canvas#grid').click(function(){
            DistGrid.mouseClickEventHandler();
        });
        
        $('input#vertical-lines').on('change', function(){
            $('#position').html('');
            if ($(this).prop('checked', true)) {
                DistGrid.setVerticalLines();
            }
        });
        $('input#split-in').on('change', function(){
            $('#position').html('');
            if ($(this).prop('checked', true)) {
                DistGrid.split = $(this).val();
                DistGrid.splitIn();
            }
        });
        $('input#new-bezier').on('change', function(){
            $('#position').html('');
            if ($(this).prop('checked', true)) {
                DistGrid.newBezier();
            }
        });
        $('input#place-bezier').on('change', function(){
            $('#position').html('');
            if ($(this).prop('checked', true)) {
                DistGrid.placeBezier();
            }
        });
        $('input#place-alleles').on('change', function(){
            $('#position').html('');
            if ($(this).prop('checked', true)) {
                DistGrid.allelesRecorded = $(this).data('values');
                DistGrid.placeAlleles();
            }
        });
        $('input#dots').on('change', function(){
            if ($(this).prop('checked', true)) {
                DistGrid.setDots();
            }
        });
        $('input#matrix').on('change', function(){
            $('#position').html('');
            if ($(this).prop('checked', true)) {
                DistGrid.setMatrix();
            }
        });
        $(document).keyup(function(e) {
            if (e.keyCode === 27) {
                DistGrid.undo();
            }
        });
    } else {
        $(body).append('<p>Whoops! Your browser must support HTML5 Canvas for this tool to work.</p>');
    }
    
    $(".slider").on("input", updateProperties);
    $(".slider").on("change", updateValue);
    $("#properties").on("reset", function(){
        setTimeout(function(){updateProperties(); updateValue();}, 50);
    });
    function updateProperties() {
        var bright = $('#brightness').val();
        var contrast = $('#contrast').val();
        var invert = $('#invert').val();
        var opacity = $('#opacity').val();
        var sepia = $('#sepia').val();

        $('#bright').text("Bright: " + bright);
        $('#cont').text("Contrast: " + contrast);
        $('#inv').text("Invert: " + invert + "%");
        $('#opa').text("Opacity: " + opacity + "%");
        $('#sep').text("Sepia: " + sepia + "%");

        $("canvas#grid").css("-moz-filter", "brightness(" + bright + ") " + "contrast(" + contrast + ") " + "invert(" + invert + "%) " + "opacity(" + opacity + "%) " + "sepia(" + sepia + "%)");
        $("canvas#grid").css("-webkit-filter", "brightness(" + bright + ") " + "contrast(" + contrast + ") " + "invert(" + invert + "%) " + "opacity(" + opacity + "%) " + "sepia(" + sepia + "%)");
        $("canvas#grid").css("-o-filter", "brightness(" + bright + ") " + "contrast(" + contrast + ") " + "invert(" + invert + "%) " + "opacity(" + opacity + "%) " + "sepia(" + sepia + "%)");
        $("canvas#grid").css("-ms-filter", "brightness(" + bright + ") " + "contrast(" + contrast + ") " + "invert(" + invert + "%) " + "opacity(" + opacity + "%) " + "sepia(" + sepia + "%)");
        $("canvas#grid").css("filter", "brightness(" + bright + ") " + "contrast(" + contrast + ") " + "invert(" + invert + "%) " + "opacity(" + opacity + "%) " + "sepia(" + sepia + "%)");
    }
    function updateValue() {
        DistGrid.bright = $('#brightness').val();
        DistGrid.contrast = $('#contrast').val();
        DistGrid.invert = $('#invert').val();
        DistGrid.opacity = $('#opacity').val();
        DistGrid.sepia = $('#sepia').val();
        MongoDBGelImage.mongoSetBright();
        MongoDBGelImage.mongoSetContrast();
        MongoDBGelImage.mongoSetInvert();
        MongoDBGelImage.mongoSetOpacity();
        MongoDBGelImage.mongoSetSepia();
    }
    $("button.offset").on("click", function(){
        var position = $("canvas#grid").css("background-position");
        var pos = position.split(" ");
            if ($(this).attr("id") === "offset-down") {
                var number = parseInt(pos[1].split("%"));
                var newnumber = number + parseInt(1);
                $("canvas#grid").css("background-position", pos[0] + " " + newnumber + "px");
                
            } else if ($(this).attr("id") === "offset-up") {
                var number = parseInt(pos[1].split("%"));
                var newnumber = number - parseInt(1);
                $("canvas#grid").css("background-position", pos[0] + " " + newnumber + "px");

            } else if ($(this).attr("id") === "offset-right") {
                var number = parseInt(pos[0].split("%"));
                var newnumber = number + parseInt(1);
                $("canvas#grid").css("background-position", newnumber + "px" + " " + pos[1]);

            } else if ($(this).attr("id") === "offset-left") {
                var number = parseInt(pos[0].split("%"));
                $("canvas#grid").css("background-position", newnumber + "px" + " " + pos[1]);
                var newnumber = number - parseInt(1);

            }
    });
});