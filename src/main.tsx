import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/index.css";
import { Home } from "@/containers/Home";
import { Sidebar } from "@/containers/Sidebar";
import { CalculatePrice } from "@/containers/CalculatePrice";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <div className="flex">
                <Sidebar />
                <main className="w-full">
                    <Routes>
                        <Route path="/alupro/">
                            <Route index element={<Home />} />
                            <Route
                                path="calculate-price"
                                element={<CalculatePrice />}
                            />
                        </Route>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    </StrictMode>
);
