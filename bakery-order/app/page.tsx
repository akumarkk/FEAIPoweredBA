"use client";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import { useCopilotAction } from "@copilotkit/react-core";
import { BakeryOrder } from "@/components/BakeryOrder";

export default function Home() {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <BakeryAssistant />
      <main><h1>Welcome to the AI Bakery</h1></main>
    </CopilotKit>
  );
}

function BakeryAssistant() {
  useCopilotAction({
    name: "bookBakeryOrder",
    description: "Book an order for a pastry",
    parameters: [
      { name: "pastry", type: "string", description: "Name of the pastry" },
      { name: "quantity", type: "number", description: "How many" },
    ],
    render: ({ args, status }) => (
      <BakeryOrder 
        pastry={args.pastry!} 
        quantity={args.quantity!} 
        status={status === "complete" ? "Confirmed!" : "Booking..."} 
      />
    ),
    handler: async ({ pastry, quantity }) => {
      console.log(`Booking ${quantity} ${pastry}`);
      // Add your API call to your database here
    }
  });

  return <CopilotChat />;
}