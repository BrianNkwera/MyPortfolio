import { useRouteError } from '@remix-run/react';
import { Error } from '~/layouts/error';

export const meta = () => {
  return [{ title: '404 | Redacted' }];
};

export function ErrorBoundary() {
  const error = useRouteError();

  return <Error error={error} />;
}
