// src/app/page.tsx
import { Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";
// import HowItWorks from "@/components/landing/HowItWorks";
// import FeaturedBooks from "@/components/landing/FeaturedBooks";
// import CommunityShowcase from "@/components/landing/CommunityShowcase";
// import GetStartedCTA from "@/components/landing/GetStartedCTA";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center space-y-16 py-8 px-4">
			<HeroSection />
			{/* <HowItWorks />
			<Suspense fallback={<div>Loading books...</div>}>
				<FeaturedBooks />
			</Suspense>
			<CommunityShowcase />
			<GetStartedCTA /> */}
		</main>
	);
}
