jQuery(document).ready(function () {
    // hide all the links
    jQuery(".ItemContent").each(function () {
        jQuery(this).hide();
    });
    //toggle the next content after switch
    jQuery(".ItemSwitch").click(MouseEvent);

    // jQuery(".ItemSwitch").click(function () {
    function MouseEvent() {
        pos = "#Content" + this.id;
        jQuery(".ItemContent").each(function () {
            jQuery(this).hide(1000);
        });
        jQuery(pos).slideToggle(1000); ;
    }

    function Nothing() {}

    // hide at the text items
    jQuery(".TextItem").each(function () {
        jQuery(this).hide();
    });
    // on hover over control, set text active
    jQuery(".TextControl").mouseover(function () {
        pos = "#GraphText" + this.id;
        jQuery(".TextItem").each(function () {
            jQuery(this).hide();
        });
        jQuery(pos).toggle();
    });
    jQuery(".feature-widget img").fadeTo("slow", 1);
    jQuery(".feature-widget img").hover(function () {
        jQuery(this).fadeTo("slow", 0.8);
    }, function () {
        jQuery(this).fadeTo("slow", 1);
    });
});