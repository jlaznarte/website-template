
function bookmark()
{
    bookmarkurl = "http://www.londonair.org.uk";
    bookmarktitle = "The London Air Quality Network";
    if (document.all) // IE
    {
        window.external.AddFavorite(bookmarkurl, bookmarktitle)
    }
    else if (window.sidebar) // firefox
    {
        window.sidebar.addPanel(bookmarktitle, bookmarkurl, "");
    }
    else if (window.chrome) // chrome
    {
        alert('Chrome Browser\n\nFor Windows press ctrl+D to bookmark. For Mac Command+D');
    }
    else if (window.safari) // safari
    {
        alert('Safari Browser\n\nFor Windows press ctrl+D to bookmark. For Mac Command+D');
    }

}
