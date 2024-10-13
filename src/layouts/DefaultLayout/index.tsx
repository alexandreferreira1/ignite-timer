import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            {/* O conteúdo que vai variar vem nesse Outlet. O Header aparece em todas as páginas */}
            <Outlet />
        </LayoutContainer>
    )
}
