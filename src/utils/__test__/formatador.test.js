import { listaArtistas } from '../formatador';

describe('Testes do formatador', () => {
  test('Testa a transformação do vetor de nome em nome na string', () => {
    expect(listaArtistas(['joao', 'maria'])).toBe('joao, maria');
  });
});
