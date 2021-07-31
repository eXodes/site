// set up text to print, each item in array is new line
var aText = new Array(
    "I’m Exo. I’m a self-taught Graphic Designer based in Selangor. Currently, I'm a front-end developer for Cipta Asia Worldwide. I also do photography as well as videography. Occasionally, I tinker behind some websites such as EnglishJer.co, Tulis.co and sometimes IndustryofAwesome.com. During my free time, I enjoy TV series such as Fringe, Timeless, Battlestar Galactica and sometimes movies too. Did I mention that I blog too? If you want to hire me, you can reach me here."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("type");

    while (iRow < iIndex) {
        sContents += aText[iRow++];
    }
    
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + '|';
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

typewriter();
