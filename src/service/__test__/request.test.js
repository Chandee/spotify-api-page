import { waitFor } from '@testing-library/dom';
import axios from 'axios';
import { requestAxios } from '../request';

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: jest.fn(() => Promise.resolve('teste')),
        interceptors: {
          response: {
            use: jest.fn(() => Promise.resolve('teste')),
          },
        },
      };
    },
  };
});

describe('Testa a request', () => {
  test('Verifica se consegue fazer uma requisiao', async () => {
    waitFor(() => {
      expect(requestAxios('teste', { method: 'get' })).toBe('teste');
    });
  });
});
