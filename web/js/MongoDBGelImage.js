var MongoDBGelImage = {
    /**
     * Mongo Get All
     */
    mongoGetAll: function(){
        var result = $.ajax({
            url: '/gelimage/api/getAll',
            type: 'POST',
            async: false, 
            data: { id: DistGrid.mongoId },
            success: function(data){}
        }).responseText;
        console.log('result: ');
        console.log(result);
        return JSON.parse(result.replace(/"/g, ''));
    },
    /**
     * Mongo Get Beziers
     */
    mongoGetBeziers: function(){
        var result = $.ajax({
            url: '/gelimage/api/getBeziers',
            type: 'POST',
            async: false, 
            data: { id: DistGrid.mongoId },
            success: function(data){}
        }).responseText;
        
        return JSON.parse(result.replace(/"/g, ''));
    },
    /**
     * Mongo Set beziers
     */
    mongoSetBeziers: function(){
        $.ajax({
            url: '/gelimage/api/setBeziers',
            type: 'POST',
            data: { id: DistGrid.mongoId, beziers: DistGrid.beziers },
            dataType: 'json'
        });
    },
    /**
     * Mongo Get Columns
     */
    mongoGetColumns: function(){
        var result = $.ajax({
            url: '/gelimage/api/getColumns',
            type: 'POST',
            async: false, 
            data: { id: DistGrid.mongoId },
            success: function(data){}
        }).responseText;
        
        return JSON.parse(result.replace(/"/g, ''));
    },
    /**
     * Mongo Set Columns
     */
    mongoSetColumns: function(){
        $.ajax({
            url: '/gelimage/api/setColumns',
            type: 'POST',
            data: { id: DistGrid.mongoId, columns: DistGrid.columns },
            dataType: 'json'
        });
    },
    /**
     * Mongo Get Dots
     */
    mongoGetDots: function(){
        var result = $.ajax({
            url: '/gelimage/api/getDots',
            type: 'POST',
            async: false, 
            data: { id: DistGrid.mongoId },
            success: function(data){}
        }).responseText;
        
        return JSON.parse(result.replace(/"/g, ''));
    },
    /**
     * Mongo Set Columns
     */
    mongoSetDots: function(){
        $.ajax({
            url: '/gelimage/api/setDots',
            type: 'POST',
            data: { id: DistGrid.mongoId, dots: DistGrid.dots },
            dataType: 'json'
        });
    },
    /**
     * Mongo Get Matrix
     */
    mongoGetMatrix: function(){
        var result = $.ajax({
            url: '/gelimage/api/getMatrix',
            type: 'POST',
            async: false, 
            data: { id: DistGrid.mongoId },
            success: function(data){}
        }).responseText;
        
        return JSON.parse(result.replace(/"/g, ''));
    },
    /**
     * Mongo Set Matrix
     */
    mongoSetMatrix: function(){
        $.ajax({
            url: '/gelimage/api/setMatrix',
            type: 'POST',
            data: { id: DistGrid.mongoId, matrix: DistGrid.matrix },
            dataType: 'json'
        });
    },
    /**
     * Mongo Get Step
     */
    mongoGetStep: function(){
        var result = $.ajax({
            url: '/gelimage/api/getStep',
            type: 'POST',
            async: false, 
            data: { id: DistGrid.mongoId },
            success: function(data){}
        }).responseText;
        
        return JSON.parse(result.replace(/"/g, ''));
    },
    /**
     * Mongo Set Step
     */
    mongoSetStep: function(){
        $.ajax({
            url: '/gelimage/api/setStep',
            type: 'POST',
            data: { id: DistGrid.mongoId, step: DistGrid.step },
            dataType: 'json'
        });
    },
    /**
     * Mongo Set Bright
     */
    mongoSetBright: function(){
        $.ajax({
            url: '/gelimage/api/setBright',
            type: 'POST',
            data: { id: DistGrid.mongoId, bright: DistGrid.bright },
            dataType: 'json'
        });
    },
    /**
     * Mongo Set Contrast
     */
    mongoSetContrast: function(){
        $.ajax({
            url: '/gelimage/api/setContrast',
            type: 'POST',
            data: { id: DistGrid.mongoId, contrast: DistGrid.contrast },
            dataType: 'json'
        });
    },
    /**
     * Mongo Set Invert
     */
    mongoSetInvert: function(){
        $.ajax({
            url: '/gelimage/api/setInvert',
            type: 'POST',
            data: { id: DistGrid.mongoId, invert: DistGrid.invert },
            dataType: 'json'
        });
    },
    /**
     * Mongo Set Opacity
     */
    mongoSetOpacity: function(){
        $.ajax({
            url: '/gelimage/api/setOpacity',
            type: 'POST',
            data: { id: DistGrid.mongoId, opacity: DistGrid.opacity },
            dataType: 'json'
        });
    },
    /**
     * Mongo Set Sepia
     */
    mongoSetSepia: function(){
        $.ajax({
            url: '/gelimage/api/setSepia',
            type: 'POST',
            data: { id: DistGrid.mongoId, sepia: DistGrid.sepia },
            dataType: 'json'
        });
    }
};