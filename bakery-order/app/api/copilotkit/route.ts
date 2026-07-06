import { CopilotRuntime, GoogleGenerativeAIAdapter, copilotRuntimeNextJSAppRouterEndpoint } from "@copilotkit/runtime";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

// 1. Initialize the Runtime
const runtime = new CopilotRuntime();

// 2. Configure the Adapter (Using Gemini for the Bakery Agent)
const serviceAdapter = new GoogleGenerativeAIAdapter({ 
  model: "gemini-2.0-flash" 
});

// 4. Create and export the handler
const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({ 
  runtime, 
  serviceAdapter, 
  endpoint: "/api/copilotkit" 
});

export const POST = async (req: NextRequest) => {
  return handleRequest(req);
};

export const GET = async (req: Request) => {
  return handleRequest(req);
};