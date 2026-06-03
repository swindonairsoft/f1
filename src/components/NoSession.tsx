export default function NoSession({ message }: { message?: string }) {
	return (
		<div className="flex h-full min-h-[60vh] w-full flex-col items-center justify-center gap-3 text-zinc-400">
			<div className="text-5xl">🏁</div>
			<p className="text-xl font-medium text-white">No active session</p>
			<p className="text-sm text-zinc-500">{message ?? "Live data will appear here when a session is in progress"}</p>
			<p className="text-xs text-zinc-600">Check the Schedule page for upcoming race weekends</p>
		</div>
	);
}
