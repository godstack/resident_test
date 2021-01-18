import { setSelectedFilters, unselectFilter, unselectAll } from './slice';

describe('filters reducer', () => {
  it('should create an action to clear selected filters', () => {
    const expectedAction = {
      type: 'filters/unselectAll'
    };

    expect(unselectAll()).toEqual(expectedAction);
  });

  it('should create an action to clear single selected filter', () => {
    const expectedAction = {
      type: 'filters/unselectFilter',
      payload: {
        filterName: 'size',
        deleteId: '2x3'
      }
    };

    expect(
      unselectFilter({
        filterName: 'size',
        deleteId: '2x3'
      })
    ).toEqual(expectedAction);
  });

  it('should create an action to set selected filters', () => {
    const expectedAction = {
      type: 'filters/setSelectedFilters',
      payload: {
        filterName: 'color',
        filters: { id: 'neutral', title: 'Neutral' }
      }
    };

    expect(
      setSelectedFilters({
        filterName: 'color',
        filters: { id: 'neutral', title: 'Neutral' }
      })
    ).toEqual(expectedAction);
  });
});
