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
      rank: "1",
      department: "CSE",
      athletics: "62",
      games:'45',
      total:'107'

     
    },
    {
        rank: "2",
        department: "MECH",
        athletics: "55",
        games:'25',
        total:'101'

     
    },
    {
        rank: "3",
        department: "AD",
        athletics: "24",
        games:'30',
        total:'54'

     
    },
    {
        rank: "4",
        department: "CE",
        athletics: "28",
        games:'15',
        total:'43'

      
    },
    {
        rank: "5",
        department: "1st YEAR",
        athletics: "10",
        games:'20',
        total:'30'

      
    },
    {
        rank: "",
        department: "",
        athletics: "",
        games: "",
        
      },
  ]
  
  export function ScoreBoard() {
    return (
      <Table>
        <TableHeader>
        <TableRow>
            
            
          </TableRow>

          <TableRow>
            

            <TableHead className="md:block hidden text-white bg-zinc-900 md:pt-3 ">Rank</TableHead>
            <TableHead className='text-white bg-zinc-900'>Department</TableHead>
            <TableHead className='text-white  bg-zinc-900'>Athletics</TableHead>
            <TableHead className='text-white  bg-zinc-900'>Games</TableHead>
            <TableHead className=" text-white  bg-zinc-900">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
                
              <TableCell className="md:block hidden font-medium text-white">{invoice.rank}</TableCell>
              <TableCell className='text-white'>{invoice.department}</TableCell>
              <TableCell className='text-white'>{invoice.athletics}</TableCell>
              <TableCell className=" text-white">{invoice.games}</TableCell>
              <TableCell className=" text-white">{invoice.total}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
       
      </Table>
    )
  }
  