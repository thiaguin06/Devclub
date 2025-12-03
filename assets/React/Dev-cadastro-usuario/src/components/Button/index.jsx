import PropTypes from "prop-types";

import { Button } from "./style";

function DefaultButton({ children, tema, ...props }) {
  console.log(props);
  return (
    <Button {...props} tema={tema}>
      {children}{" "}
    </Button>
  );
}
DefaultButton.propTypes = {
  tema: PropTypes.string,
};
export default DefaultButton;
