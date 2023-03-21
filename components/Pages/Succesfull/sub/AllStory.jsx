import React from 'react'
import { useState } from 'react'
import { listCards } from '../../../../data/dataAllStory';
import ReactPaginate from 'react-paginate';
import { admin, design, development, work, hiring, writing, finance, sales } from '../../../../utils/AllStoryCategory';
import {GoTriangleDown} from 'react-icons/go'
const labelList = ['All','Admin & Customer Support','Design & Creative','Development & IT','Work & Career','Hiring & Managment','Writing & Translation','Finance & Accounting','Sales & Marketing'];

const allCategories = [admin, design, development, work, hiring, writing, finance, sales];


const AllStory = () => {
    const [category, setCategory] = useState('All');
    const [label, setLabel] = useState('All');
    const [show, setShow] = useState(false);
    
    const [pageNumber, setPageNumber] = useState(0);
    const cardsPerPage = 6;
    const pageVisited = pageNumber * cardsPerPage;
    const allPageCount = Math.ceil(listCards.length / cardsPerPage);
    const adminPageCount = Math.ceil(admin.length / cardsPerPage);
    const designPageCount = Math.ceil(design.length / cardsPerPage);
    const developmentPageCount = Math.ceil(development.length / cardsPerPage);
    const workPageCount = Math.ceil(work.length / cardsPerPage);
    const hiringPageCount = Math.ceil(hiring.length / cardsPerPage);
    const writingPageCount = Math.ceil(writing.length / cardsPerPage);
    const financePageCount = Math.ceil(finance.length / cardsPerPage);
    const salesPageCount = Math.ceil(sales.length / cardsPerPage);

    const categoryPageCount = [
        allPageCount,
        adminPageCount,
        designPageCount,
        developmentPageCount,
        workPageCount,
        hiringPageCount,
        writingPageCount,
        financePageCount,
        salesPageCount
    ]

    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }

    const showCard = (item, index) => (
        <div className='sl-item-card' key={index}>
                <div className='sl-item-img'><img src={item.image}/></div>
                <div>
                    <div className='sl-category-items'>
                        {item.category.map((cat, ind)=>(
                            <span key={ind}>{cat}</span>
                        ))}
                        <span>{item.story}</span>
                    </div>
                    <h3>{item.title}</h3>
                </div>
            </div>
    )
    const allCategoriesToShow= [];
    const displayCards = listCards
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ));
    
    const displayAdmin = admin
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ))

    const displayDesign = design
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ))

    const displayDevelopment = development
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ))

    const displayWork = work
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ))

    const displayHiring = hiring
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ))

    const displayWriting = writing
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ))

    const displayFinance = finance
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ))
    const displaySales = sales
    .slice(pageVisited, pageVisited + cardsPerPage)
    .map((item, index)=>(
        showCard(item,index)
    ))

  return (
    <section className='all-stories'>
        <h3>All Success Stories</h3>
        <div>
            <div className='stories-select' onClick={()=> setShow(!show)} >{label}<GoTriangleDown/></div>
            {show ? 
                <div className='sl-opt-list' onClick={() => setShow(false)}>
                    {labelList.map((item, ind) =>(
                            <div 
                                key={ind} 
                                className='sl-opt-item' 
                                onClick={()=>{setLabel(item); setCategory(item)}}
                            >
                            {item}
                            </div>
                        ))}
                </div>
            :null}
        </div>

        {/* Show All Categories */}
        <div className='sl-items-cards'>
            {category === 'All' ? displayCards : null}
        
            {/* Show by categories */}
            {category === 'Admin & Customer Support' ? displayAdmin : null}
            {category === 'Design & Creative' ? displayDesign : null}
            {category === 'Development & IT' ? displayDevelopment : null}
            {category === 'Work & Career' ? displayWork : null}
            {category === 'Hiring & Managment' ? displayHiring : null}
            {category === 'Writing & Translation' ? displayWriting : null}
            {category === 'Finance & Accounting' ? displayFinance : null}
            {category === 'Sales & Marketing' ? displaySales : null}

            {categoryPageCount.map((item,index)=>(
                category === labelList[index] ? 
                <ReactPaginate
                    previousLabel={'Back'}
                    nextLabel={'Next'}
                    pageCount={item}
                    onPageChange={changePage}
                    containerClassName={'paginationBttn'}
                    previousLinkClassName={'BackBttn'}
                    nextLinkClassName={'NextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                    />
                    : null
            )) }    
        </div>
    </section>
  )
}

export default AllStory

