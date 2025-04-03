// src/hooks/useClient.ts
import { useEffect, useState } from 'react';

/**
 * Custom hook to safely use browser APIs in a Next.js app
 * preventing hydration errors
 */
export function useClient() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
}

// Example usage:
// 
// function MyComponent() {
//   const isClient = useClient();
//   
//   // Safe to use browser APIs when isClient is true
//   const windowWidth = isClient ? window.innerWidth : 0;
//   
//   return (
//     <div>
//       {isClient && <div>This only renders on the client</div>}
//     </div>
//   );
// }