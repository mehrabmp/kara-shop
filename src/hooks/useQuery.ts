import { useCallback } from 'react';
import { useRouter } from 'next/router';

interface Options {
  shallow?: boolean;
  scroll?: boolean;
}

export const useQuery = (options: Options = {}) => {
  const router = useRouter();

  const addQuery = useCallback(
    (name: string, value: string | string[] | number) => {
      router.push(
        {
          query: { ...router.query, [name]: value },
        },
        undefined,
        options
      );
    },
    [router, options]
  );

  const removeQuery = useCallback(
    (name: string) => {
      delete router.query[name];
      router.push({ query: router.query }, undefined, options);
    },
    [router, options]
  );

  return { addQuery, removeQuery };
};
