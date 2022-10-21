type getPreviousRememberedPageReturns = null | {
    url: string, // relative url of page
    scrollTop: number, // number representing ammount of scroll
}

export function getPreviousRememberedPage(): getPreviousRememberedPageReturns {
    const previousPage = sessionStorage.getItem("previousPage");

    return previousPage ? JSON.parse(previousPage) : null;
}