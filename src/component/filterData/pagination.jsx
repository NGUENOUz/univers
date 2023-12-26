import React, { useState } from 'react'
import Hot, { Marketing, web } from '../data/hot_projet';
import './pagination.scss'

const Pagination = () => {
 
    // declaration de l'etat  des composants 

    const [currentPage , setCurrentPage]=useState(1);
    const recordsPerPage= 5;
    const lastindex= currentPage* recordsPerPage ;
    const firstIndex=lastindex- recordsPerPage;

    const record= Hot.slice(firstIndex , lastindex);
     const npage= Math.ceil(Hot.length/recordsPerPage);
    
     const numbers = [...Array(npage+1).keys()].slice(1) ;


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
    }
  };

  const handleFilterMarketing= (event) => {
    if (event) {
    
      setFilteredData(
       Marketing
      );
    }
  };


  return (
    
    <div>

        <h2> Explorez la liste de tout mes projets par catégories ici : </h2>

        <div className="projet-pagination">
            <div className="filter-project">
               
             <button value="Hot" onClick={handleFilterAll} className='filter-btn '>
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
          {filteredData.map((node)=>(

              <div className="flip-card">
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
     </div>
      
    </div>
  )
}

export default Pagination
