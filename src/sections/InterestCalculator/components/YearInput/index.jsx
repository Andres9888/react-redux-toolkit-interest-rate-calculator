import { InputNumber } from 'antd';
import { selectYear, setYear } from 'features/counter/interestRateCalculatorSlice';
import { useDispatch, useSelector } from 'react-redux';

export const YearInput = () => {
  const initialStoreYear = useSelector(selectYear);
  const dispatch = useDispatch();

  function onChange(year) {
    dispatch(setYear(year));
  }

  return <InputNumber defaultValue={initialStoreYear} max={100} min={1} onChange={onChange} />;
};
