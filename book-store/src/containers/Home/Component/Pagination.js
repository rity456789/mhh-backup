import React,{useState} from 'react'

export default function Pagination(){

    const [page1, setPage1] = useState('1');
    const [page2, setPage2] = useState('2');
    const [page3, setPage3] = useState('3');
    const [page4, setPage4] = useState('4');
    const [activePage, setActivePage] = useState('1')

    const classNamePage = (page) =>{
      if(page===activePage){
        return("page-item active")
      }
      else{
        return("page-item")
      }
    }
    
    const onClickPage = (page) =>{
      setActivePage(page);
    }

    return(
        <div className="pb-3 pb-lg-5">
                  {/* Pagination */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center py-3 py-lg-4">
                      <li className="page-item disabled">
                        <a
                          className="page-link page-link-first"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Prev
                        </a>
                      </li>
                      <li className={classNamePage('1')}>
                        <button className="page-link" href="#">
                          {page1}
                        </button>
                      </li>
                      <li className={classNamePage('2')}>
                        <a className="page-link" href="#">
                          {page2}
                        </a>
                      </li>
                      <li className={classNamePage('3')}>
                        <a className="page-link" href="#">
                          {page3}
                        </a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link" href="#">
                          {page4}
                        </a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
    )
}