import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from './rootReducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useTypedSelector };
