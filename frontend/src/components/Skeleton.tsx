function Skeleton({ className }: { className: string }) {
    return (
        <div className="mx-auto w-full max-w-sm rounded-md border border-stone-800/50 p-2">
            <div className="flex animate-pulse space-x-4">
                <div
                    className={`bg-stone-800/50 ${className}`}
                />
            </div>
        </div>
    )
}

export default Skeleton;