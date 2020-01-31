
    $('#carbs').hide();
    $('#meat').hide();
    
    $(document).ready(function() {
        $('#veggie').off().click(function() {
            if ($('#meat').is(':visible')){
                $('#meat').fadeOut(100);
            }
            if($('#carbs').is(':visible')) {
                $('#carbs').fadeOut(100);
            }
            $('#veg').delay(700).fadeIn(1000);
        })
        $('#carbos').off().click(function() {
            if ($('#meat').is(':visible')){
                $('#meat').fadeOut(100);
            }
            if ($('#veg').is(':visible')){
                $('#veg').fadeOut(100);
            }
            $('#carbs').delay(700).fadeIn(1000);
        })
        $('#protein').off().click(function() {
            if ($('#veg').is(':visible')){
                $('#veg').fadeOut(100);
            }
            if ($('#carbs').is(':visible')){
                $('#carbs').fadeOut(100);
            }
            $('#meat').delay(700).fadeIn(1000);
        })
    })