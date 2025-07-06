import useApi from '../hooks/useApi';

export const fetchGeneralBudgetStatus = async (month) => {
  const { get } = useApi();
  const response = await get(`/parent/general-budget-status?month=${month}`);
  return response.data;
};
