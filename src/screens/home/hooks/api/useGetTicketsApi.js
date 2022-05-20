import api from "../../../../services/api-service";
import { useQueryWrapper } from "../../../../hooks/use-api-wrapper";
import { useDispatch } from "react-redux";
import { getTickets } from "../../../../app/tickets/tickets.reducer";

const endpoint = "entries";

export function useGetTicketsApi() {
  const dispatch = useDispatch();
  const queryFn = async () => {
    const { data } = await api.get(endpoint);
    dispatch(getTickets({ tickets: data?.entries }));
    return data;
  };

  return useQueryWrapper(endpoint, queryFn);
}
