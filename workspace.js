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

var HTMLtextarea = document.getElementById("html");
var Csstextarea = document.getElementById("css");
var Jstextarea = document.getElementById("js");

var htmlNavigation = document.getElementById("nav-html");
var cssNavigation = document.getElementById("nav-css");
var jsNavigation = document.getElementById("nav-js");

var IFrame = document.getElementById("iFrame");

htmlNavigation.style.color = "black";
Csstextarea.style.display = "none";
Jstextarea.style.display = "none";

function ShowHtml() {
  if (HTMLtextarea.style.display === "block") {
      HTMLtextarea.style.display = "none";
      htmlNavigation.style.color = "grey";
      htmlNavigation.style.borderTop = "0px solid grey";
      htmlNavigation.style.borderRight = "solid grey";
      htmlNavigation.style.borderLeft = "solid grey";

      cssNavigation.style.borderTop = "0px solid grey";
      jsNavigation.style.borderTop = "0px solid grey";

      IFrame.style.height = "80%";
  } else {
      HTMLtextarea.style.display = "block";

      htmlNavigation.style.color = "black";
      cssNavigation.style.color = "grey";
      jsNavigation.style.color = "grey";

      cssNavigation.style.borderTop = "solid grey";
      cssNavigation.style.borderRight = "solid grey";
      cssNavigation.style.borderLeft = "solid grey";

      jsNavigation.style.borderTop = "solid grey";
      jsNavigation.style.borderRight = "solid grey";
      jsNavigation.style.borderLeft = "solid grey";

      htmlNavigation.style.borderTop = "solid black";
      htmlNavigation.style.borderRight = "solid black";
      htmlNavigation.style.borderLeft = "solid black";

      Csstextarea.style.display = "none";
      Jstextarea.style.display = "none";

      IFrame.style.height = "60%";
  }
}

function ShowCss() {
  if (Csstextarea.style.display === "block") {
      Csstextarea.style.display = "none";
      cssNavigation.style.color = "grey";
      cssNavigation.style.borderTop = "0px solid grey";
      cssNavigation.style.borderRight = "solid grey";
      cssNavigation.style.borderLeft = "solid grey";

      htmlNavigation.style.borderTop = "0px solid grey";
      jsNavigation.style.borderTop = "0px solid grey";

      IFrame.style.height = "80%";
  } else {
      Csstextarea.style.display = "block";

      htmlNavigation.style.color = "grey";
      cssNavigation.style.color = "black";
      jsNavigation.style.color = "grey";

      cssNavigation.style.borderTop = "solid black";
      cssNavigation.style.borderRight = "solid black";
      cssNavigation.style.borderLeft = "solid black";

      jsNavigation.style.borderTop = "solid grey";
      jsNavigation.style.borderRight = "solid grey";
      jsNavigation.style.borderLeft = "solid grey";

      htmlNavigation.style.borderTop = "solid grey";
      htmlNavigation.style.borderRight = "solid grey";
      htmlNavigation.style.borderLeft = "solid grey";

      Jstextarea.style.display = "none";
      HTMLtextarea.style.display = "none";

      IFrame.style.height = "60%";
}
}

function ShowJs() {
  if (Jstextarea.style.display === "block") {
      Jstextarea.style.display = "none";
      jsNavigation.style.color = "grey";
      jsNavigation.style.borderTop = "0px solid grey";
      jsNavigation.style.borderRight = "solid grey";
      jsNavigation.style.borderLeft = "solid grey";

      htmlNavigation.style.borderTop = "0px solid grey";
      cssNavigation.style.borderTop = "0px solid grey";

      IFrame.style.height = "80%";
  } else {
      Jstextarea.style.display = "block";

      htmlNavigation.style.color = "grey";
      cssNavigation.style.color = "grey";
      jsNavigation.style.color = "black";

      cssNavigation.style.borderTop = "solid grey";
      cssNavigation.style.borderRight = "solid grey";
      cssNavigation.style.borderLeft = "solid grey";

      jsNavigation.style.borderTop = "solid black";
      jsNavigation.style.borderRight = "solid black";
      jsNavigation.style.borderLeft = "solid black";

      htmlNavigation.style.borderTop = "solid grey";
      htmlNavigation.style.borderRight = "solid grey";
      htmlNavigation.style.borderLeft = "solid grey";

      HTMLtextarea.style.display = "none";
      Csstextarea.style.display = "none";

      IFrame.style.height = "60%";
  }
}