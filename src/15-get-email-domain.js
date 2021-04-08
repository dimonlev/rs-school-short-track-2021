/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let afterCat = email.substr(email.lastIndexOf('@') + 1);
  if (afterCat[0] === '.') {
    afterCat = afterCat.substr(1);
  }
  return afterCat;
}

module.exports = getEmailDomain;
