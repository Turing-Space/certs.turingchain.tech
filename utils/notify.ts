import toast, { Options } from 'cogo-toast';

type TNotifyProps = {
  msg: string;
  onClick?: () => void;
};

const createOptions: (props: {
  onClick?: () => void;
  customOpts?: Options;
}) => Options = ({ onClick, customOpts = {} }) => ({
  hideAfter: 2.5,
  bar: {
    size: '5px',
  },
  position: 'top-center',
  ...customOpts,
  onClick: hide => {
    if (onClick) {
      onClick();
    }
    // @ts-ignore
    hide();
  },
});

export default {
  error: ({ msg, onClick }: TNotifyProps, opts?: Options) =>
    toast.error(msg, createOptions({ onClick, customOpts: opts })),
  info: ({ msg, onClick }: TNotifyProps, opts?: Options) =>
    toast.info(msg, createOptions({ onClick, customOpts: opts })),
  success: ({ msg, onClick }: TNotifyProps, opts?: Options) =>
    toast.success(msg, createOptions({ onClick, customOpts: opts })),
};
