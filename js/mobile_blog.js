document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  });

let dropdown_content = document.getElementById("blog_selector");
let dropdown_button = document.getElementById("dropdown");
let drop_visible = false
dropdown_button.addEventListener('click', () => {
    root_visible = !root_visible
    if (root_visible) {
        dropdown_content.style.display = 'none'
    }
    else {
        dropdown_content.style.display = 'block'
    }

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

//file buttons
let about_file = document.getElementById("about_button")
let about_content = document.getElementById("about_content")
about_file.addEventListener('click', () => {
    blog_content.innerHTML = about_content.innerHTML
});
let contact_file = document.getElementById("contact_button")
let contact_content = document.getElementById("contact_content")
contact_file.addEventListener('click', () => {
    blog_content.innerHTML = contact_content.innerHTML
});

//osbuttons
let os1_file = document.getElementById("os_part1_button")
let os1_content = document.getElementById("os1_content")
os1_file.addEventListener('click', () => {
    blog_content.innerHTML = os1_content.innerHTML
})
let os2_file = document.getElementById("os_part2_button")
let os2_content = document.getElementById("os2_content")
os2_file.addEventListener('click', () => {
    blog_content.innerHTML = os2_content.innerHTML
})

