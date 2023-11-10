export function TableContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
