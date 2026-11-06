import assert from 'node:assert/strict';
import test from 'node:test';
import { ui } from '../src/content/ui.js';
import { experience, projects } from '../src/config/portfolioConfig.js';
import { shapeRepos } from '../scripts/fetch-github.mjs';

const CATEGORIES = ['ai', 'fullstack', 'freelance'];
const isBilingual = (value) => typeof value === 'string' || (Boolean(value?.es) && Boolean(value?.en));

test('every UI string exists in both languages', () => {
  assert.deepEqual(Object.keys(ui.es).sort(), Object.keys(ui.en).sort());
  for (const lang of ['es', 'en']) {
    for (const [key, value] of Object.entries(ui[lang])) assert.ok(value, `${lang}.${key} is empty`);
  }
});

test('every project has a valid category and bilingual text', () => {
  const ids = new Set();
  for (const project of projects) {
    assert.ok(!ids.has(project.id), `duplicate project id ${project.id}`);
    ids.add(project.id);
    assert.ok(CATEGORIES.includes(project.category), `${project.id}: bad category`);
    assert.ok(isBilingual(project.name), `${project.id}: name`);
    assert.ok(isBilingual(project.description), `${project.id}: description`);
  }
});

test('every experience entry has bilingual role and period', () => {
  for (const item of experience) {
    assert.ok(['work', 'education'].includes(item.type), `${item.id}: type`);
    assert.ok(isBilingual(item.role) && isBilingual(item.period), `${item.id}: text`);
  }
});

test('shapeRepos drops forks, private, archived and the profile repo, then sorts by stars', () => {
  const base = { description: null, language: null, html_url: 'u', pushed_at: '2026-01-01T00:00:00Z', stargazers_count: 0 };
  const shaped = shapeRepos([
    { ...base, name: 'fork', fork: true },
    { ...base, name: 'secret', private: true },
    { ...base, name: 'old', archived: true },
    { ...base, name: 'JhonJMD' },
    { ...base, name: 'plain' },
    { ...base, name: 'popular', stargazers_count: 5, language: 'Python' },
  ]);
  assert.deepEqual(shaped.map((repo) => repo.name), ['popular', 'plain']);
  assert.equal(shaped[1].description, '');
});
