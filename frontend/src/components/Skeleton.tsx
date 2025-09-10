function Skeleton({ className }: { className: string }) {
    return (
        <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
            <div className="flex animate-pulse space-x-4">
                <div
                    className={`bg-gray-200 ${className}`}
                />
            </div>
        </div>
    )
}

export default Skeleton;