import { InfiniteData } from "react-query";

interface PagesArray {
    pages: any[];
    [key: string]: any;
}

/**
 * Used with useInfiniteQuery(react-query).
 * Pass data parameter that gets returned from useInfiniteQuery
 * @returns Array of documents with type of generic
 */
export default function flattenPagesArray<ReturnType extends Array<unknown>>(pagesArray: InfiniteData<any> | undefined): ReturnType {
    if (!pagesArray) return new Array() as ReturnType;

    return pagesArray.pages.reduce((acc, cur) => [...acc, ...cur.documents], [])
}