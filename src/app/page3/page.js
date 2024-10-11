'use client'
import { Button } from "@/components/ui/button"
import {useState} from 'react'
  
export default function Page3(){

    const [number, setNumber] = useState(0)

    const addNumber = () => {
        setNumber(number + 1)
    }
    
    const notAddNumber = () => {
        setNumber(number - 1)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
           
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"> 
      {number}
    </h2>

        <br></br>

<div className="flex gap-10">
<Button onClick={notAddNumber}>-1</Button>
<Button onClick={addNumber}>+1</Button>
</div>

        </div>
       
//hover card dla przycisku
//dialog który po otworzeniu ma przycisk który kasuje licznik do 0 ezzzas

    )
}