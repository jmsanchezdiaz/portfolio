import { useElementOnScreen } from "../../customHooks/useElementOnScreen";

const VisibleElement = ({
  children,
  options = null,
  speed = "2500ms",
  mode = "",
}) => {
  const { containerRef, isVisible } = useElementOnScreen(options);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity  ${speed} ${mode}`,
      }}
    >
      {children}
    </div>
  );
};

export default VisibleElement;
