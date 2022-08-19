import { MouseEvent } from "react";

export default function clickWithoutPropogation(e: MouseEvent, callback: ((...args: any[]) => any)) {
    callback();
    e.stopPropagation();
}