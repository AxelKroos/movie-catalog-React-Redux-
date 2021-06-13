import classes from './pagination.module.css'
import ReactPaginate from "react-paginate";
import React from "react";

function Pagination(props) {
    const handlePageClick = () => {
            let list = document.getElementsByTagName("li")
            for (let i = 0; i < list.length; i++ ){
                if (list[i].className == 'selected') {
                    props.changePage(+list[i].innerText)
                }
        }
    };
    return <div className={classes.pagination}>
        <ReactPaginate
                       pageCount={props.pages} pageRangeDisplayed='5' marginPagesDisplayed='1'
                       nextLabel='Вперед'
                       previousLabel='Назад' breakLabel='..'
                       onPageChange={handlePageClick(this)}/>
    </div>
}

export default Pagination