document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
});



let dropdown_content = document.getElementById("blog_selector");
let dropdown_button = document.getElementById("dropdown");
let drop_visible = false
dropdown_button.addEventListener('click', () => {
    if (root_visible) {
        dropdown_content.style.display = 'none'
    }
    else {
        dropdown_content.style.display = 'block'
    }
    root_visible = !root_visible
})

let blog_content = document.getElementById('blog_content');

// folder buttons
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
let os_folder = document.getElementById('OS_file');
let os_column = document.getElementById('os_column')
let os_visible = true
os_folder.addEventListener('click', () => {
    os_visible = !os_visible
    if (os_visible) {
        os_column.style.display = 'none'
    }
    else {
        os_column.style.display = 'block'
    }
});

let nes_folder = document.getElementById('nes_file');
let nes_column = document.getElementById('nes_column');
let nes_visible = true
nes_folder.addEventListener('click', () => {
    nes_visible = !nes_visible
    if (nes_visible) {
        nes_column.style.display = 'none'
    }
    else {
        nes_column.style.display = 'block'
    }
})

let readability_checkbox = document.getElementById("read_check")
let docs = document.getElementsByClassName("doc")
docs = Array.from(docs)
docs.push(blog_content)
console.log(typeof(docs))
readability_checkbox.addEventListener('change', e => {
    if(e.target.checked === true) {
        for (var i = 0; i < docs.length; i++) {
            let doc = docs[i]
            let children = doc.querySelectorAll('*')
            for (var j = 0; j < children.length; j++) {
                if (children[j].tagName == "P" || children[j].tagName == "H1" ||
                    children[j].tagName == "H2" || children[j].tagName == "H3" ||
                    children[j].tagName == "UL"
                ){
                    children[j].style.color = 'white'
                }
            }
        }

    }
    if (e.target.checked === false) {
        for (var i = 0; i < docs.length; i++) {
            let doc = docs[i]
            let children = doc.querySelectorAll('*')
            for (var j = 0; j < children.length; j++) {
                if (children[j].tagName == "P" || children[j].tagName == "H1" ||
                    children[j].tagName == "H2" || children[j].tagName == "H3" ||
                    children[j].tagName == "UL"
                ){
                    children[j].style.color = 'red'
                }
            }
        }
    }
})
window.onload = function() {
    readability_checkbox.checked = false;
};

//file buttons
let about_file = document.getElementById("about_button")
let about_content = document.getElementById("about_content")
about_file.addEventListener('click', () => {
    blog_content.innerHTML = about_content.innerHTML
    dropdown_content.style.display = 'none'
    root_visible = !root_visible
});
let contact_file = document.getElementById("contact_button")
let contact_content = document.getElementById("contact_content")
contact_file.addEventListener('click', () => {
    blog_content.innerHTML = contact_content.innerHTML
    dropdown_content.style.display = 'none'
    root_visible = !root_visible
});

//osbuttons
let os1_file = document.getElementById("os_part1_button")
let os1_content = document.getElementById("os1_content")
os1_file.addEventListener('click', () => {
    blog_content.innerHTML = os1_content.innerHTML
    dropdown_content.style.display = 'none'
    root_visible = !root_visible
})
let os2_file = document.getElementById("os_part2_button")
let os2_content = document.getElementById("os2_content")
os2_file.addEventListener('click', () => {
    blog_content.innerHTML = os2_content.innerHTML
    dropdown_content.style.display = 'none'
    root_visible = !root_visible
})
let os3_file = document.getElementById("os_part3_button")
let os3_content = document.getElementById("os3_content")
os3_file.addEventListener('click', () => {
    blog_content.innerHTML = os3_content.innerHTML
    dropdown_content.style.display = 'none'
    root_visible = !root_visible
})

//nesbuttons
let nes1_file = document.getElementById("nes_part1_button")
let nes1_content = document.getElementById("nes1_content")
nes1_file.addEventListener('click', () => {
    blog_content.innerHTML = nes1_content.innerHTML
    dropdown_content.style.display = 'none'
    root_visible = !root_visible
})

let nes2_file = document.getElementById("nes_part2_button")
let nes2_content = document.getElementById("nes2_content")
nes2_file.addEventListener('click', () => {
    blog_content.innerHTML = nes2_content.innerHTML
    dropdown_content.style.display = 'none'
    root_visible = !root_visible
})


