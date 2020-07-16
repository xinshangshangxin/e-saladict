const loadApi = ['electron', 'rxjs', 'rxjs/operators'];

process.once('loaded', () => {
  loadApi.map((item) => {
    global[item] = require(item);
  });
});
