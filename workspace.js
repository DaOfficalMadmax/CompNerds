const getEl = id => document.getElementById(id)

const iFrame = getEl('iFrame').contentWindow.document
const htmlTextArea = getEl('htmlTextarea')
const cssTextArea = getEl('cssTextarea')
const jsTextArea = getEl('jsTextarea')

document.body.onkeyup = function() {
    iFrame.open()
    iFrame.writeln(
        htmlTextArea.value +
        '<style>' +
        cssTextArea.value +
        '</style>' +
        '<script>' +
        jsTextArea.value +
        '</script>'
    )
    iFrame.close()
}

function eraseText() {
    document.getElementById("htmlTextarea").value = "";
    document.getElementById("cssTextarea").value = "";
    document.getElementById("jsTextarea").value = "";
}

// HTML Variables
let HtmlText = document.getElementById("htmlTextarea");
let saveHtml = document.getElementById("SaveHtml");

// CSS Variables
let CssText = document.getElementById("cssTextarea");
let saveCss = document.getElementById("SaveCss");

// Js Variables
let JsText = document.getElementById("jsTextarea");
let saveJs = document.getElementById("SaveJs");

saveHtml.addEventListener("click", (e) => {
  e.preventDefault();

  const textData = HtmlText.value;
  const textDataBlob = new Blob([HtmlText.value], { type: "text/plain" });

  const downloadUrl = window.URL.createObjectURL(textDataBlob)

  const downloadLink = document.createElement('a');
  downloadLink.download = "index"
  downloadLink.href = downloadUrl;
  downloadLink.click()

  console.log(textData);
  console.log(textDataBlob);
});

saveCss.addEventListener("click", (e) => {
    e.preventDefault();
  
    const textData = CssText.value;
    const textDataBlob = new Blob([CssText.value], { type: "text/plain" });
  
    const downloadUrl = window.URL.createObjectURL(textDataBlob)
  
    const downloadLink = document.createElement('a');
    downloadLink.download = "style"
    downloadLink.href = downloadUrl;
    downloadLink.click()
  
    console.log(textData);
    console.log(textDataBlob);
  });

saveJs.addEventListener("click", (e) => {
    e.preventDefault();
  
    const textData = JsText.value;
    const textDataBlob = new Blob([JsText.value], { type: "text/plain" });
  
    const downloadUrl = window.URL.createObjectURL(textDataBlob)
  
    const downloadLink = document.createElement('a');
    downloadLink.download = "script"
    downloadLink.href = downloadUrl;
    downloadLink.click()
  
    console.log(textData);
    console.log(textDataBlob);
  });

function ShowHtml() {
  var HTMLtextarea = document.getElementById("htmlTextarea");
  if (HTMLtextarea.style.display === "block") {
      HTMLtextarea.style.display = "none";
  } else {
      HTMLtextarea.style.display = "block";
  }
}

var HTMLtextarea = document.getElementById("htmlTextarea");
var Csstextarea = document.getElementById("cssTextarea");
var Jstextarea = document.getElementById("jsTextarea");

var htmlNavigation = document.getElementById("nav-html");
var cssNavigation = document.getElementById("nav-css");
var jsNavigation = document.getElementById("nav-js");

htmlNavigation.style.color = "black";
Csstextarea.style.display = "none";
Jstextarea.style.display = "none";

function ShowHtml() {
  if (HTMLtextarea.style.display === "block") {
      HTMLtextarea.style.display = "none";
      htmlNavigation.style.color = "grey";
  } else {
      HTMLtextarea.style.display = "block";

      htmlNavigation.style.color = "black";
      cssNavigation.style.color = "grey";
      jsNavigation.style.color = "grey";

      Csstextarea.style.display = "none";
      Jstextarea.style.display = "none";
  }
}

function ShowCss() {
  if (Csstextarea.style.display === "block") {
      Csstextarea.style.display = "none";
      cssNavigation.style.color = "grey";
  } else {
      Csstextarea.style.display = "block";

      htmlNavigation.style.color = "grey";
      cssNavigation.style.color = "black";
      jsNavigation.style.color = "grey";

      Jstextarea.style.display = "none";
      HTMLtextarea.style.display = "none";
}
}

function ShowJs() {
  if (Jstextarea.style.display === "block") {
      Jstextarea.style.display = "none";
      jsNavigation.style.color = "grey";
  } else {
      Jstextarea.style.display = "block";

      htmlNavigation.style.color = "grey";
      cssNavigation.style.color = "grey";
      jsNavigation.style.color = "black";

      HTMLtextarea.style.display = "none";
      Csstextarea.style.display = "none";
  }
}