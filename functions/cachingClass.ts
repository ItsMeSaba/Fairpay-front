

export default class CachingSystemForDateSorted<ItemType extends { timestamp: number, documents: ItemType }> {
    cachingPrefix: string;

    constructor(cachingPrefix: string) {
        this.cachingPrefix = cachingPrefix;
    }

    private isTimestampValid(timestamp: number) {
        const allowedTime = 1000 * 60 * 60 * 5 // 5 hours

        return timestamp + allowedTime < Date.now();
    }

    cache(companyId: string, newDocuments: ItemType[]) {
        const data = this.getCached(companyId);


    }

    getCached(companyId: string) {
        const data = localStorage.getItem(`${this.cachingPrefix}-${companyId}`);

        if (!data) return null;

        const parsed: ItemType = JSON.parse(data);

        if (!this.isTimestampValid(parsed.timestamp)) return null;

        return parsed;
    }
}