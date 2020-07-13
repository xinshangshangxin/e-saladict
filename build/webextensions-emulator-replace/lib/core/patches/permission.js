window.browser.permissions.contains.callsFake((permissions) => {
  console.info('contains permissions: ', permissions);
  return true;
});
