export function BakeryOrder({ pastry, quantity, status }: { pastry: string, quantity: number, status: string }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="font-bold">Order: {pastry}</h3>
      <p>Quantity: {quantity}</p>
      <p className="text-blue-500">Status: {status}</p>
    </div>
  );
}