import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/index.css";
import { Home } from "@/containers/Home";
import { Sidebar } from "@/containers/Sidebar";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <div className="flex">
                <Sidebar />
                <section>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </section>
            </div>
        </BrowserRouter>
    </StrictMode>
);
