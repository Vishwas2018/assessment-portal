// src/mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  // Mock auth endpoints
  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          id: '1',
          name: 'Test User',
          email: 'test@example.com',
          role: 'student',
        }
      })
    );
  }),
  
  rest.post('/api/auth/register', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          id: '1',
          name: 'Test User',
          email: 'test@example.com',
          role: 'student',
        }
      })
    );
  }),
  
  rest.post('/api/auth/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Logged out successfully'
      })
    );
  }),
  
  rest.get('/api/auth/me', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        role: 'student',
      })
    );
  }),
  
  // Mock test endpoints
  rest.get('/api/tests', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          title: 'Sample Test 1',
          description: 'This is a sample test',
          questions: [],
          timeLimit: 60,
          passingScore: 70,
          isPublished: true,
          createdBy: '1',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Sample Test 2',
          description: 'This is another sample test',
          questions: [],
          timeLimit: 30,
          passingScore: 60,
          isPublished: false,
          createdBy: '1',
          createdAt: new Date().toISOString(),
        },
      ])
    );
  }),
];