// /app/budaya/page.tsx
'use client';
import BudayaPageDesktop from "./Desktop";
import BudayaPageMobile from "./Mobile";

export default function BudayaPage() {
    return (
        <div className="">
            <div className="">
                <BudayaPageDesktop/>
            </div>
            {/* <div className="grid md:hidden">
                <BudayaPageMobile/>
            </div> */}
        </div>
    );
}