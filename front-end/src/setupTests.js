// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const ResizeObserver = require('resize-observer-polyfill');

// Étendre la classe ResizeObserver pour l'utiliser dans les tests
global.ResizeObserver = ResizeObserver;
