"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export default function Page3() {
	const [number, setNumber] = useState(0);

	const addNumber = () => {
		setNumber(number + 1);
	};

	const notAddNumber = () => {
		setNumber(number - 1);
	};

	const setNumberZero = () => {
		setNumber(0);
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen gap-5'>
			<HoverCard>
				<HoverCardTrigger>
					<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
						{number}
					</h1>
				</HoverCardTrigger>
				<HoverCardContent>Your number is: {number}</HoverCardContent>
			</HoverCard>

			<br></br>

			<div className='flex gap-10'>
				<Button onClick={notAddNumber}>-1</Button>
				<Button onClick={addNumber}>+1</Button>
			</div>

			<br></br>

			<Dialog>
				<DialogTrigger>
					<Button>0</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Change Value to Zero?</DialogTitle>

						<DialogDescription>
							<Button onClick={setNumberZero}>Yes</Button>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>

	);
}
