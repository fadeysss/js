function AcceptTheShit()
{
try
{
var iframe = document.querySelector('[class="truste_overlay"]');
iframe.parentNode.removeChild(iframe);
var iframe2 = document.querySelector('[class="truste_box_overlay"]');
iframe2.parentNode.removeChild(iframe2);
}
catch(e)
{
alert(e);	
}
}

function DoSearch()
{
try
{
var searchInput = document.getElementById("hero-search");
searchInput.value = "Whats 5+5";
var searchButton = document.querySelector('[aria-label="search button"]');

setTimeout(function() 
{
searchButton.click();
}, 1000);

}
catch(e)
{
(e);
}
}

function ClickFirstResult()
{
try
{
var firstOne = document.querySelector('[data-test="search-item-content-text"]');
firstOne.click();
}
catch(e)
{
alert(e);
}
}

function getElementByXpath(path)
{
return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

