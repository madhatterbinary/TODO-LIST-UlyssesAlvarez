var $ = require('jquery');

module.exports = {
  filterTasks: function (tasks, showFinished, searchText) {
    var filteredTasks = tasks;

    // Filter by showFinished
    filteredTasks = filteredTasks.filter((task) => {
      return !task.finished || showFinished;
    });

    // Filter by searchText
    filteredTasks = filteredTasks.filter((task) => {
      var text = task.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort tasks with non-finished first
    filteredTasks.sort((a, b) => {
      if (!a.finished && b.finished) {
        return -1;
      } else if (a.finished && !b.finished) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTasks;
  }
};
