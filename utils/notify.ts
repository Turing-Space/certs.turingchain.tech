import toast, { Options } from 'cogo-toast';

type TNotifyProps = {
  msg: string;
  onClick?: () => void;
};

const createOptions: (props: { onClick?: () => void }) => Options = ({
  onClick,
}) => ({
  hideAfter: 2,
  position: 'top-center',
  onClick: hide => {
    if (onClick) {
      onClick();
    }
    // @ts-ignore
    hide();
  },
});

export default {
  error: ({ msg, onClick }: TNotifyProps) =>
    toast.error(msg, createOptions({ onClick })),
  info: ({ msg, onClick }: TNotifyProps) =>
    toast.info(msg, createOptions({ onClick })),
};
