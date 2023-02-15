import { useState } from "react";

const FlashMessage = (props) => {
  console.log("props", props);
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => {
    setIsClose();
  };

  return (
    // <div className="container">
    <>
      { isClose == false &&
      (props.type === "success" && (
            <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
            >
            A simple success alert—check it out!
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={handleClose}
            ></button>
            </div>
      )) || ( props.type === "danger" && (
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          A simple danger alert—check it out!
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
      )
      )
        }
      </>  
    // {/* // </div> */}
  );
};
export default FlashMessage;
