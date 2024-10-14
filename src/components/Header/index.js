import Link from "next/link";

export default function Header() {
	return (
		<div className='flex justify-center bg-black text-white'>
			<Link href='/'>Home |</Link>
			<Link href='/page' className="ml-2">Page1 |</Link>
			<Link href='/page2' className="ml-2">Page2 |</Link>
			<Link href='/page3' className="ml-2">Page3 |</Link>
		</div>
	);
}
