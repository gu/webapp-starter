import { useQuery } from '@tanstack/react-query';
import { Config } from 'api-schemas';

const getConfig = async () => {
  const res = await fetch('/api/config');
  return res.json();
};

export default function useConfig() {
  const { isPending, error, data, isFetching } = useQuery<Config>({
    queryKey: ['config'],
    queryFn: getConfig,
    // Prevents refreshing config on most focus events.
    // Since this is used to render the base layout,
    // excessive refreshes will essentially reload the entire app
    staleTime: Infinity,
  });

  return { isPending, error, config: data, isFetching };
}
