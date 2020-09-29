import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-bd4264c6.js';
import './chunk-0928016a.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-6348754d.js';
export { P as BPagination, a as BPaginationButton } from './chunk-6348754d.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
