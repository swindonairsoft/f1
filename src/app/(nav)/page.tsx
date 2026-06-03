import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import ScrollHint from "@/components/ScrollHint";

import icon from "public/tag-logo.svg";

export default function Home() {
	return (
		<div>
			<section className="flex h-screen w-full flex-col items-center pt-20 sm:justify-center sm:pt-0">
				<Image src={icon} alt="Chris Zulu F1 logo" width={200} />

				<h1 className="my-20 text-center text-5xl font-bold">
					Real-time Formula 1 <br />
					telemetry and timing
				</h1>

				<div className="flex flex-wrap gap-4">
					<Link href="/dashboard">
						<Button className="rounded-xl! border-2 border-transparent p-4 font-medium">Go to Dashboard</Button>
					</Link>

					<Link href="/schedule">
						<Button className="rounded-xl! border-2 border-zinc-700 bg-transparent! p-4 font-medium">
							Check Schedule
						</Button>
					</Link>
				</div>

				<ScrollHint />
			</section>

			<section className="pb-20">
				<h2 className="mb-4 text-2xl">What&apos;s this?</h2>

				<p className="text-md">
					A real-time telemetry and timing dashboard for Formula 1 by Chris Zulu. See live timing data of the cars on
					track including lap times, sector times, gaps between drivers, tire choices and much more.
				</p>
			</section>
		</div>
	);
}
