$(document) .ready(function(){
    update_montants();
    $('.quantité, .prix') .on('keyup keypress blur change',
        function(e) {
        update_montants();
        });
});

function update_montants(){
    var sum = 0.0;
    $('#maTable > tbody > tr').each(function() {
        var quantité = $(this).find('.quantité').val();
        var prix = $(this).find('.prix').val();
        var montant = (quantité*prix)
        sum+=montant;
        $(this).find('.montant').text(''+montant);
    });
    $('.total').text(sum);
}

var incrementQuantité;
var decrementQuantité;
var plusBtn = $(".quant-panier-plus");
var moinsBtn = $("quant-panier-moins");
var incrementQuantité = plusBtn.click(function() {
    var $n = $(this)
    .parent(".contenu-boutton")
    .find(".quantité");
    $n.val(Number($n.val())+1 );
    update_montants();
});

var decrementQuantité = moinsBtn.click(function() {
    var $n = $(this)
    .parent(".contenu-boutton")
    .find(".quantité");
    var QuantitéVal = Number($n.val());
    if (QuantitéVal > 0) {
        $n.val(QuantitéVal-1);
    }
    update_montants
});