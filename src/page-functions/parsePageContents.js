import cheerio from "cheerio";

const checkForGoogleAnalytics = html => {
  return /google-analytics.com\/analytics.js/i.test(html);
};
const getDomainsFromLinks = links => {
  return links
    .filter(url => url && url.startsWith("http"))
    .map(link => {
      return new URL(link).hostname;
    });
};
const getLinks = html => {
  const links = [];
  const $ = cheerio.load(html);
  $("a").each((_, link) => {
    links.push($(link).attr("href"));
  });
  return links;
};
const getPageTitle = html => {
  const $ = cheerio.load(html);
  return $("title").text();
};

export { checkForGoogleAnalytics, getDomainsFromLinks, getLinks, getPageTitle };
