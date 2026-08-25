import { render, screen, within } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it } from 'vitest';

import App from './App';
import { projects } from './content/portfolio';

describe('App', () => {
  it('apresenta o posicionamento profissional no primeiro título', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /complexidade de negócio, clareza na experiência/i,
      }),
    ).toBeInTheDocument();
  });

  it('oferece navegação sem depender de JavaScript', () => {
    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: /navegação principal/i,
    });

    expect(
      within(navigation).getByRole('link', { name: 'Trabalho' }),
    ).toHaveAttribute('href', '#trabalho');
    expect(
      within(navigation).getByRole('link', { name: 'Projetos' }),
    ).toHaveAttribute('href', '#projetos');
  });

  it('renderiza todos os projetos selecionados com acesso ao código', () => {
    render(<App />);

    projects.forEach((project) => {
      const heading = screen.getByRole('heading', { name: project.title });
      const card = heading.closest('article');

      expect(card).not.toBeNull();
      expect(
        within(card as HTMLElement).getByRole('link', {
          name: /código no github/i,
        }),
      ).toHaveAttribute('href', project.repositoryUrl);
    });
  });

  it('mantém âncoras internas válidas e links externos seguros', () => {
    const { container } = render(<App />);

    container
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((link) => {
        expect(container.querySelector(link.hash)).not.toBeNull();
      });

    container
      .querySelectorAll<HTMLAnchorElement>('a[target="_blank"]')
      .forEach((link) => {
        expect(link).toHaveAttribute('rel', 'noreferrer');
      });
  });

  it('não apresenta violações estruturais de acessibilidade', async () => {
    const { container } = render(<App />);
    const results = await axe.run(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    });

    expect(results.violations).toHaveLength(0);
  });
});
