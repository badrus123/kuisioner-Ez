

// nilai test awal
document.getElementById("sekut").addEventListener('click', function () {
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      }
    function isiCheckbox() {
        var lel = document.getElementsByClassName("answerlist2");
        var lol = document.getElementsByClassName("answerlist1");
        var inhehe = document.getElementsByTagName("input");
        var ta = document.getElementsByTagName("textarea");
        for (i = 0;i<ta.length;i++){
            ta[i].innerHTML = "mantap sudah bagus";
        }
        for (i = 0; i < lel.length; i++) {
            if (lol[i].innerHTML == "Sangat puas" || lol[i].innerHTML == "Ya" || lol[i].innerHTML == "Sangat setuju") {
                var isi = lel[i].getElementsByTagName("input")[0];
                isi.checked = true;
            }
        }
        var submit =document.evaluate('//*[@id="form1"]/table/tbody/tr[2]/td/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        submit.click();

    }
    chrome.tabs.executeScript({
        code: '('+isiCheckbox+')();'
    });
});
