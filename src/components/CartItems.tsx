import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Trash2 } from "lucide-react"
  
  const invoices = [
    {
      name: "Phone",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      name: "Laptop",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      name: "Computer",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      name: "I pnone 15",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      name: "Fan",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      name: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      name: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export default function CartItems() {
    return (
      <Table>
        
        <TableCaption>A list of your recent names.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Status</TableHead>
            {/* <TableHead>Method</TableHead> */}
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((name) => (
            <TableRow key={name.name}>
              <TableCell className="font-medium">{name.name}</TableCell>
              <TableCell>{name.paymentStatus}</TableCell>
              
              <TableCell className="text-justify">{name.totalAmount}</TableCell>
              <TableCell><Trash2 size={15} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="">
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      
      </Table>
    )
  }
  