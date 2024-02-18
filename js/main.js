/* make terminal via non editable div and editable div */
let terminal_read_part = document.getElementById("terminalReadspace")
let edit_content = document.getElementById("termedit")

const terminal = new WinBox("Terminal",{
    background: "#FF0000",
    border: 4,
    width: '800px',
    height: '400px',
    mount: document.getElementById("content"),
});

edit_content.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        let term_command = edit_content.textContent
        terminal_read_part.textContent += "\n"
        terminal_read_part.textContent += "kxxpa@DESKTOP-ANJNVHI:~$" + term_command
        switch (term_command) {
            case "help":
                break;
            case "clear":
                terminal_read_part.textContent = " "
                break;
            case "about":
                break;
            case "who":
                break;
        }
        console.log(term_command)
        edit_content.textContent = "";
    }
})

terminal.removeControl("wb-close")


let b1 = document.getElementById('button1');
b1.addEventListener('click', () => {
    element.innerHTML = "<p>haiii :3</p>"
});
