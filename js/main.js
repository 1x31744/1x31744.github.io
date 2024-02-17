/* make terminal via non editable div and editable div */
let terminal_read_part = document.getElementById("terminalReadspace")
terminal_read_part.innerHTML = "hello <br> hi"
let edit_content = document.getElementById("termedit")

const terminal = new WinBox("Terminal",{
    background: "#FF0000",
    border: 4,
    width: '800px',
    height: '400px',
    mount: document.getElementById("content").cloneNode(true),
});
terminal.removeControl("wb-close")


let b1 = document.getElementById('button1');
b1.addEventListener('click', () => {
    element.innerHTML = "<p>haiii :3</p>"
});
