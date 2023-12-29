"use client";

import { FormContext } from "@/context/FormContext";
import { useContext, useEffect, useState } from "react";
import { Loader } from "../loading";
import Articulo from "../main/Articulo";
import { getDataPrueba } from "@/helpers/getInfoTest";

const initialState = [];

export const ContainerSubCategory = ({ params }) => {
  const { token } = useContext(FormContext);
  const [dataSubCategory, setDataSubCategory] = useState(initialState);
  const [dataMostViews, setDataMostViews] = useState(initialState);
  // console.log({dataCategories})

  useEffect(() => {
    if (token !== "") {
      console.log("useEffect subcategory");
      const getDataSubCategory = async () => {
        const info = await getDataPrueba(
          `https://testapi.tuentrada.com/api/v1/atencion-cliente/category/${params.categoria}/article/${params.subcategoria}`,
          token
        );
        const infoMostViews = await getDataPrueba(
          `https://testapi.tuentrada.com/api/v1/atencion-cliente/articles/most-view`,
          token
        );
        setDataSubCategory(info);
        setDataMostViews(infoMostViews);
      };
      getDataSubCategory();
    }
  }, [token]);

  if (dataSubCategory === undefined) return <Loader />;
  if (dataSubCategory.length === 0) return <Loader />;
  if (dataMostViews === undefined) return <Loader />;
  if (dataMostViews.length === 0) return <Loader />;

  return (
    <Articulo
      params={params}
      data={dataSubCategory?.data}
      dataArticle={dataSubCategory?.data?.article}
      dataMostViews={dataMostViews?.data?.mostViews}
    />
  );
};