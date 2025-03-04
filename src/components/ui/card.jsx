export function Card({ children, className }) {
  return (
    <div className={`p-6 bg-gray-800 rounded-lg ${className}`}>{children}</div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-4">{children}</div>;
}
