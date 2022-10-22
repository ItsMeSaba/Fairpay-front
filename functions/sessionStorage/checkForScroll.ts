import { getPreviousRememberedPage } from "./getPreviousRememberPage";

/**
 * Check if previous page was scrolled, if so returns to that position
 */
// export default function checkForScroll() {
export default function scrollIfNeededAndRemovePreviousPage() {
    const previousPage = getPreviousRememberedPage();
    
    if (!previousPage?.scrollTop || previousPage.url !== location.pathname ) return null;

    window.scroll({ top: previousPage.scrollTop, behavior: "smooth" });
    

    sessionStorage.removeItem("previousPage");
}