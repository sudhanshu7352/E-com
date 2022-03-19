import { Navbar } from "./Navbar";
import { Route,Routes } from "react-router-dom";
import { HomePage } from "./Homepage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";
import {NotFoundPage} from "./NotFoundPage"

export const RoutesBox = () => {
  return (
    <>
      <Navbar />
      {/* Add Routes here */}
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />}   />
        <Route path="/Products/:id" element={<ProductsDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route />
      </Routes>
    </>
  );
};