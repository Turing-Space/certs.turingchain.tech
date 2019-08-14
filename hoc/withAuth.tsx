import React from 'react';
import { GetInitialProps, NextContext } from 'next';
import { UserContext } from '@/contexts/user';
import isFunction from 'lodash/isFunction';
import { Router } from '@/i18n';

const withAuth = (
  mode: 'user' | 'issuer',
  getInitialProps?: GetInitialProps<any, any>,
) => (Component: React.ComponentType) =>
  class WithAuthComponent extends React.Component {
    static contextType = UserContext;

    static getInitialProps(ctx: NextContext) {
      if (getInitialProps) {
        return isFunction(getInitialProps)
          ? getInitialProps(ctx)
          : getInitialProps;
      }
    }

    componentDidMount() {
      if (this.context.user.loginMode !== mode) {
        Router.push(`/auth/login?mode=${mode}`);
      }
    }

    render() {
      return this.context.user.loginMode === mode ? <Component /> : null;
    }
  };

export default withAuth;
