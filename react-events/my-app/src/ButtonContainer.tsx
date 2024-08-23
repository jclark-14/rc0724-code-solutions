type Props = {
  onButtonClick: () => void;
  buttonText: string;
};

export function ButtonContainer({ buttonText, onButtonClick }: Props) {
  return (
    <div>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}
