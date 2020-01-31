
    
    
    $(document).ready(function() {
        $('#carbs').hide();
        $('#meat').hide();
        $('#veggie').off().click(function() {
            if ($('#meat').is(':visible')){
                $('#meat').fadeOut('slow');
            }
            if($('#carbs').is(':visible')) {
                $('#carbs').fadeOut('slow');
            }
            $('#veg').delay('slow').fadeIn('slow');
        })
        $('#carbos').off().click(function() {
            if ($('#meat').is(':visible')){
                $('#meat').fadeOut('slow');
            }
            if ($('#veg').is(':visible')){
                $('#veg').fadeOut('slow');
            }
            $('#carbs').delay('slow').fadeIn('slow');
        })
        $('#protein').off().click(function() {
            if ($('#veg').is(':visible')){
                $('#veg').fadeOut('slow');
            }
            if ($('#carbs').is(':visible')){
                $('#carbs').fadeOut('slow');
            }
            $('#meat').delay('slow').fadeIn('slow');
        })
    })