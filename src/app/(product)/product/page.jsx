import ProductCard from "@/components/ProductCard";
import Card from "@/components/ProductCard";
import data from '@/Data/Bookdataa'
export default function Product(){
    return(
      <>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 ml-2 py-10">
  
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      </>
    
    //     data.map(
    //   ({author,countery,imageLink,language,link,pages,title,years}) => (
    //     <Card
    //       key={Math.random()}
    //       img={imageLink}
    //       title={title}
    //       star={star}
    //       author={author}
    //       countery={countery}
    //       reviews={reviews}
    //       prevPrice={prevPrice}
    //       newPrice={newPrice}
    //     />
    //   )
    // )
    
    )
    
    
}