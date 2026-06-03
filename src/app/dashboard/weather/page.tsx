"use client";

import { useDataStore } from "@/stores/useDataStore";
import { WeatherMap } from "@/app/dashboard/weather/map";
import NoSession from "@/components/NoSession";

export default function WeatherPage() {
	const hasSession = useDataStore((state) => state.state?.SessionInfo != null);

	if (!hasSession) {
		return (
			<div className="relative h-[calc(100%-142px)] w-full md:h-full">
				<NoSession message="Weather data will appear here during a live session" />
			</div>
		);
	}

	return (
		<div className="relative h-[calc(100%-142px)] w-full md:h-full">
			<WeatherMap />
		</div>
	);
}
