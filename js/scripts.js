document.addEventListener('DOMContentLoaded', function(){
    const sidebar = document.getElementsByClassName('navbar')[0];
    const edgeMargin = 200;
    
    function showSideBar(){
        sidebar.classList.add('active');
    }
    function hideSidebar(){
        sidebar.classList.remove('active');
    }
    function handleMouseMovement(event){
        const cursorX = event.clientX;
        if (cursorX <= edgeMargin){
            showSideBar();
        } else {
            hideSidebar();
        }
    }
    
    document.addEventListener('mousemove',handleMouseMovement);
})