import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-bd4264c6.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { T as Tooltip } from './chunk-7c7cf2b6.js';
export { T as BTooltip } from './chunk-7c7cf2b6.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Tooltip);
  }
};
use(Plugin);

export default Plugin;
