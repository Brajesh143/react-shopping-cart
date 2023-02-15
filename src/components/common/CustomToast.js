import { toast } from 'react-toastify';

const customToast = {
  success(msg, options = {}) {
    return toast.success(msg, {
      ...options,
      className: 'toast-success-container toast-success-container-after',
      progressClassName: "toast-success-progress",
      position: "bottom-right"
    });
  },
  error(msg, options = {}) {
    return toast.error(msg, {
      ...options,
      className: 'toast-error-container toast-error-container-after',
      progressClassName: "toast-error-progress",
      position: "bottom-left"
    });
  },
  info(msg, options = {}) {
    return toast.warning(msg, {
      ...options,
      className: 'toast-info-container toast-info-container-after',
      progressClassName: "toast-info-progress",
      position: "bottom-left"
    });
  },
};


export default customToast;