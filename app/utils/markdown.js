import Remarkable from 'remarkable';
import removeMD from 'remove-markdown';
import t from 'typy';

const md = new Remarkable({
  html: true,
  breaks: true
});

export const getHTMLFromMD = (mdInput) => (t(mdInput).isString ? md.render(mdInput) : '');

export const getPlainTextFromMD = (mdInput) => (t(mdInput).isString ? removeMD(mdInput) : '');
