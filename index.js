export default class GClassroom {
  static rootUrl = "https://classroom.googleapis.com";

  static setAccessToken(accessToken) {
    GClassroom.accessToken = accessToken;
  }

  static isInitialized() {
    return !!GClassroom.accessToken;
  }

  static createHeaders(contentType, contentLength, ...additionalPairs) {
    let pairs = [["Authorization", `Bearer ${GClassroom.accessToken}`]];

    [
      ["Content-Type", contentType],
      ["Content-Length", contentLength],
    ].forEach((data) => (data[1] ? pairs.push(data) : undefined));

    if (additionalPairs) {
      pairs = pairs.concat(additionalPairs);
    }

    const headers = new Headers();

    for (let pair of pairs) {
      headers.append(pair[0], pair[1]);
    }
    console.log(headers);
    return headers;
  }

  static getCourses() {
    return fetch(`${GClassroom.rootUrl}/v1/courses`, {
      headers: GClassroom.createHeaders(),
    });
  }
}
