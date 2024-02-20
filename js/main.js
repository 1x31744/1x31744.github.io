/* make terminal via non editable div and editable div */
let terminal_read_part = document.getElementById("terminalReadspace")
let edit_content = document.getElementById("termedit")
let about_content = document.getElementById("about_content")

const files = new WinBox("Files", {
    background: "#FF0000",
    border: 4,
    width: '550px',
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

/* folder buttons */
let root_folder = document.getElementById('root_button');
let second_column = document.getElementById('second_column')
let root_visible = false
root_folder.addEventListener('click', () => {
    root_visible = !root_visible
    if (root_visible) {
        second_column.style.visibility = 'hidden'
    }
    else {
        second_column.style.visibility = 'visible'
    }
});
let projects_folder = document.getElementById('projects_file');
let projects_column = document.getElementById('projects_column')
let projects_visible = false
projects_folder.addEventListener('click', () => {
    projects_visible = !projects_visible
    if (projects_visible) {
        projects_column.style.display = 'none'
    }
    else {
        projects_column.style.display = 'block'
    }
});

/* file buttons */

let about_file = document.getElementById("about_button")
about_file.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        background: "#FF0000",
        border: 4,
        height: '400px',
        width: '400px',
        mount: document.getElementById("about_content").cloneNode(true),
    })
});

let ray_proj_button = document.getElementById("ray_proj_button")
ray_proj_button.addEventListener('click', () => {
    const rayProjBox = new WinBox({
        title: 'Ray Tracer',
        background: "#FF0000",
        border: 4,
        height: '600px',
        width: '800px',
        mount: document.getElementById("ray_proj_content").cloneNode(true),
    })
});