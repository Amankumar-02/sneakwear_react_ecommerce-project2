import {Header, Home, Footer} from './components/Index.js';

//newData
import {useState} from 'react';
import { dataBase } from './dataBase.js';
import {Card} from './components/AddCart/components/index.js';

function App() {

  //newData
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
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected);
    }

    return filteredProducts.map(({img, title, reviews, prevPrice, newPrice}, index)=>(
      <Card
      keyID = {index}
      img = {img}
      title = {title}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}
      />
    ))
  }

  // Finally the filtered result ready to pass
  const result = filteredData(dataBase, selectCategory, query);

  return (
    <>
    <Header query={query} handleInputChange={handleInputChange}/>
    <Home  handleRadioChange={handleRadioChange}  handleClick={handleClick} result={result} />
    <Footer/>
    </>
  )
}

export default App
