import { handlers } from './handlers';
// src/mocks/server.ts
import { setupServer } from 'msw/node';

// This configures a service worker with the given request handlers
export const server = setupServer(...handlers);