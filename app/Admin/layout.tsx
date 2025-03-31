export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </nav>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}