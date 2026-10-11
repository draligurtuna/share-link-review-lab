(function (root) {
  'use strict';
  const TRACKING_KEYS = new Set(['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id']);
  const SENSITIVE_KEY = /(?:password|passwd|secret|token|api[_-]?key|authorization|signature|session[_-]?id|^code$)/i;
  function inspectLink(input, options = {}) {
    const value = typeof input === 'string' ? input.trim() : '';
    const fail = message => ({ ok: false, message });
    if (!value) return fail('Enter an absolute public HTTP or HTTPS URL.');
    if (value.length > 8192) return fail('This URL is too long for the worksheet.');
    if (/\s/.test(value) || /[\u0000-\u001f\u007f]/.test(value)) return fail('Whitespace and control characters are not accepted inside a URL.');
    if (!/^https?:\/\//i.test(value)) return fail('Use an explicit http:// or https:// scheme.');
    let url;
    try { url = new URL(value); } catch { return fail('The URL could not be parsed.'); }
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname) return fail('Only absolute HTTP and HTTPS URLs are supported.');
    if (url.username || url.password) return fail('Do not paste URLs containing sign-in credentials.');
    const parameters = Array.from(url.searchParams, ([key, value]) => ({ key, value, tracking: TRACKING_KEYS.has(key) }));
    if (parameters.some(item => SENSITIVE_KEY.test(item.key))) return fail('This looks like a private or signed link. Use a public page address without secrets.');
    const removed = options.removeTracking === true ? parameters.filter(item => item.tracking) : [];
    const candidate = new URL(url.href);
    // If nothing is removed, leave the original query encoding untouched.
    // When editing a query, URLSearchParams may reserialize encoding (for example %20 to +).
    if (removed.length) {
      const keep = new URLSearchParams();
      parameters.filter(item => !item.tracking).forEach(item => keep.append(item.key, item.value));
      candidate.search = keep.toString();
    }
    return {
      ok: true,
      original: url.href,
      candidate: candidate.href,
      protocol: url.protocol,
      host: url.host,
      pathname: url.pathname,
      fragment: url.hash,
      parameters,
      removed,
      encodingMayChange: removed.length > 0,
      canonicalVerified: false,
      httpChecked: false,
      redirectChecked: false
    };
  }
  const api = Object.freeze({ inspectLink });
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.LinkReview = api;
}(typeof window !== 'undefined' ? window : this));
