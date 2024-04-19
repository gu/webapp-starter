import { useQuery } from '@tanstack/react-query';
import { Config } from 'api-schemas';

const getConfig = async () => {
  const res = await fetch('http://localhost:3000/api/config');
  return res.json();
};

export default function useConfig() {
  const { isPending, error, data, isFetching } = useQuery<Config>({
    queryKey: ['config'],
    queryFn: getConfig,
    staleTime: Infinity, // Prevents refreshing config on most focus events.
  });

  return { isPending, error, data, isFetching };
}
