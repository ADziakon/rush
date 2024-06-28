// Function to toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Event listener for sidebar toggle button
document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.openbtn');
    sidebarToggle.addEventListener('click', toggleSidebar);
});
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
Explanation