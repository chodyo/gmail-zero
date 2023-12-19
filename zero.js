const POLL = 1000;
const SUN_SRC =
  "//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/zero/1x/ic_zero_inbox.png";
const SUN = `<img alt="No new mail!" src=${SUN_SRC}>`;
const BACKGROUND = "#7baaf7";

function getTableRow() {
  let elements = document.getElementsByTagName("td");
  for (let e in elements) {
    if (elements[e].className == "TC") {
      chrome.extension.sendRequest({}, function (response) {});
      return elements[e];
    }
  }
}

function checkZeroInbox() {
  let row = getTableRow();
  if (row && row.innerHTML === "No new mail!") {
    row.innerHTML = SUN;
    row.style.backgroundColor = BACKGROUND;
  }
}

setInterval(checkZeroInbox, POLL);
