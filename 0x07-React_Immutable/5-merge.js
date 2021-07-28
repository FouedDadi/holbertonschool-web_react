import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const pgvalue1 = List(page1);
  const pgvalue2 = List(page2);
  return pgvalue1.concat(pgvalue2);
}

export function mergeElements(page1, page2) {
  const pgmap1 = Map(page1);
  const pgmap2 = Map(page2);
  return pgmap1.merge(pgmap2);
}
