/* ------------Developed By Naveen Kumar----------------- */
/* ------------Common Middleware ----------------- */
const commonMiddleware = () => next => action => {
  next(action);
};

export default commonMiddleware;
