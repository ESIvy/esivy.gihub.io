exports.createRedirects = (createRedirect) => {
  createRedirect({ fromPath: '/old-url', toPath: '/new-url', isPermanent: true });
}
