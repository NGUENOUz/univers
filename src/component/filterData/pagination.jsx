import React, { useEffect, useState } from 'react'
import Hot, { Marketing, web } from '../data/hot_projet';
import './pagination.scss'

const Pagination = () => {
 
    // declaration de l'etat  des composants 

    const [currentPage , setCurrentPage]=useState(1);
    const recordsPerPage= 6;
    const lastindex= currentPage* recordsPerPage ;
    const firstIndex=lastindex- recordsPerPage;




//      const [filterTags, setFilterTags] = useState([])

//      // partie pour le filtre des données 

//      const filteredDATA = Hot.filter((node) =>
//      filterTags.length > 0
//        ? filterTags.every((filterTag) =>
//            node.tags.map((tag) => tag.slug).includes(filterTag)
//          )
//        : Hot
//    )





  const [filteredData, setFilteredData] = useState(Hot); // Initialisation avec toutes les données

  const record= filteredData.slice(firstIndex , lastindex);
  const npage= Math.ceil(filteredData.length/recordsPerPage);
 
  const numbers = [...Array(npage+1).keys()].slice(1) ;
  
  const [btnActive , setBtnActive]=useState();


  // fonctions pour la pagination 

  function changeCPage(id){
    setCurrentPage(id)
  
  }
  function nextPage(){
    if(currentPage!==npage){
      setCurrentPage(currentPage+1);
    }
  }
  function prePage(){
    if(currentPage!==1){
      setCurrentPage(currentPage-1);
    }
  }

  // fin de la fonction

useEffect(()=>{
  setBtnActive(btnActive);
})
   
  const handleFilterClick = (event) => {
    if (event) {
    
      setFilteredData(
        event.target.value,
        console.log(  event.target.value)
      );
    }
  };

  
  const handleFilterAll = (event) => {
    if (event) {
    
      setFilteredData(
       Hot
      );
      setBtnActive(!btnActive);

     
    }
  };

  const handleFilterMarketing= (event) => {
    if (event) {
    
      setFilteredData(
       Marketing
      );
      setBtnActive(!btnActive);
    }
  };


  return (
    
    <div className='paginat'>

        <h2 > Explore the list of all my projects by category here </h2>

        <div className="projet-pagination">
            <div className="filter-project">
               
             <button value="Hot" onClick={handleFilterAll} className={`filter-btn ${!btnActive?'Active':''}`}  >
                All project
             </button>

             <button value={[Marketing]} onClick={handleFilterMarketing}  className='filter-btn'>
                Marketing Digitale
             </button>

             <button value={[web]} onClick={handleFilterMarketing}  className='filter-btn'>
                Web Develpment
             </button>

             <button value={[Marketing]} onClick={handleFilterMarketing}  className='filter-btn'>
                UI/UX Design 
             </button>
              
            </div>

        <div className="filter-container">
          {record.map((node)=>(

              <div className="flip-card" data-aos="zoom-in">
              <div className="flip-card-inner">
               <div className="flip-card-front">
                 <img src={node.image} alt="" />
               </div>
              <div className="flip-card-back">
                <h1>{node.titre}</h1>
                <p>{node.description}</p>
                <div className=" custom-btn btn-cv">
                          <a href={node.lien} >More details</a>
                </div>
              </div>
             </div>
          </div>
          )
          
          )}
        </div>
{/*  partie pour la bar de pagination  */}

      <div className='navPage'>
        <ul className='pages'>
          <li className='pageItem'>
            <a href="#" className='pageLink'
            onClick={prePage}>Preview</a>
          </li>
          {
            numbers.map((n,i)=>(
              <li className={`pageItem ${currentPage===n ?'active':''}`} key={i}>
              <a href="#" className='pageItem'
              onClick={()=>changeCPage(n)}> {n}</a>  
               </li>
            ))
          }

<li className='pageItem'>
            <a href="#" className='pageLink'
            onClick={nextPage}>Next</a>
          </li>
        </ul>
      </div>
     </div>
      
    </div>
  )
}

export default Pagination


