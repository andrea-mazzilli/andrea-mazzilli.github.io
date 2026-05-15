window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const menu = document.getElementById('toggleCV');
        if (!menu.classList.contains('d-none')) {
            menu.classList.add('d-none');
        }
    }
}


function toggleLingua() {
    const menu = document.getElementById('toggleCV');
    menu.classList.toggle('d-none');
}