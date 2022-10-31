


/**
 * Used to get verbal explanation of rating (star based rating while submitting review) 
 */
export default function getRatingText(rating: number) {
    switch (rating) {
        case 10:
        case 20:
            return { text: "ძალიან ნეგატიური", color: "rgb(255, 0, 0)"}

        case 30:
        case 40:
            return { text: "ნეგატიური", color: "rgb(255, 140, 140)" }
            // return { text: "ნეგატიური", color: "#ff7675" }

        case 50:
        case 60:
            // return { text: "ნეიტრალური", color: "#3c6382" }
            return { text: "ნეიტრალური", color: "rgb(50, 50, 50)" }

        case 70:
        case 80:
            // return { text: "დადებითი", color: "#78e08f" }
            // return { text: "დადებითი", color: "rgb(0, 160, 0)" }
            return { text: "დადებითი", color: "rgb(0, 170, 0)" }

        case 90:
        case 100:
            // return { text: "ძალიან დადებითი", color: "#009432" }
            return { text: "ძალიან დადებითი", color: "rgb(0, 220, 0)" }

        default:
            return null;
    }
}