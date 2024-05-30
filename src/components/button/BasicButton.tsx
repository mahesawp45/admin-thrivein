import { CSSProperties } from 'react';

interface BasicButtonProps {
  label?: string;
  classStyle?: string;
  child?: React.ReactElement<any, any>;
  style?: CSSProperties;
  labelStyle?: CSSProperties;
  onPress: () => void;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  label,
  onPress,
  classStyle,
  child,
  style,
  labelStyle,
}) => {
  return (
    <button
      onClick={() => {
        onPress();
      }}
      className={
        'flex items-center justify-center rounded-md bg-[#242DA8] px-10 py-2 ' +
        classStyle
      }
      style={style}
    >
      {label ? (
        <p className="text-center font-bold text-white" style={labelStyle}>
          {' '}
          {label}{' '}
        </p>
      ) : (
        child
      )}
    </button>
  );
};

export default BasicButton;
