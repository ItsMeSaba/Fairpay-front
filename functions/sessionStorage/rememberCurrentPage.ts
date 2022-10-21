export function rememberCurrentPage() {
    sessionStorage.setItem("previousPage", JSON.stringify({
        url: location.pathname,
        scrollTop: window.scrollY,
    }));
};