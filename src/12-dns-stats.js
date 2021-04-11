/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const count = {};
  const count2 = {};
  for (let i = 0; i < domains.length; i++) {
    const reversed = domains[i].split('.').reverse();
    // console.log(reversed);
    let current = reversed[0];
    if (count[`${current}`]) {
      count[`${current}`]++;
    } else {
      count[`${current}`] = 1;
    }
    for (let k = 1; k < reversed.length; k++) {
      if (count[`${current}.${reversed[k]}`]) {
        count[`${current}.${reversed[k]}`]++;
        // console.log(`${current}.${reversed[k]}`);
        current = `${current}.${reversed[k]}`;
      } else {
        count[`${current}.${reversed[k]}`] = 1;
        // console.log(`${current}.${reversed[k]}`)
        current = `${current}.${reversed[k]}`;
      }
    }
  }
  // console.log(Object.keys(count));
  Object.keys(count).forEach((el) => {
    count2[`.${el}`] = count[el];
  });
  // console.log(count2);
  return count2;
}

module.exports = getDNSStats;
