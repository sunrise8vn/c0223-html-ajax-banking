class App {
  static DOMAIN_SERVER = 'http://localhost:3300';
  static API_SERVER = 'http://localhost:3300';

  static API_CUSTOMER = this.API_SERVER + '/customers';
  static API_DEPOSIT = this.API_SERVER + '/deposits';

  static showDeleteConfirmDialog() {
    return Swal.fire({
      icon: 'warning',
      text: 'Are you sure you want to delete the selected data ?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it !',
      cancelButtonText: 'Cancel',
    });
  }

  static showSuccessAlert(t) {
    Swal.fire({
      icon: 'success',
      title: t,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  static showErrorAlert(t) {
    Swal.fire({
      icon: 'error',
      title: 'Warning',
      text: t,
    });
  }
}

class Customer {
  constructor(id, fullName, email, phone, balance, address) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.balance = balance;
    this.address = address;
  }
}

class Deposit {
  constructor(id, customerId, transactionAmount) {
    this.id = id;
    this.customerId = customerId;
    this.transactionAmount = transactionAmount;
  }
}

// $(function() {
//     $(".num-space").number(true, 0, ',', ' ');
//     $(".num-point").number(true, 0, ',', '.');
//     $(".num-comma").number(true, 0, ',', ',');

//     $('[data-toggle="tooltip"]').tooltip();
// });
