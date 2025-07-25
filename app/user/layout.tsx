export default function LayoutUser({children}
  : 
  {children: React.ReactNode}) {
  return (
    <div className="border-b-3">
      {children}
    </div>
  );
}