console.log("success");

function b64Decode()
{
  var unModded = getString();

  console.log("modding");
  modded = window.atob(unModded.toString());
  console.log("started to replace");
  replaceString(unModded, modded);

}

function reverseString()
{
  var unModded = getString();
  var toMod = unModded.toString().split('');
  var modLength = toMod.length-1;
  var modArray = [];
  var j = 0;
  for(var i = 0; i < toMod.length; i++)
  {
    modArray[i] = toMod[modLength];
    console.log(modArray[i]);
    console.log(modArray);
    modLength--;
  }

  var modded = modArray.join("");
  console.log("Moddesd String " + modded);
  replaceString(unModded, modded);
}

function binaryDecode()
{
  console.log("Binary placeholder");
}

function getString()
{
  var text = "test";
  text = window.getSelection();

  console.log(text.toString());
  return text;
}

function replaceString(text, textString)
{

  var range = text.getRangeAt(0);
  console.log("set range");
  //textString = text.toString();
  range.deleteContents();
  console.log("deleted contents");
  range.insertNode(document.createTextNode(textString));
  console.log("inserted node");
}

browser.runtime.onMessage.addListener(request => {
  switch(request.greeting){

    case "binary":
      binaryDecode();
      break;
    case "b64":
      b64Decode();
      break;
    case "reverse":
      reverseString();
      break;
  }
});
