import 'remixicon/fonts/remixicon.css';

function Products({result}) {
  return (
    <>
    <section className="card-container flex flex-wrap ms-[6rem] sm:ms-[20rem] mt-2 sm:mt-[2rem] mb-10 z-[-2] ">
      {result}
    </section>
    
    </>
  )
}

export default Products