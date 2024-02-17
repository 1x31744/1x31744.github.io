

class TerminalManager {
    element
    currentLine
    constructor() {
        this.element = document.createElement('div');
        this.element.innerHTML = "<p>heello</p>";
        this.element.classList.add('fill_area');
        this.currentLine = "";
        document.addEventListener('keydown', (e) => {
            if (e.key == "Backspace") {
                this.currentLine = this.currentLine.slice(0, this.currentLine.length-1);
            } else {
                this.currentLine += e.key;
            }
            this.element.innerHTML = "<p>" + this.currentLine + "</p>";
            console.log(e.key);
        });
    }
    
}
let terminal_manager = new TerminalManager();

const terminal = new WinBox(" ",{
    title: "Custom Color",
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
