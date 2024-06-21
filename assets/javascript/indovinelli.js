//opzioni multiple

$(document).ready(function() {
        $(".multiple-option-item").click(function() {
            // Verifica se l'opzione cliccata è la risposta corretta
            if ($(this).hasClass("right-answer")) {
                $(this).css("background-color", "green");
                // Mostra la sezione nascosta nota che la sezione da mostrare è selezionata con ID
                $("#next-x").removeAttr("hidden");
                $('html, body').animate({
                    scrollTop: $("#next-x").offset().top -75
                }, 300);
            } else {
                $(this).css("background-color", "red");
                // Nascondi la sezione nascosta se viene cliccata una risposta sbagliata
                $("#next-x").attr("hidden", true);
            }
    
            // Rimuovi gli stili di background dalle altre opzioni
            $(".multiple-option-item").not(this).css("background-color", "");
        });



       //password 

        $("#btn-puzzle-y").click(function() {
            var correctAnswer = $(".right-word-container").data("codeword"); // Get the codeword from body data attribute
            var userAnswer = $("#right-word-y").val().trim().toLowerCase();
    
            if (userAnswer === correctAnswer.toLowerCase()) {
                $("#next-y").removeAttr("hidden");
                $("#right-word-y").css("border", "2px solid green");
    
                $('html, body').animate({
                    scrollTop: $("#next-y").offset().top -75
                }, 300);
            } else {
                $("#next-y").attr("hidden", true);
                $("input").addClass('incorrect'); // Aggiunge l'effetto di shaking
                $("#right-word-y").css("border", "2px solid red");
            }
        });
   



 


    //vero falso 
    $('.true-false-box').on('click', function() {
        if ($(this).hasClass('right-answer')) {
            $(this).addClass('correct').siblings().removeClass('correct');
            $(this).css('transform', 'scale(1.1)'); // Aggiunge l'effetto di scaling
            const nextId = $(this).data('toggle-id');
            $('#' + nextId).removeAttr('hidden'); // Mostra il prossimo step
        } else {
            $(this).addClass('incorrect'); // Aggiunge l'effetto di shaking
        }
    });

    // Rimuove le classi di effetto quando l'animazione è completata
    $('.true-false-box').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
        $(this).removeClass('incorrect');
    });


    });
    
    
    