import React, { useEffect, useState } from "react";
import { getData } from "../data/getData";
import { Pagination } from "./Pagination";
import { Posts } from "./Posts";
import { PostPage } from "./PostPage";

export const AppPagination = () => {
  const [data, setData] = useState([]);
  const [dataQt, setDataQt] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getData().then((posts) => setData(posts.data.results));
  }, []);
  const nPages = Math.ceil(data.length / dataQt);
  const indexFin = dataQt * currentPage;
  const indexInit = indexFin - dataQt;
  const nData = data.slice(indexInit, indexFin);
  return (
    <>
      AppPagination
      <PostPage setDataQt={setDataQt} setCurrentPage={setCurrentPage} />
      <Posts nData={nData} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nPages={nPages}
      />
    </>
  );
};
