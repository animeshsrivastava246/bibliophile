import { Skeleton } from "@/components/ui/skeleton";

export function BookGridSkeleton({ count = 6 }: { count?: number }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{Array.from({ length: count }).map((_, i) => (
				<div key={i} className="space-y-3">
					<Skeleton className="w-full h-64 rounded" />
					<Skeleton className="w-3/4 h-4" />
					<Skeleton className="w-1/2 h-4" />
				</div>
			))}
		</div>
	);
}
