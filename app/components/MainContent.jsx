'use client';
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const images = [
	{
		src: '/hero1.jpeg',
		alt: 'Image 1',
		width: 1900,
		height: 1080
	},
	{
		src: '/hero2.jpeg',
		alt: 'Image 2',
		width: 1900,
		height: 1080
	},
	{
		src: '/hero3.jpeg',
		alt: 'Image 3',
		width: 1900,
		height: 1080
	}
];

export default function MainContent() {
	const [ showPassword, setShowPassword ] = useState(false);
	const [ currentImageIndex, setCurrentImageIndex ] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);
	return (

		<div className=" relative w-sreen h-155 ">
      
			<Image
				src={images[currentImageIndex].src}
				alt={images[currentImageIndex].alt}
				fill
				priority
				
			/>

				
				<div className="absolute top-7/12 md:right-10  -translate-y-1/2 z-20  ">
					
					<div className="w-96 bg-black/70 p-4 rounded-t-xl text-white ">
						<h2 className="text-4xl font-extralight mb-2 ml-10">Sampath Vishwa</h2>
						<p className="text-base font-sans text-gray-200 ml-10">
							Enter Vishwa Username & Password to access your account
						</p>
					</div>

					
					<form className="w-96 bg-black/70 rounded-b-xl px-6 flex flex-col gap-2">
						
						<label className="text-gray-400 text-sm">Sampath Vishwa Username</label>
						<input
							type="text"
							placeholder="Enter Vishwa Username here"
							className="w-full border border-gray-500 p-2 rounded-md bg-black text-sm text-white"
						/>

						
						<label className="text-gray-400 text-sm">Password</label>

						<div className="relative w-full">
							<input
								type={showPassword ? 'text' : 'password'}
								placeholder="Enter Vishwa Password here"
								className="w-full border border-gray-500 p-2 pr-10 rounded-md bg-black text-sm text-white"
							/>

							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
							>
								{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
							</button>
						</div>

						
						<button className="mt-4 w-1/2 self-center bg-gray-400 text-white py-2 rounded-md hover:bg-gray-300">
							Login
						</button>

						<div className="flex flex-col items-center gap-1 mb-3">
							<div className="flex items-center text-white">
								<span>Forgot Password?</span>
								<button className="text-orange-700 ml-1 font-medium hover:underline cursor-pointer">
									Reset
								</button>
							</div>
							<div className="flex items-center text-white">
								<span>New to Vishwa?</span>
								<button className="text-orange-700  ml-1 font-medium hover:underline cursor-pointer">
									Sign-up
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
	
  
	);
}
