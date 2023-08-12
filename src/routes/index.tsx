import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { History } from "./history";
import { ProductiveFrames } from "./productive-frames";
import { Catalog } from "./catalog";
import { ManufacturingProcess } from "./manufacturing-process";
import { Layout } from "../components/Layout";

export const AppRouter = (): JSX.Element => (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/productive-frames" element={<ProductiveFrames />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route
                    path="/manufacturing-process"
                    element={<ManufacturingProcess />}
                />
            </Routes>
        </Layout>
    </Router>
);
