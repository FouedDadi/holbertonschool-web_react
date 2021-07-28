import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const pgmap1 = Map(page1);
  const pgmap2 = Map(page2);
  return pgmap1.mergeDeep(pgmap2);
}
