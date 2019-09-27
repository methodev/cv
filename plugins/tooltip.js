import Vue from 'vue';
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip';
import { isMobile } from 'mobile-device-detect';

VTooltip.enabled = !isMobile;
Vue.directive('tooltip', VTooltip);
Vue.directive('close-popover', VClosePopover);
Vue.component('v-popover', VPopover);
