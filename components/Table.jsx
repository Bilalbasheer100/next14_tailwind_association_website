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
  
  const invoices = [
    {
      invoice: "1",
      paymentStatus: "CSE",
      totalAmount: "1000",
      event:'4x100m'

     
    },
    {
      invoice: "2",
      paymentStatus: "MECH",
      totalAmount: "900",
      event:'4x100m'

     
    },
    {
      invoice: "3",
      paymentStatus: "CIVIL",
      totalAmount: "800",
      event:'4x100m'

     
    },
    {
      invoice: "4",
      paymentStatus: "AD",
      totalAmount: "700",
      event:'4x100m'

      
    },
    {
      invoice: "5",
      paymentStatus: "CYBER",
      totalAmount: "600",
      event:'4x100m'

      
    },
    {
      invoice: "6",
      paymentStatus: "EEE",
      totalAmount: "450",
      event:'4x100m'

     
    },
    {
      invoice: "7",
      paymentStatus: "EC",
      totalAmount: "300",
      event:'4x100m'
      
    },
    {
        invoice: "",
        paymentStatus: "",
        totalAmount: "",
        event: "",
        
      },
  ]
  
  export function ScoreBoard() {
    return (
      <Table>
        <TableHeader>
        <TableRow>
            <TableCell className=''></TableCell>
            <TableCell className=""></TableCell>
          </TableRow>

          <TableRow>
            <TableHead className="w-[100px] text-white bg-zinc-900">Rank</TableHead>
            <TableHead className='text-white bg-zinc-900'>Department</TableHead>
            <TableHead className='text-white  bg-zinc-900'>Event</TableHead>
            <TableHead className="text-right text-white  bg-zinc-900">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium text-white">{invoice.invoice}</TableCell>
              <TableCell className='text-white'>{invoice.paymentStatus}</TableCell>
              <TableCell className='text-white'>{invoice.event}</TableCell>
              <TableCell className="text-right text-white">{invoice.totalAmount}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
       
      </Table>
    )
  }
  