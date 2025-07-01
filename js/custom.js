function tampil()
{
	const tanggal = new Date();
	const options = new Intl.DateTimeFormat('id-ID',{
		weekday:'long',
		day:'2-digit',
		month:'long',
		year:'numeric',
		hour:'numeric',
		minute:'numeric',
		second:'numeric',
		timeZone:'Asia/Jakarta'
	});
	const formatIndo = options.format(tanggal);
	return formatIndo;
}

function updateTime()
{
	$('#jamberjalan').html('Hari: '+tampil()+' WIB');
}

setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".app-header");
    const sidebar = document.querySelector(".app-sidebar");
    if (!navbar || !sidebar) return;

    const updateNavbarOffset = () => {
        const sidebarWidth = sidebar.offsetWidth;
        navbar.style.paddingLeft = window.innerWidth >= 768 ? `${sidebarWidth}px` : "0";
    };

    const resizeObserver = new ResizeObserver(() => {
        updateNavbarOffset();
    });
    resizeObserver.observe(sidebar);

    window.addEventListener("resize", updateNavbarOffset);

    window.addEventListener("beforeunload", () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", updateNavbarOffset);
    });

    updateNavbarOffset();
});