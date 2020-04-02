module.exports = function(bookmarks) {
  const titles = [];
  for (let i = 0; i < bookmarks.roots.bookmark_bar.children.length; i++) {
    const obj = { id: i, name: bookmarks.roots.bookmark_bar.children[i].name };
    titles.push(obj);
  }
  return titles;
};
