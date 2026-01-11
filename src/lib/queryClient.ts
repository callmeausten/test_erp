import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { MOCK_MODE } from "./mockAuth";
import { handleMockApiRequest, shouldMockUrl } from "./mockApiHandlers";

const TOKEN_STORAGE_KEY = "unanza_access_token";

function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    return {
      "Authorization": `Bearer ${token}`,
    };
  }
  return {};
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// Wrap native fetch to intercept mock API calls
const originalFetch = window.fetch;
window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;

  // Check if this should be mocked
  if (MOCK_MODE && shouldMockUrl(url)) {
    return handleMockApiRequest(url, init || {});
  }

  // Pass through to real fetch
  return originalFetch(input, init);
};

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const headers: Record<string, string> = {
    ...getAuthHeaders(),
  };

  if (data) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
    async ({ queryKey, meta }) => {
      const headers: Record<string, string> = {
        ...getAuthHeaders(),
        ...(meta?.headers as Record<string, string> || {}),
      };

      const res = await fetch(queryKey.join("/") as string, {
        credentials: "include",
        headers,
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      return await res.json();
    };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
