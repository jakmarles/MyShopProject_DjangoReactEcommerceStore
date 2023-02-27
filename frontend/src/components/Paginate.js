import React from 'react'
import { Pagination } from 'react-bootstrap'
import { useLocation } from "react-router-dom";
 
 
const useQuery = () => {
 return new URLSearchParams(useLocation().search);
}
 
function Paginate({page, pages, isAdmin=false}) {
 
    let keyword = useQuery().get("keyword")
 
    let url = !isAdmin ? '/' : '/admin/productlist/'
    url += keyword ? `?keyword=${keyword}&` : '?'
 
    return (pages > 1 && (
        <Pagination>
            
            {/* Pages */}
            {[...Array(pages)].map((_, index) => {
              const pageNumber = index + 1
              return (
                <Pagination.Item 
                  key={pageNumber}
                  active={page === pageNumber}
                  href={`${url}page=${pageNumber}`}
                >
                  {pageNumber}
                </Pagination.Item>
              )
            })}
 
        </Pagination>
    ))
}
 
export default Paginate
