import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/index.css";
import { Home } from "@/containers/Home";
import { Sidebar } from "@/containers/Sidebar";
import { CalculatePrice } from "@/containers/CalculatePrice";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HashRouter>
            <div className="flex">
                <Sidebar />
                <main className="w-full">
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                            <Route
                                path="calculate-price"
                                element={<CalculatePrice />}
                            />
                        </Route>
                    </Routes>
                </main>
            </div>
        </HashRouter>
        <ToastContainer />
    </StrictMode>
);
