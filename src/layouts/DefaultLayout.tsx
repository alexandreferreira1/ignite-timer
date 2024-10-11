import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
    return (
        <div>
            <Header />
            {/* O conteúdo que vai variar vem nesse Outlet. O Header aparece em todas as páginas */}
            <Outlet />
        </div>
    )
}
