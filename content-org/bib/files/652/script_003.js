
function toggleList(heading, list)
{
    if(heading.className.match('.*expanded')) {
        list.style.display='none';
        heading.className='loiListHeading collapsed';
    }
    else {
        list.style.display='block';
        heading.className='loiListHeading expanded';
    }
}


function showXcerpts(aForm)
{
    var x, divs=aForm.getElementsByTagName("div");

    for(x in divs) {
        var div=divs[x];

        if(div.className == 'article-summary' && div.innerHTML.length > 0) {
            var display=div.style.display;

            if(display == 'block')
                div.style.display='none';
            else
                div.style.display='block';
        }
    }
}


function checkEmptyField(aForm)
{
    var i, kids=aForm.elements, hasQuery=false;

    for(i in kids) {
        var kid=kids[i];

        if(kid.type == "text" && kid.value != "") {
            hasQuery=true;
            break;
        }
    }

    if(!hasQuery) {
        alert("Please enter a search term");
        return false;
    }

    return true;
}


function sendSuggestedQuery(aForm, aQuery)
{
	aForm.value = aQuery;
	aForm.submit();
}


function showHelpDesc(id, msg)
{
    desc=$(id).innerHTML=msg;
}


function clearFields(aForm)
{
    for(var i=0; i < aForm.elements.length; i++) {
        var elem=aForm.elements[i];

        if(elem.type == "text")
            elem.value="";
        else if(elem.type.match("select-(one|multiple)"))
            elem.selectedIndex=0;
    }
}
addListener(window, 'load', function() {
    if (typeof Prototype === 'object') {
        var ac = $('articleContent');
        if (ac) {
            var images = ac.select('.formula img');
            if (images) {
                var maxWidth = ac.getWidth();
                var toggleWidth = function(event) {
                    var element = event.element();
                    var x = element.originalWidth;
                    element.originalWidth = element.width;
                    element.width = x;
                }
                for (var index = 0, len = images.length; index < len; ++index) {
                    var img = images[index];
                    if (img.width > maxWidth) {
                        img.originalWidth = img.width;
                        img.width = maxWidth;
                        img.observe('click', toggleWidth);
                        img.insert({after:'<div class="resizeNote">(Click the equation graphic to enlarge/reduce size)</div>'});
                    }
                }
            }
        }
    }
});