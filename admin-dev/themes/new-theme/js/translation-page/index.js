import $ from 'jquery';
import initMessagesVisibilityToggling from './messages-visibility'
import initMessagesEdition from './messages-edition'
import initMessagesPagination from './messages-pagination'
import initSearch from './messages-search'

$(() => {
  initMessagesVisibilityToggling();
  var search = initSearch();
  initMessagesEdition(search);
  initMessagesPagination();
});
