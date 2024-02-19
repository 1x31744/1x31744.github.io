/* make terminal via non editable div and editable div */
let terminal_read_part = document.getElementById("terminalReadspace")
let edit_content = document.getElementById("termedit")
let about_content = document.getElementById("about_content")

const files = new WinBox("Files", {
    background: "#FF0000",
    border: 4,
    width: '500px',
    height: '800px',
    x: "10%",
    y: "center",
    top: "72px",
    mount: document.getElementById("files_content"),
})
const terminal = new WinBox("Terminal",{
    background: "#FF0000",
    border: 4,
    width: '800px',
    height: '500px',
    x: "center",
    y: "center",
    top: "72px",
    mount: document.getElementById("term_content"),
});
edit_content.focus()

edit_content.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        let term_command = edit_content.textContent
        terminal_read_part.textContent += "\n"
        terminal_read_part.textContent += "kxxpa@DESKTOP-ANJNVHI:~$ " + term_command
        switch (term_command) {
            case "help":
                terminal_read_part.textContent += "\n\n  about : learn about me and what i enjoy doing\n  social : see the social media i have\n  projects : see a list of the projects i've made\n  clear : clear the terminal\n  title : display the title in terminal\n  contact : all the ways you can contact me\n  help : you just used this\n "
                break;
            case "clear":
                terminal_read_part.textContent = " "
                break;
            case "title":
                terminal_read_part.textContent = "\n"
                terminal_read_part.textContent += " ██ ▄█▀▒██   ██▒▒██   ██▒▄▄▄█████▓▓█████  ██▀███   ███▄ ▄███▓\n ██▄█▒ ▒▒ █ █ ▒░▒▒ █ █ ▒░▓  ██▒ ▓▒▓█   ▀ ▓██ ▒ ██▒▓██▒▀█▀ ██▒\n▓███▄░ ░░  █   ░░░  █   ░▒ ▓██░ ▒░▒███   ▓██ ░▄█ ▒▓██    ▓██░\n▓██ █▄  ░ █ █ ▒  ░ █ █ ▒ ░ ▓██▓ ░ ▒▓█  ▄ ▒██▀▀█▄  ▒██    ▒██\n▒██▒ █▄▒██▒ ▒██▒▒██▒ ▒██▒  ▒██▒ ░ ░▒████▒░██▓ ▒██▒▒██▒   ░██▒\n▒ ▒▒ ▓▒▒▒ ░ ░▓ ░▒▒ ░ ░▓ ░  ▒ ░░   ░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░   ░  ░\n░ ░▒ ▒░░░   ░▒ ░░░   ░▒ ░    ░     ░ ░  ░  ░▒ ░ ▒░░  ░      ░\n░ ░░ ░  ░    ░   ░    ░    ░         ░     ░░   ░ ░      ░   \n░  ░    ░    ░   ░    ░              ░  ░   ░            ░\n\nWelcome to my portfolio!\nType help to see commands to learn about me!\nOr, you can use the buttons in the tab bar to open windows.\n "
                break;
            case "about":
                const aboutBox = new WinBox({
                    title: 'About Me',
                    background: "#FF0000",
                    border: 4,
                    height: '400px',
                    width: '400px',
                    mount: document.getElementById("about_content").cloneNode(true),
                })
                break;
            case "who":
                break;
            default:
                terminal_read_part.textContent += "\nUnrecognized command: '" + term_command+ "', type 'help' to see all available commands."
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

let rootfile = document.getElementById('root_button');
let root_visible = true
rootfile.addEventListener('click', () => {
    let second_column = document.getElementById('second_column')
    root_visible = !root_visible;
    second_column.hidden = root_visible;
}) 