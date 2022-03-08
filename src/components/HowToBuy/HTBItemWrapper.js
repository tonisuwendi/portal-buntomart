export default function HTBItemWrapper({ children, step, data, onChangeStep }) {
  const changeStepHandler = (data) => {
    onChangeStep(data);
  };
  return (
    <div
      onClick={changeStepHandler.bind(null, data)}
      className={`flex relative px-6 py-5 border ${
        step.id === data.id ? "buntomart-border-color-primary" : ""
      } transition buntomart-rounded cursor-pointer mb-8`}
    >
      {children}
    </div>
  );
}
