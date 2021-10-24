import React from 'react';
import { render, screen } from '@testing-library/react';
import MusicaFaixa from '../MusicaFaixa';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/Theme';

describe('Teste da faixa de musica', () => {
  test('Verifica renderizacao', () => {
    render(
      <ThemeProvider theme={theme}>
        <MusicaFaixa nomeMusica='teste' tempo='1:01' />
      </ThemeProvider>
    );
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
    expect(screen.getByText(/1:01/i)).toBeInTheDocument();
  });
});
