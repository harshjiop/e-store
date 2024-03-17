import ProductCard from "@/components/ProductCard";
import Card from "@/components/ProductCard";
import data from '@/Data/Bookdataa'
import { cn } from "@/lib/utils";
export default function Product(){
    return(
      <>
      <div className='mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4'>
  
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