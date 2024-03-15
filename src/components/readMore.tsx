
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
export default function ReadMore(){
    return(
        <>
        <Popover>
            <PopoverTrigger asChild>
                <span className="text-blue-500 cursor-pointer">Read More ...</span>
            </PopoverTrigger>
            <PopoverContent className="bg-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia repudiandae porro placeat quisquam voluptate alias a voluptates, cum iste laboriosam provident esse iusto recusandae illum tenetur reprehenderit ea modi ipsa. Nemo aliquid quos a minima quasi nisi quas possimus perspiciatis eos id assumenda, est beatae. Iure ea magnam illum labore aspernatur. Obcaecati dignissimos magnam suscipit velit, fuga quod maxime non similique ea soluta necessitatibus quos quia voluptatum dolorum totam, laboriosam cum explicabo nulla quaerat a vitae consequuntur vel. Aliquam dolorum perferendis sed repellendus? Repudiandae explicabo, molestiae nobis veniam repellendus eligendi, accusantium cupiditate quam omnis alias nesciunt quia. Modi, consequuntur? Assumenda.
            </PopoverContent>
        </Popover>
        
        </>
    )
}