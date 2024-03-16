let files_content = document.getElementById('files_content')
// TODO: make a var that stores the prior page and then go to that when the back phone button used

let name_button = document.getElementById('name_button')
name_button.addEventListener('click', () => {
    about_content.style.display = 'none'
    contact_content.style.display = 'none'
    ray_proj_content.style.display = 'none'
    steel_proj_content.style.display = 'none'
    chip8_proj_content.style.display = 'none'

    files_content.style.display = "block"
})

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
let about_content = document.getElementById("about_content")
about_file.addEventListener('click', () => {
    files_content.style.display = 'none'
    about_content.style.display = 'block'
});

let contact_file = document.getElementById("contact_button")
let contact_content = document.getElementById("contact_content")
contact_file.addEventListener('click', () => {
    files_content.style.display = 'none'
    contact_content.style.display = 'block'
});

let ray_proj_button = document.getElementById("ray_proj_button")
let ray_proj_content = document.getElementById("ray_proj_content")
ray_proj_button.addEventListener('click', () => {
    files_content.style.display = 'none'
    ray_proj_content.style.display = 'block'
});

let steel_proj_button = document.getElementById("steel_proj_button")
let steel_proj_content = document.getElementById("steel_proj_content")
steel_proj_button.addEventListener('click', () => {
    files_content.style.display = 'none'
    steel_proj_content.style.display = 'block'
});

let chip8_proj_button = document.getElementById("chip8_proj_button")
let chip8_proj_content = document.getElementById("chip8_content")
chip8_proj_button.addEventListener('click', () => {
    files_content.style.display = 'none'
    chip8_proj_content.style.display = 'block'
});
let blog_button = document.getElementById("blog_button")
blog_button.addEventListener('click', () => {
    document.location.href = 'blog_desktop.html';
});