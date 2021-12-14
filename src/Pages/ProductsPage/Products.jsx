import React from "react";
import Navbar from "../../Components/NavbarProducts/Navbar";
import ProductTitle from "../../Components/ProductBigTitle/ProductTitle";
import ProductPics from "../../Components/ProductPictures/ProductPics";
import SectionButton from "../../Components/SectionButtons/SectionButton";
import SideBar from "../../Components/SideBarFilter/SideBar";
import products from "./Products.module.css";
const Products = () => {
  return (
    <div className={products.container}>
      <div className={products.sections}>
        <SectionButton text={"Jupes"}></SectionButton>
        <SectionButton text={"Jupes"}></SectionButton>
        <SectionButton text={"Jupes"}></SectionButton>
        <SectionButton text={"Jupes"}></SectionButton>
        <SectionButton text={"Jupes"}></SectionButton>
      </div>
      <ProductTitle text={"Chaussures"}></ProductTitle>
      <div className={products.containerProducts}>
        <SideBar></SideBar>
        <div className={products.PicsContainer}>
    <ProductPics></ProductPics>
    <ProductPics></ProductPics>
    <ProductPics></ProductPics>
    <ProductPics></ProductPics>
    <ProductPics></ProductPics>
    <ProductPics></ProductPics>

        </div>
      </div>
    </div>
  );
};

export default Products;
