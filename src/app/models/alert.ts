import Swal, { SweetAlertOptions } from 'sweetalert2';

export class Alert {
  private static base: SweetAlertOptions = {
    heightAuto: false,
    backdrop: true, // Esta opción asegura que el fondo sea oscuro
    allowOutsideClick: false, // Impide cerrar al hacer clic fuera del modal
    confirmButtonText: 'Aceptar',
    background: '#2E2E2E', // Fondo oscuro para el cuadro
    color: '#F5F5F5', // Texto claro para contrastar
    customClass: {
      confirmButton: 'custom-confirm-button',
      cancelButton: 'custom-cancel-button',
      popup: 'custom-swal-popup',
    },
  };

  static error(titulo: string, texto: string) {
    Swal.fire(Alert.base);
    Swal.update({
      icon: 'error',
      title: titulo,
      text: texto,
    });
  }

  static async question() {
    return await Swal.fire({
      heightAuto: false,
      backdrop: true, // Esta opción asegura que el fondo sea oscuro
      allowOutsideClick: false, // Impide cerrar al hacer clic fuera del modal
      title: '¿Desea cerrar sesión?',
      icon: 'question',
      background: '#2E2E2E', // Fondo oscuro para el cuadro
      color: '#F5F5F5', // Texto claro para contrastar
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      showCancelButton: true,
      customClass: {
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
        popup: 'custom-swal-popup',
      },
    })
      .then((res) => {
        return res.isConfirmed;
      })
      .catch(() => {
        return false;
      });
  }
}
