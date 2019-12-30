import React from 'react';
import { GetInitialProps, NextContext } from 'next';
import { UserContext } from '@/contexts/user';
import isFunction from 'lodash/isFunction';
import { Router } from '@/i18n';

function withAuth<P = {}>(
  mode: 'user' | 'issuer' | 'register',
  getInitialProps?: GetInitialProps<any, any>,
) {
  return (Component: React.ComponentType<P>) =>
    class WithAuthComponent extends React.Component<P> {
      static contextType = UserContext;

      static getInitialProps(ctx: NextContext) {
        if (getInitialProps) {
          return isFunction(getInitialProps)
            ? getInitialProps(ctx)
            : getInitialProps;
        }
      }

      // componentDidMount() {
      //   if (this.context.user.loginMode !== mode) {
      //     Router.push(`/auth/login?mode=${mode}`);
      //   }
      // }

      render() {
        // return this.context.user.loginMode === mode ? (
        //   <Component {...this.props} />
        // ) : null;

        return <Component {...this.props} />
      }
    };
}

export default withAuth;
