$backofficediv = $('#back-office-container');
$backofficebutton = $('#switch-back-office');
$frontbutton = $('#switch-front');
$pagecontainer = $('#page-container');

$backproducts = $('#back-office-products');
$backvendors = $('#back-office-vendors');
$backcategories = $('#back-office-categories');
$backbrands = $('#back-office-brands');

$backproductsdisplay = $('#back-office-products-display');
$backvendorsdisplay = $('#back-office-vendors-display');
$backcatagoriesdisplay = $('#back-office-categories-display');
$backbrandsdisplay = $('#back-office-brands-display');



$backofficebutton.click(function() {
    $pagecontainer.addClass("hidden");
    $backofficediv.removeClass("hidden");
});

$frontbutton.click(function() {
    $pagecontainer.removeClass("hidden");
    $backofficediv.addClass("hidden");
});



$backproducts.click(function() {
    $backofficediv.addClass("hidden");
    $backproductsdisplay.removeClass("hidden");
});
$backvendors.click(function() {
    $backofficediv.addClass("hidden");
    $backvendorsdisplay.removeClass("hidden");
});
$backcategories.click(function() {
    $backofficediv.addClass("hidden");
    $backcategoriesdisplay.removeClass("hidden");
});
$backbrands.click(function() {
    $backofficediv.addClass("hidden");
    $backbrandsdisplay.removeClass("hidden");
});
