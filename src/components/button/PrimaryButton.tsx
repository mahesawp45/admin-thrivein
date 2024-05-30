import { FC } from 'react';

export interface PrimaryButtonProps {
  title?: string;
  onSubmit: () => void;
  disable?: boolean;
  child?: React.ReactElement<any, any>;
  classStyle?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  title,
  onSubmit,
  disable,
  child,
  classStyle,
}) => (
  <button
    className={`outline-hover h-14 w-full justify-center     rounded-2xl  border-none align-middle text-[14px] font-normal hover:bg-opacity-40 ${
      disable
        ? 'bg-gray-500 bg-opacity-50 text-white'
        : 'bg-[#242DA8] text-white transition-all duration-200 ease-in hover:bg-opacity-80'
    }  `}
    type="submit"
    onClick={() => {
      onSubmit();
    }}
    disabled={disable}
  >
    {title ? (
      <p className="text-center font-bold text-white">
        {title}
        {disable}
      </p>
    ) : (
      child
    )}
  </button>
);

export default PrimaryButton;
