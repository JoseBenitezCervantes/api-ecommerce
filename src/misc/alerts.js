import Swal from "sweetalert2";

const loader = (title, closeLoader) => {
  let timerInterval;
  Swal.fire({
    title,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
  if (closeLoader) {
    Swal.close();
  }
};

const errorAlert = (text) => {
  Swal.fire({
    title: "Error!",
    text,
    icon: "error",
    confirmButtonText: "OK",
  });
};

const successAlert = (text) => {
  Swal.fire({
    title: "Success!",
    text,
    icon: "success",
    confirmButtonText: "OK",
  });
};

export { loader, errorAlert, successAlert };
