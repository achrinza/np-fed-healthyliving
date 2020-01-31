$(document).ready(function() {
    var score = 0;
    $('#q2').hide();
    $('#q3').hide();
    $('#q4').hide();
    $('#q5').hide();
    $(".next-btn").off().click(function() {
        var id = parseInt($(this).val())
        if(id == 1 && ($('#q1-value').val() == '' || $('#q1-value').val() == null)){
                $('#q1-error').text('Please enter your name')
        }
        else{
            var inputId = '#q' + id + '-value';
            $('#q1-error').text('');
            if(id < 4 && id > 1){
                score += parseInt($(inputId).val());
            }
            else{
                $('#result-title').text('Hey ' + $('#q1-value').val());
                if(score < 6){
                    $('#result').text('You are very healthy');
                }
                else{
                    $('#result').text("It's time for you to go exercise and have a balance diet");
                }
            }
            if(id < 5){
                var id1 = '#q'+ id;
                var id2 = '#q'+ (id + 1);
                $(id1).addClass('fadeOutRight').delay(500).queue(function(next){
                    $(id1).hide().removeClass('fadeInLeft').removeClass('fadeOutRight');
                    $(id2).addClass('fadeInLeft').show();
                    next();
                });
            }
        }
    });
    $(".reset").off().click(function() {
        score = 0;
        $('#q5').addClass('fadeOutRight').delay(500).queue(function(next){
            $('#q5').hide();
            $('#q1').addClass('fadeInLeft').show();
            $('#q5').removeClass('fadeOutRight');
            next();
        });
    });
});