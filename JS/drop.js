function openDropdown() {
    document.getElementById("myDropdown").classList.toggle("open");
}
window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('open'))  {
                openDropdown.classList.remove('open');
            }
        }
    }
}