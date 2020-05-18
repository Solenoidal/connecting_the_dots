/* eslint-disable no-console */
import Vue from 'vue';

/**
 * return a formatted date string
 * @param {string} dateString
 * @return {string} "YYYY/MM/DD"
 */
export function date(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const dateFormat = new Intl.DateTimeFormat('ja', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return dateFormat.format(date);
}

Vue.prototype.$date = date;
