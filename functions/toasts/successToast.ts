import { toast } from "react-toastify";

export default function successToast(text: string) {
    return toast.success(text, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
        style: { fontFamily: "'Noto Sans Georgian', sans-serif" },
    });
}