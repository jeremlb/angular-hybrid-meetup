HomeController.$inject = ['jokes'];

export default function HomeController(jokes) {
  const vm = this;
  vm.jokes = jokes;
}
