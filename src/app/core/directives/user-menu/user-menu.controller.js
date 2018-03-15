UserMenuController.$inject = ['UserService'];

export default function UserMenuController(UserService) {
  const vm = this;
  vm.user = {};

  UserService.getLoggedUser().then((user) => vm.user = user);
}
