import wordList from "shared/misc/stopwords";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

/**
 * Removes stoping word and numbers from a string and returns a clean seo friendly slug
 * @param {string} tokens - the string to be cleaned
 */
export function seoSlugify(tokens) {
  const regEx = /[&\/\\#,+()$~%.'":*?<>{}0-9]/g;
  const tokensArr = tokens
    .replace(regEx, "")
    .split(" ")
    .filter((word) => word);

  const wordsToKeep = [];

  for (let word of tokensArr) {
    const isInWorldList = wordList.indexOf(word) === -1;
    if (isInWorldList) wordsToKeep.push(word);
  }
  return wordsToKeep.join("-");
}

/**
 * Format dates with dayjs and returns two types based on variant passed
 * @param {string} date - the sactual date to be formated
 * @param {string} variant - optional key to determin the returned format
 */
export function formatDate(date, variant = "") {
  if (variant === "before") {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow(true);
  } else {
    return dayjs(date).format("MMMM D, YYYY");
  }
}

/**
 * Calculates the perc success rate
 * @param {string} numerator
 * @param {string} denominator
 */
export function getSuccessRate(numerator: number, denominator: number) {
  if (numerator === 0) {
    // avoide Infinit when dividing by 0
    numerator = denominator;
  } else if (denominator == 0) {
    denominator = 0;
  }
  const successRate = (denominator / numerator) * 100;
  return successRate;
}
