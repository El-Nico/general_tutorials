// URL and Request Objects
/*
 url: href, host, hostname, port, protocol, origin, pathname, hash, search, searchParams
request options: method, body, headers, cache
cache  (HTTP Cache, NOT Cache API)
- `default`: cache first, server request if stale, update cache if newer
- `reload`: always go to server AND update the cache
- `no-store`: always go to server but do not update the cache
- `no-cache`: make a conditional request to server and compare, update cache and use latest
- `force-cache`: only makes request if there is no HTTP Cache file
- `only-if-cache`: from cache or 504 gateway timeout error
Headers
- string | object literal | new Headers()
*/

const str = `${window.location.href}local-sample.json?attempt=123&other=hello`;

export const desc =
  "the simplest fetch you can use and still have error3 handling";
export const textRes = {};
export function getData() {
  //
  const url = new URL(str);
  textRes.host = url.host;
  textRes.origin = url.origin;
  textRes.protocol = url.protocol;
  textRes.port = url.port;
  textRes.pathname = url.pathname;
  console.log(url);
  console.log(url.host, url.origin, url.protocol, url.port, url.pathname);
  const request = new Request(url, {
    headers: { "x-steve": "hello" },
    method: "GET",
    cache: "no-store",
  });

  fetch(request)
    .then((response) => {
      if (!response.ok) throw new Error("Invalid");
      return response.json();
    })
    .catch((err) => console.warn(err.message));
}
