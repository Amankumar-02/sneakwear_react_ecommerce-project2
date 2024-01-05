import React, {useEffect, useState} from "react";
import authService from "./appwrite/auth.js";
import {Header, Home, Footer} from './components/Index.js';
import {dataBase} from './dataBase.js';
import {Card} from './components/AddCart/index.js';


function HomePage() {
  // var for selection of radio and recommended Buttons
  const [selectCategory, setSelectCategory] = useState(null);
  // var for nav searchbar
  const [query, setQuery] = useState("");

  //search input Filter function
  const handleInputChange = (e)=>{
    setQuery(e.target.value);
  };
  const filteredItems = dataBase.filter((product)=>product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  //radio Filter function
  const handleRadioChange = (e)=>{
    setSelectCategory(e.target.value);
  };

  //recommended buttons filter function
  const handleClick = (e)=>{
    setSelectCategory(e.target.value)
  }

  // Main Filter Container Function
  function filteredData(dataBase, selected, query){
    let filteredProducts = dataBase
    // Filtering Input Items
    if(query){
      filteredProducts = filteredItems;
    }

    //Selected radio and buttons Filter
    if(selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title})=>
        category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    }

    return filteredProducts.map(({img, title, reviews, prevPrice, newPrice}, index)=>(
      <Card key = {index} img = {img} title = {title} reviews = {reviews} prevPrice = {prevPrice} newPrice = {newPrice} />
    ))
  }

  // Finally the filtered result ready to pass
  const result = filteredData(dataBase, selectCategory, query);


  // const navigate = useNavigate();
  //get to login Data
  const [userDetails, setUserDetails] = useState();
  useEffect(()=>{
    try {
      const getData = authService.account.get()
      getData.then(
        function(res){
          setUserDetails(res)
        }
      )
    } catch (error) {
      console.log(`Get Data error: `, error)
    }
  }, [])



  return (
    <>
        {/* {userDetails ? (
            <>            */}
                <Header handleInputChange={handleInputChange} logo={userDetails}/>
                <Home  handleRadioChange={handleRadioChange}  handleClick={handleClick} result={result} />
                <Footer/>
            {/* </>
        ) : (
            <>
                <Header query={query} handleInputChange={handleInputChange} logo="false"/>
                <Home  handleRadioChange={handleRadioChange}  handleClick={handleClick} result={result} />
                <Footer/>
                {null}
            </>
        ) } */}
    </>
  )
}

export default HomePage
