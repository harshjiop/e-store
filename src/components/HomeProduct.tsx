import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "./ProductCard"

export default function HomePooduct() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-xl"
    >
      <CarouselContent className="w-full items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/3">
            <div className="p-1">
              <div className="">
                <ProductCard />
                <CardContent >
                  <h1>product</h1>
                </CardContent>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
